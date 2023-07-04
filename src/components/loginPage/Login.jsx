import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
  render() {
    return (
    <div className='loginFormCont'>
        <div className='loginForm'>
          {this.props.children}
        </div>
    </div>
    )
  }
}
