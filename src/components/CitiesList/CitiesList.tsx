'use client';

import { useEffect, useRef } from 'react';

export interface CitiesListProps {
    cities?: string[];
}

export const CitiesList = ({ cities }: CitiesListProps) => {
    const citiesEndRef = useRef<null | HTMLDivElement>(null);
    // console.log(cities, 'citiesEndRef');
    useEffect(() => {
        citiesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [cities]);

    return (
        <>
            <div className='flex flex-col w-full h-[300px] p-4 items-start gap-y-3 overflow-y-hidden '>
                {cities?.map((city, index, arr) =>
                    index === arr.length - 1 ? (
                        <div
                            key={city}
                            ref={citiesEndRef}
                            className='odd:text-white even:bg-gray-200 odd:bg-accent-color 
                 even:text-gray-700 px-3 py-2 rounded-xl odd:mr-auto even:ml-auto even:rounded-bl-none odd:rounded-br-none'>
                            {city}
                        </div>
                    ) : (
                        <div
                            key={city}
                            className='odd:text-white even:bg-gray-200 odd:bg-accent-color 
                 even:text-gray-700 px-3 py-2 rounded-xl odd:mr-auto even:ml-auto even:rounded-bl-none odd:rounded-br-none'>
                            {city}
                        </div>
                    )
                )}
            </div>
            <p className='flex self-center text-sm text-gray-400'>{`Всего перечислено городов: ${
                cities && cities.length
            }`}</p>
        </>
    );
};
