import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#232323',
    height:hp(40)
  },
  summaryBox:{
    alignSelf:'center',
    width:wp(60),
    height:hp(10),
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#393939',
    marginVertical:hp(3),
  },
  summaryText:{
    color:'white',
  },
  compelteTaskContainer:{
    backgroundColor:'#ffffff',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:-hp(7),
    flex:1
  }
});

export default styles;