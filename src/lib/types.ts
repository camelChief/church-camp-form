// types then interfaces
// alphabetical order

export type AccommodationType =
    'Powered Site' |
    'Bunk Room' |
    'Lakeside Cabin' |
    'Family Room';

export type ArrivalTime =
    'Friday Evening' |
    'Saturday Morning' |
    'Saturday Afternoon';

export type DepartureTime =
    'Saturday Afternoon' |
    'Sunday Morning' |
    'Sunday Afternoon';

export interface AccommodationCosts {
    nights: number;
    additionalAdults: number;
    additionalChildren: number;
    total: CostBreakdown;
    split: CostBreakdown;
}

export interface BaseCardProps {
    active: boolean;
    visited: boolean;
    onback?: () => void;
    onnext?: () => void;
    onsubmit?: () => void;
}

export interface CardProps extends BaseCardProps {
    formState: FormState;
    accommodationCosts?: AccommodationCosts;
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
    arrivalTime: ArrivalTime;
    departureTime: DepartureTime;
    additionalAdults: number | null;
    additionalChildren: number | null;
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

interface CostBreakdown {
    nightly: {
        room: number;
        additionalAdults: number;
        additionalChildren: number;
        total: number; // total per night
    };
    total: number; // total for stay
}