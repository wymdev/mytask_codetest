import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import HometaskCard from '../../components/HometaskCard';
import styles from './Style';
const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader showNotification={true} />
      <View style={styles.container}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>Task Completed per Week</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>Total Duration per Week</Text>
        </View>
      </View>
      <View style={styles.compelteTaskContainer}>
        <HometaskCard />
      </View>
    </View>
  );
};

export default HomeScreen;
