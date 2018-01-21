import React from 'react';

class CurrentWeather extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: "Rain",
      description: "light rain",
      icon: "10n",
      temp: 286.164
    }
  }

  fetchWeather = (lat, lon) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=544acc97ad41e1c817efb0487429e01b&units=metric";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          main: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          temp: data.main.temp
        })
      });
  }

  componentDidMount() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition ((position) => {

        const lat = Math.floor (position.coords.latitude * 100) / 100;
        const lon = Math.floor (position.coords.longitude * 100) / 100;

        this.fetchWeather(lat, lon);


      })

    }

  }


  render() {
    return(
      <div>
        <div>Temp: {this.state.temp}</div>
        <div>Main: {this.state.main}</div>
        <div>description: {this.state.description}</div>
        <div><img src={`http://openweathermap.org/img/w/${this.state.icon}.png`}/></div>
      </div>


    );
  }
}
export default CurrentWeather;