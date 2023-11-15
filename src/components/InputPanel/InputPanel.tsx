import { FormEvent, useState } from 'react';
import { SendIcon } from '@/assets/icons/SendIcon';
import { useCities } from '@/hooks/useCities';
import { cities as moke } from '@/utils/cities';
import findCity from '@/utils/helpers';

export interface InputPanelProps {
    playerTurn: boolean;
    setPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>;
    setNewTimer: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const InputPanel = ({
    playerTurn,
    setPlayerTurn,
    setNewTimer,
    value,
    setValue,
}: InputPanelProps) => {
    const [error, setError] = useState<string>('');
    const [firstInput, setFirstInput] = useState<boolean>(true);

    const { lastChar, cities, setCity } = useCities(value);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const reducedValue = reduceValue(value);

        const hasCity = moke.some((city) => city === value);
        if (!hasCity) {
            setError('Введите другое название');
            setValue('');
            return;
        }

        if (!firstInput) {
            let firstChar = value[0].toLowerCase();
            const lastCity = cities[cities.length - 1];
            let lastCityChar = lastCity[lastCity.length - 1];
            if (['ь', 'ъ', 'ы'].includes(lastCityChar)) {
                lastCityChar = lastCity[lastCity.length - 2];
            }
            if (lastCityChar === firstChar) {
                setCity((prev) => [...prev, value]);
                setValue('');
            } else {
                setError(`Город должен начинаться на букву "${lastCityChar}"`);
                setValue('');
                return;
            }
        } else {
            setCity((prev) => [...prev, value]);
        }
        setPlayerTurn((prev) => !prev);
        setNewTimer(true);
        setError('');
        setValue('');
        const newCity = await findCity(value);
        if (!newCity) return;
        setCity((prev) => [...prev, newCity]);
        setPlayerTurn((prev) => !prev);
        setNewTimer(true);
        setFirstInput(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className=' py-2 px-3 rounded m-4 bg-gray-100'>
            {error && <p className='text-sm text-accent-color'>{error}</p>}
            <div className='flex items-center justify-between'>
                <input
                    type='text'
                    placeholder={
                        playerTurn
                            ? firstInput
                                ? 'Напишите любой город, например: Где вы живете?'
                                : `Знаете город на букву "${
                                      lastChar && lastChar.toUpperCase()
                                  }" ?`
                            : 'Ожидаем ответ соперника...'
                    }
                    className='placeholder:text-gray-700 bg-gray-100 w-full outline-none disabled:placeholder-shown:none pr-4'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    disabled={!playerTurn}
                />
                <button
                    type='submit'
                    className='p-[6px] text-white  rounded disabled:bg-gray-400 hover:opacity-80 transition-all bg-accent-color'
                    disabled={!playerTurn || !value}>
                    <SendIcon />
                </button>
            </div>
        </form>
    );
};
