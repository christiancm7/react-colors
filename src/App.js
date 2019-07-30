import React, { Component } from 'react'
import Palette from './Pallette'
import seedColors from './seedColors'
import generatePalette from './colorHelpers'

export default class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Palette {...seedColors[2]}/>
      </div>
    )
  }
}
