import React, { Component } from 'react'
import Palette from './Pallette'
import seedColors from './seedColors'

export default class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[2]}/>
      </div>
    )
  }
}
