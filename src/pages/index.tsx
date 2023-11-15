import { Button } from '@/components/Button/Button';
import { Title } from '@/components/Title/Title';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const isGame = router.route.includes('game');
    const onclick = () => {
        router.push('/game');
    };

    return (
        <div
            className='flex flex-col items-center shrink-0 bg-accent-color
             max-w-xl grow h-[347px] box-border bg-white rounded-2xl
              shadow gap-3'>
            <Title isGame={isGame} title='Игра в города на время' />
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
}
