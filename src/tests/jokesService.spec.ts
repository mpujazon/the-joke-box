import {beforeEach, describe, expect, it, vi} from "vitest";

vi.mock("../lib/httpClient", () => (
    {
        apiRequest: vi.fn(),
    }
));

describe("jokesService.loadJoke", ()=> {
    beforeEach(()=>{
        vi.resetModules();
    });

    it("should alternate api calls: 1st API Dad Jokes, 2nd API Chuck Jokes and return Joke typeof object", async () => {
        const { apiRequest } = await import("../lib/httpClient");
        const mockedApiRequest = apiRequest as unknown as ReturnType<typeof vi.fn>;

        mockedApiRequest
            .mockResolvedValueOnce({ joke: "dad joke" })
            .mockResolvedValueOnce({ value: "chuck joke" });

        const { jokesService } = await import("../services/jokesService");

        const r1 = await jokesService.loadJoke();
        const r2 = await jokesService.loadJoke();

        expect(mockedApiRequest).toHaveBeenCalledTimes(2);
        expect(r1).toEqual({ value: "dad joke" });
        expect(r2).toEqual({ value: "chuck joke" });
    });

    it("should propagate the error if apiRequest fails", async () => {
        vi.resetModules();

        const { apiRequest } = await import("../lib/httpClient");
        const mockedApiRequest = apiRequest as any;

        mockedApiRequest.mockRejectedValueOnce(new Error("network error"));

        const { jokesService } = await import("../services/jokesService");

        await expect(jokesService.loadJoke()).rejects.toThrow("network error");
    });
});