export interface ButtonProps {
    title: string;
    action: () => void;
    isDisabled: boolean;
}

export const Button = ({ title, action, isDisabled = false }: ButtonProps) => {
    return (
        <button
            disabled={isDisabled}
            onClick={action}
            className=' px-4 py-2 text-white text-base  font-medium font-sans
         rounded bg-accent-color hover:opacity-80 transition-all'>
            {title}
        </button>
    );
};
