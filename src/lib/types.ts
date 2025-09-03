// types then interfaces
// alphabetical order

export type AccommodationType =
    'powered site' |
    'bunk room' |
    'lakeside cabin' |
    'family room';

export type Arrival =
    'friday evening' |
    'saturday morning' |
    'saturday afternoon';

export type Departure =
    'saturday afternoon' |
    'sunday morning' |
    'sunday afternoon';

export interface CardProps {
    formState: FormState;
    active: boolean;
    visited: boolean;
    onback?: () => void;
    onnext?: () => void;
    onsubmit?: () => void;
}

export interface FamilyMember {
    name: string;
    ageGroup: 'adult' | 'child';
}

export interface FormState {
    firstName: string;
    surname: string;
    emailAddress: string;
    mobileNumber: string;
    familyMembers: FamilyMember[];
    arrivalTime: Arrival;
    departureTime: Departure;
    partySize: number;
    preferredAccommodationType: AccommodationType | '';
    costs: {
        accommodationTotal: number;
        accommodationSplit: number;
        sharedTotal: number;
        grandTotal: number;
    };
    dietaryRequirements: string;
    notes: string;
}

export interface Option {
    value: string;
    label: string;
}