import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICitySlice {
    cities: string[];
    usedCities: string[];
    playerTurn: boolean;
    gameIsOver: boolean;
    gameIsStarted: boolean;
    firstTry: boolean;
    timer: number;
    result: 'draw' | 'playerwin' | 'playerlose';
}

const initialState: ICitySlice = {
    cities: [],
    usedCities: [],
    playerTurn: true,
    gameIsOver: false,
    gameIsStarted: false,
    firstTry: true,
    timer: Date.now() + 60 * 2 * 1000,
    result: 'draw',
};

export const citySlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        fetchAllCities: (state, { payload }: PayloadAction<string[]>) => {
            state.cities = payload;
        },

        addItem: (state, { payload }) => {
            state.usedCities = [...state.usedCities, payload];
            state.cities = state.cities.filter((city) => city !== payload);
        },
        nextTurn: (state) => {
            state.playerTurn = !state.playerTurn;
        },
        setGameStarted: (state) => {
            state.gameIsOver = false;
            state.gameIsStarted = true;
            state.timer = Date.now() + 60 * 2 * 1000;
            state.playerTurn = true;
            state.firstTry = true;
        },
        restart: (state) => {
            state.usedCities = [];
            state.result = 'draw';
        },
        setResult: (state, { payload }) => {
            state.result = payload;
        },
        gameIsOver: (state) => {
            state.gameIsOver = true;
            state.timer = Date.now() + 60 * 2 * 1000;
        },
        resetTimer: (state) => {
            state.timer = Date.now() + 60 * 2 * 1000;
        },

        setFirstTry: (state, { payload }) => {
            state.firstTry = payload;
        },
    },
});

export const { addItem, fetchAllCities, nextTurn, gameIsOver } =
    citySlice.actions;

export default citySlice.reducer;
