import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import moment from 'moment';
import ScheduleFileter from '../../components/Fiter/ScheduleFileter';
import CustomHeader from '../../components/CustomHeader';

import styles from './Style';

const ScheduleScreen = () => {

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  const EventItem = ({ title, description, fromto }) => {
    const randomColor = getRandomColor();
    return (
      <View style={[styles.eventItem, { backgroundColor: randomColor }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.itemTimeContainer}>
              <View style={styles.mark}>
                <Text>J</Text>
              </View>
              <Text style={styles.description}>{fromto}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const Timeline = ({ data }) => {
    // Group events based on their hour
    const groupedEvents = data.reduce((grouped, event) => {
      const hour = moment(event.time, 'h A').format('H'); // Get the hour in 24-hour format (0-23)
      if (!grouped[hour]) {
        grouped[hour] = [];
      }
      grouped[hour].push(event);
      return grouped;
    }, {});

    return (
      <View style={styles.timeline}>
        {Object.entries(groupedEvents).map(([hour, events], index) => (
          <View key={index}>
            <Text style={styles.groupHeading}>{moment(hour, 'H').format('h A')}</Text>
            <View style={styles.verticalLine} />
            <View style={styles.group}>

              {events.map((event, eventIndex) => (
                <EventItem
                  key={eventIndex}
                  title={event.title}
                  description={event.description}
                  fromto={event.fromto}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  };


  const data = [
    {
      title: 'Event One Title',
      description: 'Event One Description',
      time: '9:00 AM',
      fromto: '9a - 12pm'
    },
    {
      title: 'Event Two Title',
      description: 'Event Two ',
      time: '9:30 AM',
      fromto: '9:30a - 12pm'
    },
    {
      title: 'Event Three Title',
      description: 'Event Three ',
      time: '10:00 AM',
      fromto: '10:00a - 12pm'
    },
    {
      title: 'Event Four Title',
      description: 'Event Four ',
      time: '10:30 AM',
      fromto: '10:30a - 12pm'
    },
    {
      title: 'Event Five Title',
      description: 'Event Five ',
      time: '11:00 AM',
      fromto: '11a - 12pm'
    },
    {
      title: 'Event Six Title',
      description: 'Event Six ',
      time: '11:30 AM',
      fromto: '11:30a - 12pm'
    },
    {
      title: 'Event Seven Title',
      description: 'Event Seven ',
      time: '1:00 PM',
      fromto: '1pm - 3pm'
    },
    // Add more events as needed
  ];

  const CustomHeaderText = () => {
    const day = moment().format('dddd'); // Get the day of the week (e.g., Wednesday)
    const date = moment().format('MMM D'); // Get the date (e.g., Mar 17)

    return (
      <View style={styles.headercontainer}>
        <View style={styles.horizontalLine} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.dayText}>{day}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
    );
  };

  return (
    <View>
      <CustomHeader />
      <View style={styles.container}>
        <ScheduleFileter />
        <CustomHeaderText />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Timeline data={data} />
        </ScrollView>
      </View>
    </View>

  );
};

export default ScheduleScreen;
