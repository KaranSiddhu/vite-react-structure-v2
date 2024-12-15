// common utils methods
export const isObjectEmpty = (obj: unknown): boolean => {
	return !obj || (typeof obj === 'object' && Object.keys(obj || {}).length === 0);
};

export const isArrayEmpty = (arr: unknown): boolean => {
	return !arr || (Array.isArray(arr) && arr.length === 0);
};
