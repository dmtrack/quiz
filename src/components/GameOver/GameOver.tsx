import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/store/useRedux';
import { Button } from '@/components/Button/Button';
import { citySlice } from '@/store/slices/citySlice';

interface GameOverProps {
    count: number;
    lastCity: string;
}

const GameOver = ({ count, lastCity }: GameOverProps) => {
    const { result, gameIsStarted } = useAppSelector((state) => state.cities);
    const dispatch = useAppDispatch();

    const router = useRouter();
    const onclick = () => {
        dispatch(citySlice.actions.restart());
        router.push('/');
    };

    return (
        <section className='flex flex-col w-[576px] p-10 gap-y-9 items-center  text-center text-xl justify-between  bg-white rounded-2xl '>
            <article>
                {result === 'playerwin' && gameIsStarted ? (
                    <h1>Поздравляем тебя с победой!</h1>
                ) : result === 'playerlose' && gameIsStarted ? (
                    <p>Твой противник победил!</p>
                ) : (
                    <p>Игра не стартовала</p>
                )}
            </article>
            <p
                className={
                    result === 'playerlose'
                        ? 'text-red-600 text-3xl'
                        : result === 'playerwin'
                        ? 'text-green-600 text-3xl'
                        : 'text-accent-color text-3xl'
                }>
                00:00
            </p>
            {(result === 'playerlose' || result === 'playerwin') && (
                <>
                    <article>
                        <p>{`Всего было перечислено городов: ${count}`}</p>
                        <p>Очень не плохой результат!</p>
                    </article>
                    <article>
                        <p>Последний город названный победителем</p>
                        <p className='text-2xl pt-4'>{lastCity}</p>
                    </article>
                </>
            )}

            <Button title={'Начать новую игру'} action={onclick} />
        </section>
    );
};

export default GameOver;
