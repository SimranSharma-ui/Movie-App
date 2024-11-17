import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './AppSlices';


const AppStore = configureStore({
    reducer:{
        movie : movieReducer,
    }
})

export default AppStore;