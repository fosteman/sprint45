import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-360'

import mock from './static_assets/mockLocations'

const l = mock[0] //location

export default () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{l.country}</Text>
      <Text style={styles.author}>{l.unique_title}</Text>
      <Text style={styles.description}>{l.overview}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
                                   wrapper: {
                                     width: 300,
                                     height: 600,
                                     backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                     borderColor: '#303050',
                                     borderWidth: 2,
                                     flexDirection: 'column',
                                     justifyContent: 'flex-start',
                                     alignItems: 'stretch',
                                     padding: 10,
                                   },
                                   name: {
                                     fontSize: 30,
                                     textAlign: 'center',
                                   },
                                   author: {
                                     fontSize: 20,
                                     textAlign: 'center',
                                   },
                                   description: {
                                     fontSize: 16,
                                   },
                                 })
