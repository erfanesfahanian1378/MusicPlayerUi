import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Surface} from 'react-native-paper';
import {Slider} from 'react-native-elements';
import SongsCOmponent from './SongsComponent';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import SoundPlayer from 'react-native-sound-player'


const {width, height} = Dimensions.get('screen');

class PlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.0,
      maxValue: 0.0,
      iconName : "play"
    };
  }


  componentDidMount() {
    this.setState({
      maxValue: this.props.item.duration / 60,
    });
  }


   playSong() {
    try {
      SoundPlayer.playUrl("https://cdn.avaa.cloud/files/musics/99/04/20/Omid%20Sadeghi%20-%20Mage%20Mishe.mp3")
    } catch (e) {
      alert('Cannot play the file')
      console.log('cannot play the song file', e)
    }
  }

  // async getInfo() { // You need the keyword `async`
  //   try {
  //     const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
  //     console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
  //   } catch (e) {
  //     console.log('There is no song playing', e)
  //   }
  // }

  onPressPlayButton() {
    this.playSong()
    if(this.state.iconName == "play") {
      this.setState({
        iconName:  "pause"
      });
    }else {
      console.log("its not pause")
      this.setState({
        iconName:  "play"
      });
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{height: height + 60}}>
            <Surface style={styles.surface}>
              <Image source={this.props.item.img} style={styles.img} />
            </Surface>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>{this.props.item.title}</Text>
              <Text style={styles.subTitle}>{this.props.item.subTitle}</Text>
              <TouchableOpacity style={styles.btn}>
                <Icon name="play" size={30} color="#fff" />
              </TouchableOpacity>
            </View>

            <Text style={styles.text}>Queue</Text>
            <SongsCOmponent navigation={this.props.navigation} />
          </View>
        </ScrollView>
        <View style={styles.main}>
          <Slider
            value={this.state.value}
            minimumValue={0.0}
            maximumValue={this.state.maxValue}
            onValueChange={value => this.setState({value})}
            thumbStyle={{backgroundColor: '#ff5b77', height: 12, width: 12}}
            thumbTintColor="red"
            maximumTrackTintColor="#e5e5e5"
            minimumTrackTintColor="#ff5b77"
            trackStyle={{backgroundColor: 'red', height: 1}}
          />
          <View style={styles.actions}>
            <Icon name="shuffle-variant" size={35} color="#fff" />
            <Icon name="skip-backward" size={35} color="#fff" />
            <Icon onPress = {() => this.onPressPlayButton()} name={this.state.iconName} size={35} color="#fff" />
            <Icon name="skip-forward" size={35} color="#fff" />
            <Icon name="sync" size={35} color="#fff" />
          </View>
        </View>
      </View>
    );
  }
}

export default PlayerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
  },
  surface: {
    height: 200,
    width: 200,
    borderRadius: 10,
    elevation: 15,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20,
  },
  img: {
    height: 200,
    width: 200,
  },
  dataContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color : "#fff"
  },
  subTitle: {
    color: 'gray',
    fontSize : responsiveFontSize(1.5)
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff5b77',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    width: '100%',
    // height: 60,
    paddingVertical : responsiveHeight(1),
    // borderTopWidth: 0.5,
    // borderTopColor: 'gray',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  main: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1f1f1f',
  },
  text: {
    fontSize: 18,
    color: '#333333',
    margin: 10,
  },
});
