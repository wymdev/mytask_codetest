/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Style';
import CompletedTaskListCard from '../../components/CompletedTaskListCard/CompletedTaskListCard';

const date = [
  {id: 1, d_1: '01', d_2: 'Mon'},
  {id: 2, d_1: '02', d_2: 'Tue'},
  {id: 3, d_1: '03', d_2: 'Wed'},
  {id: 4, d_1: '04', d_2: 'Thru'},
];

const flatlistKeyExtractor = (_, index) => index.toString();

const CompletedTasksDetail = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const _renderItem = ({item}) => {
    const isSelected = item === selectedDate;

    const onPressDate = () => {
      setSelectedDate(item);
    };
    return (
      <TouchableOpacity
        onPress={onPressDate}
        style={{
          backgroundColor: isSelected ? '#9EE96F' : '#ffffff',
          marginRight: 15,
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 10,
          borderColor: '#9EE96F',
          borderWidth: 2,
        }}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item?.d_1}</Text>
          <Text style={{fontSize: 15, fontWeight: '600'}}>{item?.d_2}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#9EE96F'}}>
      <CustomHeader showNotification={true} style={{paddingVertical: 30}} />
      <View style={styles.cardContainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            marginBottom: 16,
          }}>
          Completed Tasks
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Today</Text>
          <Text style={{fontSize: 15, color: 'grey'}}>01 August, Monday</Text>
        </View>
        <FlatList
          data={date}
          renderItem={_renderItem}
          keyExtractor={flatlistKeyExtractor}
          horizontal
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          ListFooterComponent={<AntDesign name="arrowright" size={35} />}
        />
      </View>
      <CompletedTaskListCard />
    </View>
  );
};

export default CompletedTasksDetail;
