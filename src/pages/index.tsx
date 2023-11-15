import { Button } from '@/components/Button/Button';
import { Title } from '@/components/Title/Title';
import { citySlice } from '@/store/slices/citySlice';
import { useAppDispatch } from '@/store/useRedux';
import { useRouter } from 'next/router';

const Home = () => {
    const dispatch = useAppDispatch();

    const router = useRouter();
    const onclick = () => {
        dispatch(citySlice.actions.setGameStarted());
        router.push('/game');
    };

    return (
        <div className='flex flex-col w-[576px] items-center rounded-2xl bg-white'>
            <Title title='Игра в города на время' />
            <div
                className='flex flex-col h-full justify-between  items-center mx-6 my-6 gap-6 
                    box-content text-sm leading-[21px]
                '>
                <div className='flex self-start'>
                    Цель: Назвать как можно больше реальных городов.
                </div>
                <div className='font-normal'>
                    <ul className='list-disc px-4 '>
                        <li>Запрещается повторение городов.</li>
                        <li>
                            Названий городов на твердый “ъ” и мягкий “ъ” знак
                            нет. Из-за этого бы пропускаем эту букву и игрок
                            должен назвать город на букву стоящую перед ъ или ь
                            знаком.
                        </li>
                        <li>
                            Каждому игроку дается 2 минуты на размышления, если
                            спустя это время игрок не вводит слово он считается
                            проигравшим
                        </li>
                    </ul>
                </div>
                <Button
                    action={onclick}
                    title='Начать игру'
                    isDisabled={false}
                />
            </div>
        </div>
    );
};

export default Home;
