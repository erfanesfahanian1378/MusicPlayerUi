import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
import {Surface} from 'react-native-paper';

class SOngDatas extends Component {
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
    let item = this.props.item;
    return (
      <View>
        <Modal
          transparent={true}
          onRequestClose={() => this.closeModal()}
          visible={this.state.modalVisible}
          animationType="slide">
          <View style={{height: '100%', backgroundColor: 'rgba(0,0,0,0.4)'}}>
            <View style={styles.modal}>
              <Surface style={styles.surface}>
                <Image source={item.img} style={styles.modalImg} />
              </Surface>

              <View style={styles.modalData}>
                <View style={styles.playerContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                  <TouchableOpacity style={styles.btn}>
                    <Icon name="play" size={30} color="#fff" />
                  </TouchableOpacity>
                </View>
                <View style={styles.option}>
                  <Icon name="heart" size={30} color="#ff5b77" />
                  <Text style={styles.text}>Add To Favourite</Text>
                </View>
                <View style={styles.option}>
                  <Icon name="playlist-plus" size={30} color="#000" />
                  <Text style={styles.text}>Add To Playlist</Text>
                </View>
                <View style={styles.option}>
                  <Icon name="album" size={30} color="#000" />
                  <Text style={styles.text}>Create Album</Text>
                </View>
                <View style={styles.option}>
                  <Icon name="download" size={30} color="#000" />
                  <Text style={styles.text}>Download</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableWithoutFeedback
          style={styles.songContainer}
          onPress={() => this.playSong(item)}>
          <View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.dataContainer}>
              <Text style={styles.songtitle}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
              <Text style={styles.subTitle}>{item.duration / 60}</Text>
            </View>
            <View style={styles.iconContainer}> 
              <TouchableOpacity onLongPress={() => this.openModal()}>
                <Icon name="dots-vertical" color="gray" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

class IraninaComponent extends Component {
  constructor(props) {
    super(props);
  }

  separator = () => {
    return <View style={{height: 10, backgroundColor: '#2d2d2d'}} />;
  };

  render() {
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
        <View style={{padding: 10, paddingTop: 0}}>
          <FlatList
            data={itemHome}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => this.separator()}
            renderItem={({item, index}) => {
              return (
                  <View style={{flexDirection: 'row',justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <SOngDatas item={item} navigation={this.props.navigation} />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default IraninaComponent;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  songContainer: {
    width: width,
    height: 70,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
  },
  songtitle: {
    fontSize: 18,
    color: '#fff',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex : 1
  },
  modal: {
    height: '55%',
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  modalImg: {
    height: 180,
    width: 180,
  },
  surface: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    position: 'absolute',
    overflow: 'hidden',
    top: -100,
    borderRadius: 20,
    elevation: 20,
  },
  modalData: {
    marginTop: 100,
  },
  option: {
    height: 50,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
  },
  text: {
    marginLeft: 15,
    color: '#000',
    fontSize: 20,
  },
  playerContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
});
