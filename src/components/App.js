import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

// Key to openweathermap API
const APIkey = "ebaed3229a61b57e427ed497fba8baf1"


class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  }


  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }


  handleCitySubmit = (e) => {
    e.preventDefault()

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error(`${this.state.value} nie istnieje`)
      })
      .then(response => response.json())
      .then(data => {

        const time = new Date().toLocaleString()
        this.setState({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: this.state.value.toUpperCase(),
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          err: true,
        })
      }
      )
  }


  render() {

    return (
      <div className="App">
        <Form
          value={this.state.value}
          handleInputChange={this.handleInputChange}
          handleCitySubmit={this.handleCitySubmit} />
        <Result weather={this.state} />
      </div>);
  }
}

export default App;