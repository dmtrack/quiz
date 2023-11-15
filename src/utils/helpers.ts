import { cities as moke } from '@/utils/cities';

export const getLastChar = (values: string[]) => {
    let lastChar = values.length > 0 && values[values.length - 1].slice(-1);

    if (lastChar === 'ь' || lastChar === 'ъ' || lastChar === 'ы') {
        lastChar = values[values.length - 1].slice(-1);
    }
    return lastChar;
};

export default async function findCity(value: string) {
    //пауза на подумать
    await new Promise((resolve) => setTimeout(resolve, 5000));
    //Находим индекс города
    let indexOfCity = moke.indexOf(value);
    //Удаляем из массива
    moke.splice(indexOfCity, 1);

    //Последняя буква города
    let lastChar = value[value.length - 1];
    if (['ь', 'ъ', 'ы'].includes(lastChar)) {
        lastChar = value[value.length - 2];
    }

    //Ищем город для ответа
    const foundCity = moke.find((city) =>
        city.startsWith(lastChar.toUpperCase())
    );

    if (!foundCity) return null;
    //Находим индекс города
    indexOfCity = moke.indexOf(foundCity);
    //Удаляем из массива
    moke.splice(indexOfCity, 1);

    return foundCity;
}
