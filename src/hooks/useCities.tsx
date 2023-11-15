import { getLastChar } from '@/utils/helpers';
import { useEffect, useState } from 'react';

export const useCities = (value: string) => {
    const [cities, setCity] = useState<string[]>([]);

    const lastChar = getLastChar(cities);

    return { cities, setCity, lastChar };
};
