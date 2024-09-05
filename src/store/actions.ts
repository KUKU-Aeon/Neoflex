import * as actions from './actionsType';
import {Device} from '../Components/db'
export const addToCart = (elem: Device) => ({
    type: actions.CART_ADD,
    payload: elem
});

export const removeFromCart = (elem: Device) => ({
    type: actions.CART_REMOVE,
    payload: elem
})

export const removeFromCartAll = (elem: Device) => ({
    type: actions.CART_REMOVE_ALL,
    payload: elem
})