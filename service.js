import TrackPlayer , {Event} from "react-native-track-player"
module.exports = async function() {
    TrackPlayer.addEventListener(Event.RemotePlay , () => TrackPlayer.play());
    TrackPlayer.addEventListener(Event.RemotePlay , () => TrackPlayer.pause());
    TrackPlayer.addEventListener(Event.RemoteNext , () => TrackPlayer.skipToNext());
    TrackPlayer.addEventListener(Event.RemotePrevious , () => TrackPlayer.skipToPrevious());
    TrackPlayer.addEventListener(Event.RemoteStop , () => TrackPlayer.destroy());
};