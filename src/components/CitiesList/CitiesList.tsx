import { useEffect, useRef } from 'react';

export interface CitiesListProps {
    cities?: string[];
}

export const CitiesList = ({ cities }: CitiesListProps) => {
    const citiesEndRef = useRef<HTMLDivElement>(null);
    console.log(cities, 'citiesEndRef');
    useEffect(() => {
        citiesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [cities]);

    return (
        <>
            <div className='flex flex-col  items-start p-4 gap-y-2 overflow-y-hidden h-full'>
                {cities?.map((city) => (
                    <>
                        <div
                            key={new Date().getTime()}
                            className='odd:text-white even:bg-violet-50 odd:bg-violet-500 
even:text-gray-700 px-3 py-2 rounded-xl even:mr-auto odd:ml-auto even:rounded-bl-none odd:rounded-br-none'>
                            {city}
                        </div>
                        <div ref={citiesEndRef}></div>
                    </>
                ))}
            </div>
            <p className='text-sm text-gray-400 text-center'>{`Всего перечислено городов: ${
                cities && cities.length
            }`}</p>
        </>
    );
};
