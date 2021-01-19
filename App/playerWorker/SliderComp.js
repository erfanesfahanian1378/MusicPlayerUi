import React, { useRef, useEffect, useState } from "react";
import {
    View,
    SafeAreaView,
    Text,
    Image,
    FlatList,
    Dimensions,
    Animated,
    StyleSheet,
} from "react-native";


import TrackPlayer , {useProgress} from "react-native-track-player"
import Slider from '@react-native-community/slider';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default function SliderComp() {

    const {position , duration} = useProgress();

    const handleChange = (val) => {
            TrackPlayer.seekTo(val)
    }

    const formatTime = (secs) => {
        let minutes = Math.floor(secs/60);
        let seconds = Math.ceil(secs - minutes * 60);

        if(seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    return (
        <View style={{paddingTop : responsiveHeight(5)}}>
            <Slider
                style={{ width: responsiveWidth(80), height: responsiveHeight(5) }}
                minimumValue={0}
                maximumValue={duration}
                value = {position}
                minimumTrackTintColor="#fff"
                maximumTrackTintColor="#fff"
                thumbTintColor = "#fff"
                onSlidingComplete = {handleChange}
            />
            <View style={style.timerContainer}>
                <Text style={style.timer}>{formatTime(position)}</Text>
                <Text style={style.timer}>{formatTime(duration)}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    timerContainer: {
        flexDirection : "row",
        justifyContent : "space-between"
    },timer : {
        color : "#fff",
        fontSize : responsiveFontSize(1.5)
    }
})