/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import ReportCard from '../../components/ReportCard/ReportCard';

const ReportScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader showNotification={true} style={{paddingVertical: 30}} />
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          borderWidth: 0.3,
          borderBottomWidth: 0,
          borderColor: 'grey',
          flex: 1,
        }}>
        <SearchFilter />
        <ReportCard />
      </View>
    </View>
  );
};

export default ReportScreen;
