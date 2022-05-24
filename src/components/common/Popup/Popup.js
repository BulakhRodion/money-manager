import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {PopupClose, PopupContainer, PopupContent, PopupOverlay, PopupTitle} from "./Popup.styles";

function Popup(props) {

    const [show, setShow] = useState(false);

    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <PopupOverlay style={{visibility: show ? "visible" : "hidden",opacity: show ? "1" : "0"}}>
            <PopupContainer>
                <PopupTitle>{props.title}</PopupTitle>
                <PopupClose onClick={closeHandler}> &times;</PopupClose>
                <PopupContent>{props.children}</PopupContent>
            </PopupContainer>
        </PopupOverlay>
    );
}

Popup.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Popup;