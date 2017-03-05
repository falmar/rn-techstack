import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'

import createStore from './store'

import {Header} from './components/common'

class App extends Component {
  render () {
    return (
      <Provider store={createStore()}>
        <View>
          <Header title='TechStack' />
        </View>
      </Provider>
    )
  }
}

export default App
