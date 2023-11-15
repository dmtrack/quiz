import { useAppSelector } from '@/store/useRedux';
import { Timer } from '../Timer/Timer';

export interface HeaderProps {
    title?: string;
}

export const Title = ({ title }: HeaderProps) => {
    const { gameIsStarted } = useAppSelector((state) => state.cities);

    return !gameIsStarted ? (
        <section className=' w-full py-[17px] px-4 font-sans text-center  text-black'>
            {title}
        </section>
    ) : (
        <section className='w-full text-black flex-col '> {title}</section>
    );
};
