import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    height: hp(100),
    paddingHorizontal: 13,
  },
  timelineHeadingContainer: {paddingVertical: 30, paddingHorizontal: 15},
  timelineHeadingTitleText: {fontSize: 26, fontWeight: 'bold', color: '#222'},
  underline: {
    height: 3,
    width: '30%',
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#6F98FA',
    marginLeft: 20,
  },
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  headerTextContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  dayText: {
    fontSize: wp(5),
    color:'gray',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: wp(5),
    color:'gray',
    marginLeft: 5,
  },
  timeline: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  verticalLine: {
    width: 2,
    height: '100%',
    backgroundColor: '#CCCCCC',
    position: 'absolute',
    left: wp(20),
    top: 0,
  },
  group: {
    marginLeft: wp(24),
    marginBottom: 16,
  },
  groupHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  eventItem: {
    padding: 16,
    backgroundColor: '#013D83',
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically
    flex: 1, // Make this container expand to fill the available space
  },
  mark:{
    marginTop:6,
    backgroundColor:'white',
    borderColor:'black',
    borderRadius:50,
    width:20,
    height:20,
    alignSelf:'flex-end',
    alignItems:'center',
    justifyContent:'center'
  }
});