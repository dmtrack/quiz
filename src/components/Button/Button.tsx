export interface ButtonProps {
    title: string;
    action: () => void;
}

export const Button = ({ title, action }: ButtonProps) => {
    return (
        <button
            onClick={action}
            className=' w-[126px] h-[40px] text-white text-base  font-medium font-sans
         rounded bg-accent-color'>
            {title}
        </button>
    );
};
