'use client';

import { CitiesList } from '@/components/CitiesList/CitiesList';
import { InputPanel } from '@/components/InputPanel/InputPanel';
import { Title } from '@/components/Title/Title';
import { useCities } from '@/hooks/useCities';
import { useRouter } from 'next/router';
import { useState } from 'react';

const GamePage = () => {
    const router = useRouter();
    const isGame = router.route.includes('game');

    const [playerTurn, setPlayerTurn] = useState<boolean>(true);
    const [newTimer, setNewTimer] = useState<boolean>(false);
    const [timerEnd, setTimerEnd] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const { cities } = useCities(value);

    // console.log(timerEnd, 'timerEnd');
    // console.log('render gamePage');

    return (
        <section
            className='flex flex-col items-center
      grow shrink-0 max-w-xl min-h-[464px] max-h-[600px]  bg-white rounded-2xl
      shadow'>
            <article className='flex w-full justify-between items-center self-stretch'>
                <Title
                    isGame={isGame}
                    playerTurn={playerTurn}
                    setTimerEnd={setTimerEnd}
                    newTimer={newTimer}
                />
            </article>

            <article className='flex grow w-full'>
                {!cities.length ? (
                    <div className='flex items-center justify-center w-full px-6 text-sm leading-[21px] text-gray-400'>
                        Первый участник вспоминает города...
                    </div>
                ) : (
                    <CitiesList cities={cities} />
                )}
            </article>

            <article className='w-full'>
                <InputPanel
                    value={value}
                    setValue={setValue}
                    playerTurn={playerTurn}
                    setPlayerTurn={setPlayerTurn}
                    setNewTimer={setNewTimer}
                />
            </article>
        </section>
    );
};

export default GamePage;
