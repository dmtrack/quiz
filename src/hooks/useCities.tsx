import { checkCityName, getLastChar } from '@/utils/helpers';
import { useAppSelector } from '@/store/useRedux';

export const useCities = (value: string) => {
    const { usedCities, cities } = useAppSelector((state) => state.cities);
    const lastChar = useCities.length && getLastChar(usedCities);
    const checkedValue = value && checkCityName(value);
    const hasCity = cities.some((city) => city === checkedValue);

    return { cities, usedCities, lastChar, hasCity, checkedValue };
};
