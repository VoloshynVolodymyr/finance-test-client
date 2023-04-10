import { createSlice } from '@reduxjs/toolkit';

const chartSlice = createSlice ({
    name: 'charts',
    initialState: {
        charts: [],
    },
    reducers: {
        addData(state, action) {
            if (state.charts.length===10) state.charts.shift();
            state.charts.push(action.payload);
         },
    }
})

export const { addData } = chartSlice.actions;

export default chartSlice.reducer;