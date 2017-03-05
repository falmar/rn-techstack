import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'

import configureStore from './store'

import {Header} from './components/common'
import LibraryList from './components/LibraryList'

const store = configureStore({})

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Header title='TechStack' />

          <LibraryList />
        </View>
      </Provider>
    )
  }
}

export default App
