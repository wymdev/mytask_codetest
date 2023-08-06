import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import styles from './Style';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.photoContainer, {opacity: fadeAnim}]}>
        {/* <Image
          source={require('../../assets/profile.jpg')}
          style={styles.photo}
        /> */}
        <Text style={styles.appName}>
            My Task
        </Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
