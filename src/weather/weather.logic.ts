import type { LocationCoords } from "../types";

export const getLocation = async (): Promise<LocationCoords> => {
    return new Promise((resolve,reject)=>{
        if(!navigator.geolocation){
            reject(new Error("Geolocation not supported"));
            return;
        }

        const success = (position: GeolocationPosition ) => {
            const coords: LocationCoords = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }
            resolve(coords);
        }

        const error = (err: GeolocationPositionError) => {
            alert("Unable to retrieve your location.");
            reject(err);
        };
        navigator.geolocation.getCurrentPosition(success, error);
    });
};