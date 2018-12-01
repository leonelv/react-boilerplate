import React, { Component } from 'react'
import { Default } from './pages/default'
import { DefaultComponent } from './components/component'
class App extends Component {
  render() {
    return <Default>
        <DefaultComponent />
      </Default>
  }
}

export default App
