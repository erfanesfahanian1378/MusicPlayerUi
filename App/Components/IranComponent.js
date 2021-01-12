import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Image,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon2 from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
import {Surface} from 'react-native-paper';

class IranComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  playSong = item => {
    this.props.navigation.navigate('Player', {item: item});
  };

  openModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
    });
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
    let itemHome = [{  img: require("../assets/img/jpg/parsalip.jpg"), subTitle: "پارسا‌لیپ", title: "مگا‌هیت" , duration: 201.6 },
{  img: require("../assets/img/jpg/delam.jpg"), subTitle: "25باند", title: "دلم‌آب‌‌شد"  , duration: 201.6},
{  img: require("../assets/img/jpg/khoobe.jpg"), subTitle: "بهزاد‌لیتو", title: "خوبه‌همه‌چی" , duration: 201.6 },
{  img: require("../assets/img/jpg/shadmehr.jpg"), subTitle: "شادمهر عقیلی", title: "وقتی که بد میشم" , duration: 201.6 },
{  img: require("../assets/img/jpg/mamacita.jpg"), subTitle: "بهزاد‌لیتو", title: "ماماسیتا" , duration: 201.6 },
{  img: require("../assets/img/jpg/hamintor.jpg"), subTitle: "بهزاد‌لیتو", title: "همینطوری" , duration: 201.6 },
{  img: require("../assets/img/jpg/maskhare.jpg"), subTitle: "امیر‌تتلو", title: "مسخره‌بازی" , duration: 201.6 },
{  img: require("../assets/img/jpg/eyvay.jpg"), subTitle: "بابک‌جهانبخش", title: "ای‌وای" , duration: 201.6 },
{  img: require("../assets/img/jpg/namebar.jpg"), subTitle: "حمید‌مدیری", title: "نم‌بارون" , duration: 201.6 }]
    

    return (
      <View style={styles.container}>
    

<View style={[styles.rowSpace, { marginBottom: responsiveHeight(1), marginTop : responsiveHeight(-1), flexWrap: 'wrap' }]}>
        {itemHome.map(item => (

 <TouchableOpacity onPress={() => this.playSong(item)} >
            <View style={{ padding: 3 }} >
              <Image resizeMode="contain" source={item.img} style={styles.parsaLip} />
              <Text style={styles.h2White}>{item.title}</Text>
              <Text style={[styles.h2White, { color: "#8b8b8b", fontWeight: "bold" }]} >{item.subTitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
        


      </View>
    );
  }
}

export default IranComponent;

const styles = StyleSheet.create({
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
});
