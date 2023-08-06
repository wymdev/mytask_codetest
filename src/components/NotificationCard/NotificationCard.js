import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const NotificationCard = ({ title, detail, time }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: '#D3F4BE',
    borderRadius: 8,
    marginBottom: 13,
    backgroundColor: '#D3F4BE',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    color: '#555',
    fontWeight:'600',
    width:wp(80)
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 14,
    color: '#555',
  },
});

export default NotificationCard;
