import { cities } from '@/utils/cities';

const moke = [...cities];

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getLastChar = (values: string[]) => {
    let lastChar = values.length > 0 && values[values.length - 1].slice(-1);

    if (lastChar === 'ь' || lastChar === 'ъ' || lastChar === 'ы') {
        lastChar = values[values.length - 1].slice(-1);
    }
    return lastChar;
};

export const findCity = async (value: string) => {
    await delay(5000);
    let indexOfCity = moke.indexOf(value);
    moke.splice(indexOfCity, 1);

    let lastChar = value[value.length - 1];
    if (lastChar === 'ь' || lastChar === 'ъ' || lastChar === 'ы') {
        lastChar = value[value.length - 2];
    }
    const foundCity = moke.find((city) =>
        city.startsWith(lastChar.toUpperCase())
    );

    if (!foundCity) return null;
    indexOfCity = moke.indexOf(foundCity);
    moke.splice(indexOfCity, 1);
    return foundCity;
};

export const checkCityName = (value: string) => {
    let trimed = value.trim();

    if (!trimed.includes('-')) {
        return (trimed = trimed
            .split('-')
            .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
            .join('-'));
    } else if (trimed.includes('-')) {
        return (trimed = trimed
            .split('-')
            .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
            .join('-'));
    }

    return trimed;
};
