// types then interfaces
// alphabetical order

export type AccommodationType =
  | "Powered Site"
  | "Bunk Room"
  | "Lakeside Cabin"
  | "Family Room";

export type ArrivalTime =
  | "Friday Evening"
  | "Saturday Morning"
  | "Saturday Afternoon";

export type DepartureTime =
  | "Saturday Afternoon"
  | "Sunday Morning"
  | "Sunday Afternoon";

export type PayingFor = "myself" | "family";

export type Validator = (value: string) => string | null;

export type SharingWith = "nobody" | "friends" | "anyone";

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
  formState?: FormState;
  onback?: () => void;
  onnext?: () => void;
  onsubmit?: () => void;
}

export interface CardProps extends BaseCardProps {
  formValues: FormValues;
  formState?: FormState;
  accommodationCosts?: AccommodationCosts;
  calculateCosts?: () => void;
}

export interface FormControl {
  field: HTMLInputElement | HTMLSelectElement | null;
  type: "input" | "select";
  validators: Validator[];
  valid?: boolean;
}

export interface FormState {
  stepIndex: number;
  isLoading: boolean;
}

export interface FormValues {
  givenName: string;
  familyName: string;
  emailAddress: string;
  mobileNumber: string;
  payingFor: PayingFor | "";
  sharingWith: SharingWith | "";
  familyMembers: FamilyMember[];
  arrivalTime: ArrivalTime;
  departureTime: DepartureTime;
  additionalAdults: number | null;
  additionalChildren: number | null;
  preferredAccommodationType: AccommodationType | "";
  costs: {
    accommodationTotal: number;
    accommodationSplit: number;
    sharedTotal: number;
    grandTotal: number;
  };
  dietaryRequirements: string;
  notes: string;
}

export interface Option<T> {
  value: T;
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

interface FamilyMember {
  name: string;
  ageGroup: "adult" | "child";
}
