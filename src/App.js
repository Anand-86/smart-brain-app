import React, { Component } from 'react'
import Particles from 'react-particles-js'
<<<<<<< HEAD
import Clarifai from 'clarifai'
=======
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259
import './App.css'

// Components

import Navigation from './Components/Navigation/Navigation'
<<<<<<< HEAD
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

// Clarifai API Key

const app = new Clarifai.App({
  apiKey: '39750ab17d6048479587543e13b81ade',
})
=======
import Navigation from './Components/Logo/Logo'
import Navigation from './Components/ImageLinkForm/ImageLinkForm'
import Navigation from './Components/Rank/Rank'
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
<<<<<<< HEAD
      imageURL: ''
=======
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259
    }
  }

  onInputChange = (event) => {
<<<<<<< HEAD
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        },
        function (err) {
          // there was an error
        },
      )
=======
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('Click')
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259
  }

  render() {
    return (
<<<<<<< HEAD
      <div className='App'>
        <Particles className='particles' params={particlesOptions} />
=======
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259
        <Navigation />
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Rank />
<<<<<<< HEAD
       <FaceRecognition imageURL={this.state.imageURL} />
=======
        {/* <FaceRecognition /> */}
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259
      </div>
    )
  }
}

export default App
