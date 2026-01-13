const BASE_URL = import.meta.env.VITE_BASE_URL ?? '';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type QueryParams = Record<string, string | number | boolean | undefined>;

interface RequestOptions<TBody> {
    method?: HttpMethod;
    body?: TBody;
    headers?: Record<string, string>;
    query?: QueryParams;
}

export const apiRequest = async <TResponse, TBody = unknown>(
    endpoint: string,
    options: RequestOptions<TBody> = {}
): Promise<TResponse> => {
    const { method = "GET", body, headers = {}, query} = options;

    const queryString = buildQueryString(query);

    const response = await fetch(`${endpoint}${queryString}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        const errorText = await response
            .text()
            .catch(() => response.statusText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    return (await response.json()) as TResponse;
};

const buildQueryString = (query?: QueryParams): string => {
    if (!query) return '';
    const params = new URLSearchParams();

    Object.entries(query).forEach(([key, value]) => {
        if(value === undefined || value === null) return;
        params.append(key,String(value));
    });

    const qs = params.toString();
    return qs? `?${qs}` : '';
}