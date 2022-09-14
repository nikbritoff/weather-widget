const KELVIN_CONSTANT = 273.15;

export const convertKtoC = (tempInF: number) => Math.round(tempInF - KELVIN_CONSTANT);
