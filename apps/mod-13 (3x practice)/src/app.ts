import axios from 'axios';
import { Loader } from '@googlemaps/js-api-loader';

import './styling/app.css';

const GOOGLE_API_KEY = 'AIzaSyBs1v6qgV-ZREFFTgjpVHOp98-QyEU9c3A';
let address: string;
// const GEOCODING_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`;
type GoogleGeocodingResponse = {
    status:
        | 'OK'
        | 'ZERO_RESULTS'
        | 'OVER_DAILY_LIMIT'
        | 'OVER_QUERY_LIMIT'
        | 'REQUEST_DENIED'
        | 'INVALID_REQUEST'
        | 'UNKNOWN_ERROR';
    results: {
        geometry: {
            location: {
                lat: number;
                lng: number;
            };
        };
    }[];
};

const loader = new Loader({
    apiKey: GOOGLE_API_KEY,
});

let map: google.maps.Map;
loader.load().then(() => {
    map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
});

const form = document.querySelector('form') as HTMLFormElement;
form.addEventListener('submit', async (event: Event) => {
    event.preventDefault();

    const addressInput = document.getElementById('address') as HTMLInputElement;
    address = addressInput.value;

    //  send this to google API
    try {
        const response = await axios.get<GoogleGeocodingResponse>(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
                address
            )}&key=${GOOGLE_API_KEY}`
        );
        console.info(response);
        if (response.data.status !== 'OK') {
            throw new Error('could not fetch location');
        }

        const location = (response.data as GoogleGeocodingResponse).results[0]
            .geometry.location;
        map = new google.maps.Map(
            document.getElementById('map') as HTMLElement,
            {
                center: { lat: location.lat, lng: location.lng },
                zoom: 8,
            }
        );
    } catch (error) {
        console.error(error);
    }
});
