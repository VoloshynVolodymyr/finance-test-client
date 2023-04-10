import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './chartSlice';

export default configureStore ({
    reducer: {
        charts: chartReducer,
    }
});