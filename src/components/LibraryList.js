import React, {Component, PropTypes} from 'react'
import {ListView} from 'react-native'
import {connect} from 'react-redux'

import ListItem from './ListItem'

class LibraryList extends Component {
  constructor (props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: dataSource.cloneWithRows(props.data)
    }
  }

  componentWillMount () {

  }

  renderRow (library) {
    return (
      <ListItem library={library} />
    )
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

LibraryList.propTypes = {
  data: PropTypes.array.isRequired
}

const mapStateToProps = ({libraries}) => ({
  data: libraries.data
})

export default connect(mapStateToProps)(LibraryList)
