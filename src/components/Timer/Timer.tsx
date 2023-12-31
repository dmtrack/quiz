'use client';

import { citySlice } from '@/store/slices/citySlice';
import { useAppDispatch, useAppSelector } from '@/store/useRedux';
import Countdown from 'react-countdown';

export const Timer = () => {
    const dispatch = useAppDispatch();
    const { timer, playerTurn, result, firstTry } = useAppSelector(
        (state) => state.cities
    );

    const setGameOver = () => {
        if (playerTurn && !firstTry) {
            dispatch(citySlice.actions.setResult('playerlose'));
            dispatch(citySlice.actions.gameIsOver());
        } else if (!playerTurn && !firstTry) {
            dispatch(citySlice.actions.setResult('playerwin'));
            dispatch(citySlice.actions.gameIsOver());
        } else {
            dispatch(citySlice.actions.gameIsOver());
        }
    };

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
                onComplete={setGameOver}
            />
        </div>
    );
};
