export const isString = <T>(value: T): boolean => typeof value === 'string';
export const isObject = <T>(value: T): boolean => typeof value === 'object';
export const isArray = <T>(value: T[]): boolean => Array.isArray(value);
export const isNumber = <T>(value: T): boolean => typeof value === 'number';
