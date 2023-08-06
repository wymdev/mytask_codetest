import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex:1,
  },
  title:{
    padding:20,
    fontSize:wp(6),
    fontWeight:'bold'
  }
});