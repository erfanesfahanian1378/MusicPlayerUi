import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {Surface} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');

class CatogComponent extends Component {
  constructor(props) {
    super(props);
  }

  goToDetails = item => {
    this.props.navigation.navigate('Details', {item, item});
  };

  render() {
    let categories = [
      {
        name: 'راک',
        img: require('../assets/c1.jpg'),
      },
      {
        name: 'متال',
        img: require('../assets/c2.jpg'),
      },
      {
        name: 'پاپ',
        img: require('../assets/c3.jpg'),
      },
      {
        name: 'رپ',
        img: require('../assets/c4.jpg'),
      },
      {
        name: 'سنتی',
        img: require('../assets/c5.jpg'),
      },
    ];
    return (
      <View style={styles.container}>
        
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback onPress={() => this.goToDetails(item)}>
                <Surface style={styles.surface}>
                  <ImageBackground
                    source={item.img}
                    style={styles.img}
                    blurRadius={3}>
                    <Icon name="music" color="#fff" size={22} />
                    <View style={styles.rowStartReverse}>
                    <Text style={styles.name}>{item.name}</Text>
                    </View>
                  </ImageBackground>
                </Surface>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    );
  }
}

export default CatogComponent;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 230,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
    marginLeft: 15,
  },
  surface: {
    elevation: 15,
    height: 150,
    width: 150,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 15,
    overflow: 'hidden',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily : "Medium"
  },
  rowStartReverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    flex : 1
  },
});
