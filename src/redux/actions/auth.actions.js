import axios from "axios";
import { setLoading, setNotification } from ".";


export const loginThunk = data => {
    return dispatch => {
        dispatch(setLoading(true));
        return axios.post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
            // .then(res => localStorage.setItem(res.data.access))
            .then(res => {
                console.log(res.data.access);
                localStorage.setItem('token', res.data.access);
            })
            .catch(error => error)
            .finally(() => dispatch(setLoading(false)));
    }
}


export const signUpThunk = data => {
    return dispatch => {
        dispatch(setLoading(true));
        return axios.post('https://ecommerce-exercise-backend.herokuapp.com/users/', data)
            .then(() => dispatch(setNotification("User created successfully")))
            .catch(error => error)
            .finally(() => dispatch(setLoading(false)))
    }
}
