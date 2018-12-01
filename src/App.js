import React, { Component } from 'react'
import { Default } from './pages/default'
import { Component } from './components/component'
class App extends Component {
  render() {
    return (
      <Default>
        <Component />
      </Default>
    )
  }
}

export default App
