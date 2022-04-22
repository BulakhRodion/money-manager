import React from 'react';
import {ToastContainer, ToastMessage} from "./Toast.styles";

function Toast({toastList}) {
    return (
        <div>
            {
                toastList.map(toast => {
                    return (
                        <ToastContainer style={{backgroundColor: toast.backgroundColor}}>
                            <ToastMessage key={toast.id} >
                                {toast.title} : {toast.message}
                            </ToastMessage>
                        </ToastContainer>
                    )
                })
            }
        </div>
    );
}

export default Toast;