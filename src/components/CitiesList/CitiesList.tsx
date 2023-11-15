'use client';

import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface CitiesListProps {
    cities?: string[];
}

export const CitiesList = ({ cities }: CitiesListProps) => {
    const citiesEndRef = useRef<null | HTMLLIElement>(null);
    console.log(cities, 'citiesEndRef');
    useEffect(() => {
        citiesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [cities]);

    return (
        <>
            <ul className='p-4 flex flex-col items-start gap-y-2 overflow-y-hidden h-full'>
                {cities?.map((city, index, arr) =>
                    index === arr.length - 1 ? (
                        <li
                            key={city}
                            ref={citiesEndRef}
                            className='odd:text-white even:bg-gray-200 odd:bg-accent-color 
                 even:text-gray-700 px-3 py-2 rounded-xl even:mr-auto odd:ml-auto even:rounded-bl-none odd:rounded-br-none'>
                            {city}
                        </li>
                    ) : (
                        <li
                            key={city}
                            className='odd:text-white even:bg-gray-200 odd:bg-accent-color 
                 even:text-gray-700 px-3 py-2 rounded-xl even:mr-auto odd:ml-auto even:rounded-bl-none odd:rounded-br-none'>
                            {city}
                        </li>
                    )
                )}
            </ul>
            <p className='text-sm text-gray-400 text-center'>{`Всего перечислено городов: ${
                cities && cities.length
            }`}</p>
        </>
    );
};
