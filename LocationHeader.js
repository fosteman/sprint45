import * as React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360'
import locationListing from './static_assets/mockLocations'


class LocationTab extends React.Component {
  state = {
    hover: false,
  }

  render() {
    const {title, thumb, description} = this.props
    return (
      <VrButton
        style={styles.postButton}
        onEnter={() => this.setState({hover: true})}
        onExit={() => this.setState({hover: false})}
      >
        <Image style={styles.postButtonPreview} source={{uri: thumb}}/>
        <View style={[styles.postButtonInfo, this.state.hover ? styles.postButtonInfoHover : null]}>
          <View style={styles.postButtonLabel}>
            <Text style={styles.postButtonName}>{title}</Text>
          </View>
          <View style={styles.postButtonLabel}>
            <Text style={styles.postButtonAuthor}>{description}</Text>
          </View>
        </View>
      </VrButton>
    )
  }
}


export default () => {

  return (
    <View style={styles.wrapper}>
      {locationListing.map((loc, i) => (
        <LocationTab
          key={loc.uuid}
          index={i}

          thumb={loc.cached.urls.regular}
          title={loc.title}
          description={loc.country}
        />
      ))}
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
                                   },
                                   postButton: {
                                     height: 120,
                                     backgroundColor: '#000000',
                                     overflow: 'hidden',
                                   },
                                   postButtonInfo: {
                                     ...StyleSheet.absoluteFillObject,
                                     backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                     flexDirection: 'column',
                                   },
                                   postButtonPreview: {
                                     width: '100%',
                                     height: 225,
                                   },
                                   postButtonInfoHover: {
                                     backgroundColor: 'rgba(0, 0, 0, 0)',
                                   },
                                   postButtonLabel: {
                                     backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                     paddingHorizontal: 10,
                                     paddingVertical: 2,
                                     alignSelf: 'flex-start',
                                   },
                                   postButtonName: {
                                     fontSize: 24,
                                   },
                                   postButtonAuthor: {
                                     fontSize: 16,
                                   },
                                 })
