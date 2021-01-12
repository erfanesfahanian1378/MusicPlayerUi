import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import BannerComponent from '../Components/BannerComponent';
import CatogComponent from '../Components/CatogComponent';
import SongsComponent from '../Components/SongsComponent';
import IranComponent from "../Components/IranComponent";
import PlayListComponent from "../Components/PlayListComponent"
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styless.container}>
        <View style={[styless.rowCenter , {marginHorizontal : 10}]}>
        <Text style={styless.title}>AVA</Text>
        </View>
        <ScrollView>
          <BannerComponent navigation={this.props.navigation} />
          <CatogComponent navigation={this.props.navigation} />
          <IranComponent navigation={this.props.navigation} />
          <PlayListComponent navigation={this.props.navigation} />
          <View style={styless.rowSpaceReverse}>
          <Text style={[styless.title, {marginTop: 0}]}>آهنگ ها</Text>
          </View>
          <SongsComponent navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
    marginLeft: 15,
  },
  rowCenter: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowSpaceReverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowStartReverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
