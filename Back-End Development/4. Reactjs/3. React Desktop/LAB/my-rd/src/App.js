import React from 'react'
import { Text } from 'react-desktop/windows';

export default function App() {
    return ( <
        div style = {
            {
                display: 'block',
                width: 700,
                paddingLeft: 30
            }
        } >
        <
        h4 > React Desktop Windows Text Component < /h4> <
        Text background = "lightblue"
        width = "40%"
        padding = "10px" >
        Hello, This is a sample text to demonstrate the Text Component of React Desktop Library in ReactJS.How are you ?
        <
        /Text> <
        /div>
    );
}