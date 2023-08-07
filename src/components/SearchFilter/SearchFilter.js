/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './Style';

const SearchFilter = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderBottomWidth: 0.5,
          paddingVertical: 15,
        }}>
        <Text style={styles.markText}>MARK</Text>
        <Text style={{borderRightWidth: 1}} />
        <EvilIcons name="search" size={23} />
        <Text style={{borderLeftWidth: 1}} />
        <Text style={styles.filterText}>FILTER</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
          borderBottomWidth: 0.5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 3,
            marginRight: 5,
            backgroundColor: '#D8D9DA',
            padding: 5,
            borderRadius: 3,
          }}>
          <Ionicons name="location" size={20} />
          <Text style={{fontSize: 16, paddingHorizontal: 5}}>Floor 1</Text>
          <Ionicons name="close" size={20} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 5,
            backgroundColor: '#D8D9DA',
            padding: 5,
            borderRadius: 3,
          }}>
          <Entypo name="pie-chart" size={20} />
          <Text style={{fontSize: 16, paddingHorizontal: 5}}>Lobby</Text>
          <Ionicons name="close" size={20} />
        </View>
      </View>
    </View>
  );
};

export default SearchFilter;
