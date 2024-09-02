import React, { Component } from 'react'
import D from './Date.js'
import './App.css'
export default class App extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            hour : "00",
            minute : "00",
            second : "00",
            ampm : null
        }
    }
    componentDidMount(){
        this.loadInterval = setInterval(
            () => this.getTime()
            ,1000
        )
    }

    getTime(){
        const takeTwelve = n => n > 12 ? n-12 : n
        let ampm = new Date().getHours() >= 12 ? "PM" : "AM"
        const addZero = n => n < 10 ? "0"+n : n 
        this.setState({
            hour : addZero(takeTwelve(new Date().getHours())),
            minute : addZero(new Date().getMinutes()),
            second : addZero(new Date().getSeconds()),
            ampm : ampm
        })
    }

  render() {
    return (
      <div className='maindiv'>
        <h1 className='head'>Digital Clock</h1>
        <div className="outerdiv">
            <div className="clock">
                <D />
                <div className="container">
                    <h2 className='hour'>{this.state.hour}</h2>
                    <h2 className='dot'>:</h2>
                    <h2 className='minute'>{this.state.minute}</h2>
                    <h2 className='dot'>:</h2>
                    <h2 className='second'>{this.state.second}</h2>
                    <span className='ampm'>{this.state.ampm}</span>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
