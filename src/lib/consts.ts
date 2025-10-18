// primitives then objects
// alphabetical order

import type {
	AccommodationType,
	ArrivalTime,
	DepartureTime,
	Option,
	PayingFor,
	SharingWith,
} from './types';

export const APPS_SCRIPT_URL =
	'https://script.google.com/macros/s/AKfycbzCLwqREzlP7b9Zdb3bTW_sna_fpTkzj_2HMft_bhrwQvjTdJb6VvqPU4wZz2h4kYgKoQ/exec';
export const EXPECTED_PARTICIPANTS = 40;
export const SATURDAY_DINNER_RATE = 8;

export const ACCOMMODATION_TYPES: {
	name: AccommodationType;
	rate: number;
	sleeps: number;
}[] = [
	{ name: 'Powered Site', rate: 39, sleeps: 20 },
	{ name: 'Bunk Room', rate: 72, sleeps: 9 },
	{ name: 'Lakeside Cabin', rate: 138, sleeps: 7 },
	{ name: 'Family Room (Unit)', rate: 138, sleeps: 13 },
];

export const ARRIVAL_TIMES: ArrivalTime[] = [
	'Friday Evening',
	'Saturday Morning',
	'Saturday Afternoon (Before Dinner)',
	'Saturday Evening (After Dinner)',
];

export const DEPARTURE_TIMES: DepartureTime[] = [
	'Saturday Afternoon (Before Dinner)',
	'Saturday Evening (After Dinner)',
	'Sunday Morning',
	'Sunday Afternoon',
];

export const PAYING_FOR_OPTIONS: Option<PayingFor>[] = [
	{ value: 'myself', label: 'Myself' },
	{ value: 'family', label: 'Myself and my spouse/family' },
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
	},
};

export const SHARING_WITH_OPTIONS: Option<SharingWith>[] = [
	{ value: 'nobody', label: 'Nobody else' },
	{ value: 'friends', label: 'Some friends' },
	{ value: 'anyone', label: 'Open to anyone' },
];
