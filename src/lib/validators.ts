import type { Validator } from "./types";

export const required: Validator = (value) => {
	return value === "" ? "Please fill in the required fields." : null;
};

export const emailAddress: Validator = (value) => {
	const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return !emailRegExp.test(value)
		? "Please enter a valid email address."
		: null;
};

export const mobileNumber: Validator = (value) => {
	value = value.replace(/\s+/g, "");
	const mobileRegExp = /^(?:\+614|04)\d{8}$/;
	return !mobileRegExp.test(value)
		? "Please enter a valid mobile number."
		: null;
};
