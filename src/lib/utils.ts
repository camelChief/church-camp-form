export function toCamelCase(str: string): string {
	return str
		.trim()
		.toLowerCase()
		.replace(/([-_ ][a-z])/g, (group) => group.toUpperCase().slice(1));
}
