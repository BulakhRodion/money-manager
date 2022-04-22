import React from 'react';
import {ToastContainer, ToastMessage, ToastWrapper} from "./Toast.styles";

function Toast({toastList}) {
    return (
        <ToastWrapper>
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
        </ToastWrapper>
    );
}

export default Toast;