import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import TrackPlayer , {usePlaybackState} from "react-native-track-player"
import { ActivityIndicator } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
export default function Controller({ onNext, onPrv }) {

  const playbackState = usePlaybackState(); 
  const [isPlaying , setIsPlaying] = useState("loading");
  useEffect(() => {
    if(playbackState === "playing" || playbackState === 3) {
      setIsPlaying("playing")
    }else if(playbackState === "paused" || playbackState === 2) {
      setIsPlaying("paused")
    }else {
      setIsPlaying("loading")
    }
  } , [playbackState])

  const renderPlayPauseBtn = () => {
      switch (isPlaying) {
        case "playing":
          return <MaterialIcons name="pause"  size={45} color = "#fff" />

        case "paused":
          return <MaterialIcons name="play-arrow"  size={45} color = "#fff" />

      
        default:

        return <ActivityIndicator size= {45} color = "#fff" />
          break;
      }
  }

  const onPlayPause = () => {
      console.log(playbackState);

      if(playbackState === "playing" || playbackState === 3) {
        TrackPlayer.pause()
      }else if(playbackState === "paused" || playbackState === 2) {
        TrackPlayer.play()
      }
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrv}>
        <MaterialIcons name="skip-previous" size={45} color = "#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => onPlayPause()}>
        {renderPlayPauseBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <MaterialIcons name="skip-next" size={45} color = "#fff" />
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width : responsiveWidth(70)
  },
});