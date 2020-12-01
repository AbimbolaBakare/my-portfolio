import React from 'react';
import '../egg.css'

export default function Switch(props) {
    return (
        <>

            <label class="switch">
                <input type="checkbox" onClick={props.click} />
                <span class="slider round"></span>
            </label>

        </>
    )
}