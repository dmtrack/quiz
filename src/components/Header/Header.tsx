export interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <header className=' w-full py-[17px] px-4 font-sans text-center  text-black'>
            {title}
        </header>
    );
};
