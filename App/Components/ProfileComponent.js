import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
class ProfileComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderOption = (icon, name, count) => {
    return (
      <View style={styles.options}>
        <View style={styles.left}>
          <Icon name={icon} size={30} color="#fff" />
          <Text style={[styles.title , {color : "#fff"}]}>{name}</Text>
        </View>
        <View style={styles.left}>
       
          <Text style={[styles.title , {color : "#fff"}]}>{count}</Text>
           <Icon2
            name="ios-arrow-back"
            size={30}
            color="gray"
            style={{marginLeft: 20}}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.info , {backgroundColor : "#2d2d2d"}]}>
          <Surface style={[styles.surface , {backgroundColor : "#2d2d2d"}]}>
            <Image
              source={require('../assets/man.jpg')}
              style={styles.profile}
            />
          </Surface>
          <View style={[styles.dataContainer , {backgroundColor : "#2d2d2d"}]}>
            <Text style={styles.name}></Text>
            <Text style={[styles.uname , {paddingHorizontal : responsiveWidth(3)}]}>erfan esfahanian</Text>
            <Text style={styles.uname}></Text>
          </View>
        </View>
        <View style={styles.divider} />
        {this.renderOption('music', 'آهنگ ها', 20)}
        {this.renderOption('playlist-music', 'پلی‌لیست‌ها', 25)}
        {this.renderOption('album', 'آلبوم‌ها', 10)}
        {this.renderOption('download', 'دانلود‌ها', 10)}
        <View style={styles.divider} />
      </View>
    );
  }
}

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#2d2d2d"
  },
  info: {
    padding: 10,
    flexDirection: 'row-reverse',
  },

  surface: {
    height: 80,
    width: 80,
    borderRadius: 75,
    elevation: 15,
    overflow: 'hidden',
  },
  profile: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  dataContainer: {
    
  },
  name: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  uname: {
    fontSize: 18,
    color: 'gray',
  },
  divider: {
    height: 10,
    backgroundColor: '#3f3f3f',
  },
  options: {
    height: 55,
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    backgroundColor : "#2d2d2d"
  },
  left: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    marginLeft: 15,
  },
});
