import { validateCityName, findCity, getLastChar } from '@/utils/helpers';
import { useAppDispatch, useAppSelector } from '@/store/useRedux';
import { citySlice } from '@/store/slices/citySlice';

export const useCities = (value: string) => {
    const dispatch = useAppDispatch();
    const { usedCities, cities } = useAppSelector((state) => state.cities);
    const lastChar = getLastChar(usedCities);
    const checkedValue = value && validateCityName(value);

    const computerTurn = async (value: string, cities: string[]) => {
        const getCity = await findCity(value, cities);
        if (getCity) {
            dispatch(citySlice.actions.nextTurn());
            dispatch(citySlice.actions.addItem(getCity));
            dispatch(citySlice.actions.resetTimer());
        }
        return getCity;
    };
    const hasCity = cities.some((city) => city === checkedValue);

    return {
        cities,
        usedCities,
        lastChar,
        hasCity,
        checkedValue,
        computerTurn,
    };
};
