import {View, Text} from 'react-native';
import React from 'react';
import {Timeline} from 'react-native-just-timeline';
import moment from 'moment';

import styles from './Style';

const ScheduleScreen = () => {
  const data = [
    // First row in the Timeline
    {
      title: {
        content: 'Event One Title',
      },
      description: {
        content: 'Event One Description',
      },
      time: {
        content: moment().format('ll'),
      },
    },

    // Second row in the Timeline
    {
      title: {
        content: 'Event Two Title',
      },
      description: {
        content: 'Event Two Description',
      },
      time: {
        content: moment().format('ll'),
      },
    },

    // You got the idea..
    {
      title: {
        content: 'Event Three Title',
      },
      description: {
        content: 'Event Three Description',
      },
      time: {
        content: moment().format('ll'),
      },
      icon: {
        content: 'pencil',
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Timeline data={data} />
    </View>
  );
};

export default ScheduleScreen;
