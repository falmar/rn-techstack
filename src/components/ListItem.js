import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {connect} from 'react-redux'

import * as actions from '../store/actions/libraries'

import {CardSection} from './common'

class ListItem extends Component {
  render () {
    const {library, selected, onPress} = this.props
    const {titleStyle} = styles
    const {id, title, description} = library

    return (
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={onPress(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {library.id === selected && <Text>{description}</Text>}
        </View>

      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5
  }
})

ListItem.propTypes = {
  library: PropTypes.object.isRequired,
  selected: PropTypes.number,
  onPress: PropTypes.func.isRequired
}

const mapStateToProps = ({libraries}) => ({
  selected: libraries.selected
})

const mapDispatchToProps = dispatch => ({
  onPress: libraryId => () => dispatch(actions.selectLibrary(libraryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
