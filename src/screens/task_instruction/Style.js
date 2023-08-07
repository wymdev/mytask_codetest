import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    width:'92%',
    marginHorizontal: hp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: '#ffffff',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
  },
  texttitle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: hp(1.8),
    marginVertical: hp(1),
  },
  textbody: {
    fontWeight: '400',
    color: '#000',
  },
  locationtext: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: hp(1.5)
  },
  steptitle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: hp(2.2),
    marginVertical: hp(3),
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: wp(85),
    height: hp(44),
  },
});

export default styles;
