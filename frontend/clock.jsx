import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    tick() {
        this.setState({date: new Date()});
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h1>Clock</h1>
                    <p>
                        <span>Time: </span>
                        <span>{this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()} {this.state.date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]}  </span>
                    </p>
                    <p>
                        <span>Date: </span>
                        <span>{this.state.date.toString().split(' ').slice(0, 4).join(' ')}</span>
                    </p>
            </>
        );
    }
}

export default Clock;