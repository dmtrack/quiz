'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { SendIcon } from '@/assets/icons/SendIcon';
import { useCities } from '@/hooks/useCities';
import { useAppDispatch, useAppSelector } from '@/store/useRedux';
import { citySlice, gameIsOver } from '@/store/slices/citySlice';

export const InputPanel = () => {
    const [error, setError] = useState<string>('');
    const [value, setValue] = useState<string>('');
    const { lastChar, cities, hasCity, checkedValue, computerTurn } =
        useCities(value);
    const { playerTurn, firstTry, usedCities, gameIsOver } = useAppSelector(
        (state) => state.cities
    );
    const dispatch = useAppDispatch();

    const inputRef = useRef<null | HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current != null && playerTurn) {
            inputRef.current.focus();
        }
    }, [playerTurn]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!hasCity) {
            setError('Введите другое название');
            setValue('');
            return;
        }

        if (!firstTry) {
            let firstChar = checkedValue[0].toLowerCase();
            const lastCity = usedCities[usedCities.length - 1];
            let lastChar = lastCity.slice(-1);

            if (
                lastChar === 'ь' ||
                lastChar === 'ъ' ||
                lastChar === 'ы' ||
                lastChar === 'й'
            ) {
                lastChar = lastCity.slice(-2, -1);
            }
            if (lastChar === firstChar) {
                setValue('');
                dispatch(citySlice.actions.nextTurn());
                dispatch(citySlice.actions.resetTimer());
                dispatch(citySlice.actions.addItem(checkedValue));
            } else {
                setError(`Город должен начинаться на букву "${lastChar}"`);
                setValue('');
                return;
            }
        } else {
            setValue('');
            dispatch(citySlice.actions.nextTurn());
            dispatch(citySlice.actions.addItem(checkedValue));
            dispatch(citySlice.actions.resetTimer());
            dispatch(citySlice.actions.setFirstTry(false));
        }
        const computerCity = await computerTurn(value, cities);
        if (computerCity) {
            setError('');
            setValue('');
        }
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
                    ref={inputRef}
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
