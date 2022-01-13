export const appActions = {
    setLoading: "SET_LOADING",
    setNotification: "SET_NOTIFICATION"
}


                       // loading será un boolean
export const setLoading = loading => ({ 
    type: appActions.setLoading,
    payload: loading
})


export const setNotification = message => ({
    type: appActions.setNotification,
    payload: message
})
