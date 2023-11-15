'use client';

import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

export interface CounterProps {
    setTimerEnd: React.Dispatch<React.SetStateAction<boolean>>;
    newTimer?: boolean;
}

export const Timer = ({ setTimerEnd, newTimer }: CounterProps) => {
    const [timer, setTimer] = useState<number>(Date.now() + 60 * 2 * 1000);

    useEffect(() => {
        if (newTimer) {
            setTimer(Date.now() + 60 * 2 * 1000);
        }
    }, [newTimer]);

    const setTimerOver = () => {
        setTimerEnd(true);
        setTimer(Date.now() + 60 * 2 * 1000);
    };
    console.log('render timer');

    const renderFunc = ({
        minutes,
        seconds,
    }: {
        minutes: number;
        seconds: number;
    }) => {
        return (
            <div className='text-xl'>{`${minutes}:${
                seconds < 10 ? '0' + seconds : seconds
            }`}</div>
        );
    };

    return (
        <div>
            <Countdown
                date={timer}
                renderer={renderFunc}
                onComplete={setTimerOver}
            />
        </div>
    );
};
