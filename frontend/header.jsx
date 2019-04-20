import React from 'react';

export const Header = ({callback, tabs}) => {
    return (
        <ul id="header">
            {tabs.map((tab, idx) => {
                return <h1 onClick={function () { return callback(idx) }}>{tab.title}</h1>
            })}
        </ul> 
    );
};


