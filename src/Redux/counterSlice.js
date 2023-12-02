import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const CountSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add: (state) => {state.value += 1},
        dec: (state) => {state.value -= 1}
    }
})


export const { add, dec } = CountSlice.actions

export default CountSlice.reducer