import React from 'react';

export default function Footer() {
    return (
        <div >
            <footer>
              BAKARE ABIMBOLA ©  <span>{(new Date).getFullYear()}</span>
            </footer>
        </div>
    )
}