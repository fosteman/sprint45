import * as React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  AmbientLight
} from 'react-360'

import mock from './static_assets/mockLocations'

const l = mock[0] //location

export default () => {
  console.log(l)
  return (
    <View style={styles.wrapper}>
      <AmbientLight
        intensity={0.7}
      />
      <Text style={styles.name}>{l.country}</Text>
      <Text style={styles.author}>{l.unique_title}</Text>
      <Text style={styles.description}>Temperature: {l.weather_recommendation.temp} C</Text>
      <Image style={{
        width: 1280,
        height: 720
      }} source={{uri: l.cached.urls.regular}} />
      <Text style={styles.description}>Photo Alt: {l.cached.alt_description} C</Text>
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
