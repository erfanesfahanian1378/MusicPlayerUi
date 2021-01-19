import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PlayerComponent from '../Components/PlayerComponent';

class Player extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let item = this.props.route.params.item;
    return (
      <View style={styles.container}>
       <Text>SSSSSSSS</Text>
      </View>
    );
  }
}

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
