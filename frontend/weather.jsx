import React from "react";

class Weather extends React.Component{

    constructor(props) {
        super(props)
        this.state = {location: [], temp: NaN, city: ""};
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.setState({ location: [pos.coords.latitude, pos.coords.longitude] },
                this.queryLoc.bind(this));
        })
       
    }

    queryLoc() {
        const {location} = this.state;
        console.log(location);
        const xmlhr = new XMLHttpRequest();
        xmlhr.open("get", `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&APPID=e0c397c5fec89899d00c1dbb7699a1db`);
        xmlhr.send();
        let that = this; 
        xmlhr.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                let data = JSON.parse(this.responseText);
                that.setState({temp: data.main.temp, city: data.name});
            }
        }
    }

    render() {
        return (
            <>
                <h1>Weather</h1>
                <p>{this.state.city}</p>
                <p>{Math.round((this.state.temp - 273.15) * 9 / 5 + 32)} degrees</p>
            </>
        )
    }
}

export default Weather;