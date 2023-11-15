export interface LayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
    return (
        <section className='flex items-center justify-center min-h-screen w-full font-sans bg-cool-gray text-font-gray '>
            {children}
        </section>
    );
};

export default RootLayout;
