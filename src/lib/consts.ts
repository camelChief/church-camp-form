// primitives then objects
// alphabetical order

import type {
	AccommodationType,
	ArrivalTime,
	DepartureTime,
	Option,
	PayingFor,
	SharingWith,
} from "./types";

export const APPS_SCRIPT_URL =
	"https://script.google.com/macros/s/AKfycbwJPPaUPJ30Roz2VennpVdNwDTkIcpp2J-KG1TBWo8-4q5euJTwn-9m_wkdXVweVCdljg/exec";
export const EXPECTED_PARTICIPANTS = 40;
export const SATURDAY_DINNER_RATE = 5;

export const ACCOMMODATION_SHARING_OPTIONS: Option[] = [
	{ value: "alone", label: "By myself" },
	{ value: "family", label: "With my spouse/family" },
	{
		value: "friends",
		label: "With some friends",
		description:
			"I've organised a group who I will share my accommodation with. I will only be paying for myself.",
	},
	{
		value: "family_and_friends",
		label: "With my spouse/family and some friends",
		description:
			"We've organised a group who we will share our accommodation with. I will only be paying for myself and my family.",
	},
	{
		value: "alone_open",
		label: "By myself, open to sharing",
		description:
			"I haven't organised a group, but I'm happy to share my accommodation. I will only be paying for myself.",
	},
	{
		value: "family_open",
		label: "With my spouse/family, open to sharing",
		description:
			"We haven't organised a group, but we're happy to share our accommodation. I will only be paying for myself and my family.",
	},
];

export const ACCOMMODATION_TYPES: {
	name: AccommodationType;
	rate: number;
	sleeps: number;
}[] = [
	{ name: "Powered Site", rate: 39, sleeps: 20 },
	{ name: "Bunk Room", rate: 72, sleeps: 9 },
	{ name: "Lakeside Cabin", rate: 138, sleeps: 7 },
	{ name: "Family Room", rate: 138, sleeps: 13 },
];

export const ARRIVAL_TIMES: ArrivalTime[] = [
	"Friday Evening",
	"Saturday Morning",
	"Saturday Afternoon",
];

export const DEPARTURE_TIMES: DepartureTime[] = [
	"Saturday Afternoon",
	"Sunday Morning",
	"Sunday Afternoon",
];

export const PAYING_FOR_OPTIONS: Option<PayingFor>[] = [
	{ value: "myself", label: "Myself" },
	{ value: "spouse", label: "Myself and my spouse" },
	{ value: "family", label: "Myself and my family" },
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
	{ value: "nobody", label: "Nobody else" },
	{ value: "friends", label: "Some friends" },
	{ value: "anyone", label: "Anyone who needs" },
];
