import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {connect} from 'react-redux'

import * as actions from '../store/actions/libraries'

import {CardSection} from './common'

class ListItem extends Component {
  renderDescription () {
    const {expanded, library: {description}} = this.props

    if (expanded) {
      const {descriptionStyle} = styles

      return (
        <CardSection>
          <Text style={descriptionStyle}>{description}</Text>
        </CardSection>
      )
    }
  }

  render () {
    const {library, onPress} = this.props
    const {id, title} = library

    const {titleStyle} = styles

    return (
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={onPress(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>

      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5
  },
  descriptionStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1
  }
})

ListItem.propTypes = {
  library: PropTypes.object.isRequired,
  expanded: PropTypes.bool,
  onPress: PropTypes.func.isRequired
}

const mapStateToProps = ({libraries}, ownProps) => {
  return {
    expanded: libraries.selected === ownProps.library.id
  }
}

const mapDispatchToProps = dispatch => ({
  onPress: libraryId => () => dispatch(actions.selectLibrary(libraryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
