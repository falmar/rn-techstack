import React, {PropTypes} from 'react'
import {Text, StyleSheet} from 'react-native'

import {CardSection} from './common'

const ListItem = ({library}) => {
  const {titleStyle} = styles

  return (
    <CardSection>
      <Text style={titleStyle}>{library.title}</Text>
    </CardSection>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5
  }
})

ListItem.propTypes = {
  library: PropTypes.object.isRequired
}

export default ListItem
