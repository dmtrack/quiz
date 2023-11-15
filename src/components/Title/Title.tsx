import { Timer } from '../Timer/Timer';

export interface HeaderProps {
    isGame: boolean;
    title?: string;
    playerTurn?: boolean;
    setTimerEnd?: React.Dispatch<React.SetStateAction<boolean>>;
    newTimer?: boolean;
}

export const Title = ({
    title,
    isGame,
    playerTurn,
    setTimerEnd,
    newTimer,
}: HeaderProps) => {
    let gameTitle = playerTurn
        ? 'Сейчас ваша очередь'
        : 'Сейчас очередь соперника';

    console.log('render title');

    return !isGame ? (
        <section className=' w-full py-[17px] px-4 font-sans text-center  text-black'>
            {title}
        </section>
    ) : (
        <section className='w-full flex-col '>
            <div className='flex py-[17px] px-4 justify-between items-center'>
                {' '}
                <section className=' text-black'>{gameTitle}</section>
                {setTimerEnd && (
                    <Timer setTimerEnd={setTimerEnd} newTimer={newTimer} />
                )}
            </div>
            {playerTurn && (
                <div className='h-[5px] w-full relative animate-wiggle bg-accent-color'></div>
            )}
        </section>
    );
};
