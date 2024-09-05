import { createStore } from 'redux';
import reducer from "./Redux";
import {Device} from "../Components/db";

const getInitialValue = (): Device[] => {
    const value = sessionStorage.getItem('Cart');
    return value ? JSON.parse(value) : [];
};

const store = createStore(
    reducer,
    getInitialValue(),
);

export default store;