import React, {Component, PropTypes} from 'react'
import {ListView} from 'react-native'
import {connect} from 'react-redux'

import ListItem from './ListItem'

class LibraryList extends Component {
  componentWillMount () {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = dataSource.cloneWithRows(this.props.data)
  }

  renderRow (data) {
    return <ListItem library={data} />
  }

  render () {
    return (
      <ListView
        dataSource={this.dataSource}
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
