import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'

import configureStore from './store'

import {Header} from './components/common'

const store = configureStore({})

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View>
          <Header title='TechStack' />
        </View>
      </Provider>
    )
  }
}

export default App
