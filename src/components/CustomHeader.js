import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';

const CustomHeader = ({showNotification = true, style}) => {
  const navigation = useNavigation();
  const handleNoti = () => {
    navigation.navigate('NotificationList');
  }
  return (
    <View style={[styles.container, style]}>
      {/* Profile Picture */}
      <TouchableOpacity>
        <Image
          source={require('../assets/profile.jpg')}
          style={styles.profilePicture}
        />
      </TouchableOpacity>

      <View style={styles.nameText}>
        <Text style={styles.text}>Hello,</Text>
        <Text style={styles.text}>John</Text>
      </View>

      {/* Search Icon */}
      <TouchableOpacity>
        <Icon name="search" size={24} color="#fff" style={styles.icon} />
      </TouchableOpacity>

      {/* Notification Icon */}
      {showNotification && (
        <TouchableOpacity onPress={handleNoti}>
          <Icon name="bell" size={24} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
