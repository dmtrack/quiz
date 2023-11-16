export const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const randomIndex = (length: number) =>
    Math.floor(Math.random() * (length + 1));

export const getLastChar = (values: string[] | string) => {
    if (Array.isArray(values) && values.length > 0) {
        let lastChar = values[values.length - 1].slice(-1);
        if (
            lastChar === 'ь' ||
            lastChar === 'ъ' ||
            lastChar === 'ы' ||
            lastChar === 'й'
        ) {
            lastChar = values[values.length - 1].slice(-2, -1);
        }
        if (
            lastChar === 'ь' ||
            lastChar === 'ъ' ||
            lastChar === 'ы' ||
            lastChar === 'й'
        ) {
            lastChar = values[values.length - 1].slice(-3, -2);
        }

        return lastChar;
    } else if (typeof values === 'string') {
        let lastChar = values.slice(-1);
        if (
            lastChar === 'ь' ||
            lastChar === 'ъ' ||
            lastChar === 'ы' ||
            lastChar === 'й'
        ) {
            lastChar = values.slice(-2, -1);
        }
        if (
            lastChar === 'ь' ||
            lastChar === 'ъ' ||
            lastChar === 'ы' ||
            lastChar === 'й'
        ) {
            lastChar = values.slice(-3, -2);
        }

        return lastChar;
    }
};

export const findCity = async (value: string, cities: string[]) => {
    await delay(5000);
    let resultCloud;
    const lastChar = await getLastChar(value);

    if (lastChar) {
        resultCloud =
            (await cities) &&
            cities.filter((city) => {
                return city.toLowerCase().startsWith(lastChar);
            });
    }
    console.log(lastChar);
    console.log(resultCloud);
    return resultCloud && resultCloud[randomIndex(resultCloud?.length)];
};

export const validateCityName = (value: string) => {
    let trimed = value.trim();
    let validatedValue;

    if (!trimed.includes('-')) {
        return trimed;
    } else {
        let target = trimed.split('-');
        if (target[1].length > 1) {
            return (validatedValue = target
                .map(
                    (item) =>
                        item[0].toUpperCase() + item.slice(1).toLowerCase()
                )
                .join('-'));
        }
    }

    return (validatedValue = trimed);
};
