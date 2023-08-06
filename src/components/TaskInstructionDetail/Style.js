import { StyleSheet , Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    ImageCard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(90),
        height: hp(25),
        marginVertical: hp(2),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: '#ffffff',
        borderRadius: 25,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'center'
    },
    taskInstructionPhoto: {
        width: wp(30),
        height: wp(30),
        alignSelf: 'center'
    },
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:wp(85),
        height:hp(40),
    },
    scrollBar: {
        width: 5,
        backgroundColor: 'green',
    },
    itemContainer: {
        flexDirection:'row',
        marginHorizontal:hp(2),
        alignItems: 'center',
        paddingVertical: hp(1),

    },
    itemDescription: {
        fontSize: wp(3.7),
        width:wp(60),
        paddingLeft:hp(3)
    },
    separator: {
        height: 0.4,
        backgroundColor: 'gray',
    },
    picture:{
        width:wp(15),
        borderRadius:30,
        height:wp(15),
    },
    scrollBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 5,
        backgroundColor: 'green',
      },
      scrollBarIndicator: {
        position: 'absolute',
        top: (100) * 1.5 / 2 - 5, // Center the indicator
        left: 0,
        width: 5,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'green',
      },
      buttonContainer: {
        marginVertical:hp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#9EE96F',
        borderRadius: 30,
        height: hp(6),
      },
      backText: {
        fontSize:hp(2),
        fontWeight:'700',
        color: '#fff',
      },
});

export default styles;
