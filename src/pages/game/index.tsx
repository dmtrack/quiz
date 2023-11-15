'use client';

import { CitiesList } from '@/components/CitiesList/CitiesList';
import { InputPanel } from '@/components/InputPanel/InputPanel';
import { Timer } from '@/components/Timer/Timer';
import { Title } from '@/components/Title/Title';
import { cities as moke } from '@/utils/cities';
import { useCities } from '@/hooks/useCities';
import { useAppDispatch, useAppSelector } from '@/store/useRedux';
import { useEffect } from 'react';
import { citySlice } from '@/store/slices/citySlice';
import GameOver from '@/components/GameOver/gameOver';

const GamePage = () => {
    const dispatch = useAppDispatch();

    const { playerTurn, usedCities, gameIsOver } = useAppSelector(
        (state) => state.cities
    );

    const count = usedCities.length;
    const lastCity = usedCities[count - 1];

    useEffect(() => {
        dispatch(citySlice.actions.fetchAllCities(moke));
        dispatch(citySlice.actions.setGameStarted());
    }, []);

    let gameTitle = playerTurn
        ? 'Сейчас ваша очередь'
        : 'Сейчас очередь соперника';

    return !gameIsOver ? (
        <section
            className='flex flex-col items-center
      grow shrink-0 max-w-xl min-h-[464px] max-h-[600px]  bg-white rounded-2xl
      shadow'>
            <article className='flex w-full justify-between items-center self-stretch'>
                <section className='flex flex-col w-full'>
                    <div className='flex py-[17px] px-4 justify-between items-center w-full'>
                        <Title title={gameTitle} />
                        <Timer />
                    </div>
                    {playerTurn && (
                        <div className='h-[5px] w-full relative animate-wiggle bg-accent-color'></div>
                    )}
                </section>
            </article>

            <article className='flex flex-col grow w-full'>
                {!useCities.length ? (
                    <div className='flex w-full px-6  items-center justify-center  text-sm leading-[21px] text-gray-400'>
                        Первый участник вспоминает города...
                    </div>
                ) : (
                    <CitiesList cities={usedCities} />
                )}
            </article>

            <article className='w-full'>
                <InputPanel />
            </article>
        </section>
    ) : (
        <GameOver count={count} lastCity={lastCity} />
    );
};

export default GamePage;
