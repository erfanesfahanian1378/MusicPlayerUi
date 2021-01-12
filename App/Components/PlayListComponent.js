import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon2 from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');

class PlayListComponent extends Component {
  constructor(props) {
    super(props);
  }

  playSong = item => {
    this.props.navigation.navigate('Player', {item: item});
  };

  render() {
    console.disableYellowBox = true;
    let banners = [
      {
        title: 'Metal City',
        subTitle: 'Dead April',
        img: require('../assets/b1.jpg'),
        duration: 201.6,
      },
      {
        title: 'Return To Forever',
        subTitle: '',
        img: require('../assets/b2.jpg'),
        duration: 201.6,
      },
      {
        title: 'Your Love Remains',
        subTitle: 'The Rock Music',
        img: require('../assets/b4.jpg'),
        duration: 201.6,
      },
    ];

    const playList = [{ img: require("../assets/img/jpg/hiphop.jpg"), title: "هیپ‌هاپ" , subTitle : "" , duration: 201.6,  },
{ img: require("../assets/img/jpg/pop.jpg"), title: "پاپ‌پارتی" , subTitle : "" , duration: 201.6, },
{ img: require("../assets/img/jpg/rap.jpg"), title: "رپ‌پارتی" , subTitle : "" , duration: 201.6, },
{ img: require("../assets/img/jpg/disco.jpg"), title: "دیسکو" , subTitle : ""  , duration: 201.6,},
{ img: require("../assets/img/jpg/hiphop.jpg"), title: "هیپ‌هاپ" , subTitle : "" , duration: 201.6, },
{ img: require("../assets/img/jpg/hiphop.jpg"), title: "هیپ‌هاپ" , subTitle : "" , duration: 201.6, },
{ img: require("../assets/img/jpg/hiphop.jpg"), title: "هیپ‌هاپ" , subTitle : "" , duration: 201.6, },]

    return (
      <View style={styles.container}>
         <View style= {{paddingVertical : responsiveHeight(1)}} >
            <FlatList
                horizontal
                data={playList}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress = {() => this.playSong(item)} >
                        <Image resizeMode="contain" source={item.img} style={styles.playlist} />
                        <Text style={styles.h2White2}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>

      </View>
    );
  }
}

export default PlayListComponent;

const styles = StyleSheet.create({
    h2White2: {
        color: "#fff",
        fontFamily: "Medium",
        textAlign: 'center',
        fontSize: responsiveFontSize(1),
        alignSelf: 'center',
        // fontWeight : "bold"
      },
  container: {
    // flex: 1,
    
    backgroundColor: '#2d2d2d',
    elevation: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  banner: {
    height: 230,
    width: width,
  },
  bannerImage: {
    height: 250,
    width: '100%',
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 24,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 5,
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parsaLip: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: 15,
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(2)
  },
  h2White: {
    color: "#fff",
    fontFamily: 'Medium',
    textAlign: 'center',
    fontSize: 13,
    alignSelf: 'center',
  },
  playlist: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: 15,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(12)
  },
});
