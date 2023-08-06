import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import styles from './Style';


const CompleteButton = () => {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <AntDesign name='checkcircle' size={40} color={'#fff'}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={backHandler}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CompleteButton