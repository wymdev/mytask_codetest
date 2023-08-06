import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import styles from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const handleHome = async()=> {
    navigation.replace('Main');
    // await AsyncStorage.setItem('firstAppUse', 'false');
  }

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.photoContainer, { opacity: fadeAnim }]}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={styles.photo}
        />
      </Animated.View>
      {/* <View style={styles.textContainer}>
        <Text style={styles.welcomText}>
          Unlock the
        </Text>
        <Text style={styles.welcomText}>
          Potential of Your
        </Text>
        <Text style={styles.welcomText}>
          Skills
        </Text>
      </View> */}
      <View style={styles.buttonContainer}>
        <View >
          <Text style={styles.welcomText}>
            Unlock the
          </Text>
          <Text style={styles.welcomText}>
            Potential of Your
          </Text>
          <Text style={styles.welcomText}>
            Skills
          </Text>
        </View>
        <TouchableOpacity onPress={handleHome} style={styles.getStartedButton}>
          <Text style={styles.buttonText}>Start </Text>
          <Icon name='arrowright' size={20} color={'#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
