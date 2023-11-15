import { useAppSelector } from '@/store/useRedux';
import { useRouter } from 'next/router';

export interface HeaderProps {
    title?: string;
}

export const Title = ({ title }: HeaderProps) => {
    const router = useRouter();
    const gameIsStarted = router.pathname.includes('game');
    return !gameIsStarted ? (
        <section className=' w-full py-[17px] px-4 font-sans text-center  text-black'>
            {title}
        </section>
    ) : (
        <section className='w-full text-black '> {title}</section>
    );
};
