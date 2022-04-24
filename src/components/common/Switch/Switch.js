import React, {useContext} from 'react';
import {HiddenInput, Slider, ThemeSwitchWrapper} from "./Switch.styles";
import {ThemeContext} from "../../../context/ThemeContext/ThemeContext";

function Switch({children}) {

    const {darkMode, dispatch} = useContext(ThemeContext);

    return (
        <ThemeSwitchWrapper >
                <HiddenInput type="checkbox" onChange={() => dispatch({type: 'TOGGLE'})} checked={darkMode}/>
                <Slider/>
            {children}
        </ThemeSwitchWrapper>
    );
}

export default Switch;