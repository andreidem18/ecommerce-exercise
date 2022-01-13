import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from 'redux/actions';

import 'styles/notification.css';

const Notification = () => {

    const dispatch = useDispatch();
    const message = useSelector(state => state.app.notification);

    useEffect(() => {
        if(message !== ""){
            setTimeout(() => {
                dispatch(setNotification(""))
            }, 4000);
        }
    }, [ dispatch, message ]);

    return (
        <div className={`notification ${message ? 'show' : ''}`}>
            <div className="content">
                <i className="material-icons-sharp"> info </i>
                <span className='message'>{message}</span>
            </div>
        </div>
    );
};

export default Notification;