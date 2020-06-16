import React from "react";

var CssOption = props => (
    <li className="color-option" onClick={() => props.selectColor(props.color)}>
        <span
            className="color-option-preview"
            style={{ backgroundColor: props.color }}
        />
        {props.color}
    </li>
);

export default CssOption;
