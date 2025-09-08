// primitives then objects
// alphabetical order

import type { AccommodationType, ArrivalTime, DepartureTime } from "./types";

export const EXPECTED_PARTICIPANTS = 40;
export const SATURDAY_DINNER_RATE = 5;

export const ACCOMMODATION_TYPES: {
    name: AccommodationType;
    rate: number;
    sleeps: number;
}[] = [
    { name: 'Powered Site', rate: 39, sleeps: 20 },
    { name: 'Bunk Room', rate: 72, sleeps: 9 },
    { name: 'Lakeside Cabin', rate: 138, sleeps: 7 },
    { name: 'Family Room', rate:138,  sleeps: 13 },
];

export const ARRIVAL_TIMES: ArrivalTime[] = [
    'Friday Evening',
    'Saturday Morning',
    'Saturday Afternoon',
];

export const DEPARTURE_TIMES: DepartureTime[] = [
    'Saturday Afternoon',
    'Sunday Morning',
    'Sunday Afternoon',
];

export const RATES = {
    nightly: {
        lakesideHall: 200,
        additionalAdult: 15,
        additionalChild: 10,
    },

    daily: {
        individual: 5,
        family: 15,
    }
};