import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    photoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    photo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        
    },
    textContainer:{
        marginTop:wp(60),
    },
    welcomText:{
        fontSize:35,
        width:'100%',
        marginLeft:10,
        color:'#000',
        fontWeight:'bold',
    },
    getStartedButton: {
        marginTop:wp(10),
        height:wp(15),
       
        backgroundColor: '#D3F4BE',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width:wp(85),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        color:'#000',
        fontWeight: 'bold',
    },
});

export default styles;