import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ProfileComponent from '../Components/ProfileComponent';
import {ScrollView} from 'react-native-gesture-handler';
import SongsComponent from '../Components/SongsComponent';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title , {color : "#fff"}]}>پنل کاربر</Text>
        <ScrollView style = {{backgroundColor : "#2d2d2d"}}>
          <ProfileComponent />
          <Text style={[styles.title, {marginTop: 10, fontSize: responsiveFontSize(2), color : "#fff"}]}>
            تاریخچه
          </Text>
          <SongsComponent navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});
