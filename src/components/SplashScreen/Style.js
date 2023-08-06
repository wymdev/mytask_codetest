import { StyleSheet } from "react-native";
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
    appName:{
        fontSize:30,
        alignSelf:'center',
        fontWeight:'bold'
    }
});

export default styles;