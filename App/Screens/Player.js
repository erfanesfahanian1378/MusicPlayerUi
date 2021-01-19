import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PlayerComponent from '../Components/PlayerComponent';
import Players from "../playerWorker/Players"
class Player extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let item = this.props.route.params.item;
    return (
      <View style={styles.container}>
        {/* ino bayad dobare PlayerComponent ezafe konam */}
        {/* <PlayerComponent navigation={this.props.navigation} item={item} /> */}
        <Players />
      </View>
    );
  }
}

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#0d0d0d"
  },
});
