'use client';

import { FormEvent, useState } from 'react';
import { SendIcon } from '@/assets/icons/SendIcon';
import { useCities } from '@/hooks/useCities';
import { useAppDispatch, useAppSelector } from '@/store/useRedux';
import { citySlice } from '@/store/slices/citySlice';
import { findCity } from '@/utils/helpers';

export const InputPanel = () => {
    const [error, setError] = useState<string>('');
    const [value, setValue] = useState<string>('');
    const { lastChar, cities, hasCity, checkedValue } = useCities(value);
    const { playerTurn, firstTry } = useAppSelector((state) => state.cities);
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(checkedValue, 'checkedValue');

        if (!hasCity) {
            setError('Введите другое название');
            setValue('');
            return;
        }

        if (!firstTry) {
            let firstChar = checkedValue[0].toLowerCase();
            const lastCity = cities[cities.length - 1];
            let lastCityChar = lastCity[lastCity.length - 1];
            if (['ь', 'ъ', 'ы'].includes(lastCityChar)) {
                lastCityChar = lastCity[lastCity.length - 2];
            }
            if (lastCityChar === firstChar) {
                dispatch(citySlice.actions.addItem(checkedValue));
                setValue('');
            } else {
                setError(`Город должен начинаться на букву "${lastCityChar}"`);
                setValue('');
                return;
            }
        } else {
            dispatch(citySlice.actions.addItem(checkedValue));
        }

        dispatch(citySlice.actions.resetTimer());
        setError('');
        setValue('');

        const newCity = await findCity(checkedValue);
        if (!newCity) return;
        dispatch(citySlice.actions.addItem(checkedValue));
        dispatch(citySlice.actions.resetTimer());
        dispatch(citySlice.actions.nextTurn());
        dispatch(citySlice.actions.setFirstTry(false));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='px-3 py-2 m-4 rounded  bg-gray-100'>
            {error && <p className='text-accent-color text-sm '>{error}</p>}
            <div className='flex items-center justify-between'>
                <input
                    type='text'
                    placeholder={
                        playerTurn
                            ? firstTry
                                ? 'Напишите любой город, например: Где вы живете?'
                                : `Знаете город на букву "${
                                      lastChar && lastChar.toUpperCase()
                                  }" ?`
                            : 'Ожидаем ответ соперника...'
                    }
                    className='w-full placeholder:text-gray-700   outline-none disabled:placeholder-shown:none pr-4 bg-gray-100'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    disabled={!playerTurn}
                />
                <button
                    className='p-[6px] text-white  rounded disabled:bg-gray-400 hover:opacity-80 transition-all bg-accent-color'
                    type='submit'
                    disabled={!playerTurn || !value}>
                    <SendIcon />
                </button>
            </div>
        </form>
    );
};
