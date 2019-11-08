import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360'
import TopPosts from './TopPosts'
import CurrentPost from './CurrentPost'
import ModelView from './ModelView'

export default class sprint_demo extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
                                   panel: {
                                     // Fill the entire surface
                                     width: 1000,
                                     height: 600,
                                     backgroundColor: 'rgba(255, 255, 255, 0.4)',
                                     justifyContent: 'center',
                                     alignItems: 'center',
                                   },
                                   greetingBox: {
                                     padding: 20,
                                     backgroundColor: '#000000',
                                     borderColor: '#639dda',
                                     borderWidth: 2,
                                   },
                                   greeting: {
                                     fontSize: 30,
                                   },
                                 })


AppRegistry.registerComponent('TopPosts', () => TopPosts)
AppRegistry.registerComponent('CurrentPost', () => CurrentPost)
AppRegistry.registerComponent('LocationBackground', () => LocationBackground)
AppRegistry.registerComponent('ModelView', () => ModelView)

AppRegistry.registerComponent('sprint_demo', () => sprint_demo)
