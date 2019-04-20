import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const Root = (props) => {
    return (
        <>
            <div className="clock"><Clock /></div>
            <div className="tabs"><Tabs tabs={[{ title: "one", content: "I am the first" }, { title: "two", content: "I am the second"}]} /></div>
            <div className="weather"><Weather /></div>
        </>
    );
}

export default Root;