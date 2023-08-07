/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './Style';

const data = [
  {id: 1, title: 'Floors, Carpet and Mats', icon: '', status: 'green'},
  {id: 2, title: 'Glass and Mirrors', icon: '', status: 'red'},
  {
    id: 3,
    title: 'Touch Points',
    icon: '',
    desc: 'including Handles, Light Switches, Push Plates and ...',
    status: 'yellow',
  },
];

const flatlistKeyExtractor = (_, index) => index.toString();

const getBackgroundColor = ({status, text}) => {
  if (status === 'green') {
    return {
      backgroundColor: 'green',
      color: '#fff',
      borderColor: 'green',
      borderBottomWidth: 1,
      borderBottomColor: 'green',
    };
  } else if (status === 'yellow') {
    return {
      backgroundColor: '#EBB02D',
      color: '#fff',
      borderColor: '#EBB02D',
      borderBottomWidth: 1,
      borderBottomColor: '#EBB02D',
    };
  } else if (status === 'red') {
    return {
      backgroundColor: 'red',
      color: '#fff',
      borderColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: 'red',
    };
  }

  if (text === 'Y') {
    return {
      borderBottomColor: '#EBB02D',
    };
  } else if (text === 'R') {
    return {
      borderBottomColor: 'red',
    };
  } else if (text === 'G') {
    return {
      borderBottomColor: 'green',
    };
  }
};

const colorButtonStyle = {
  paddingVertical: 10,
  paddingHorizontal: 13,
  marginHorizontal: 10,
  borderWidth: 1,
  borderRadius: 3,
  borderBottomColor: 'grey',
  borderBottomWidth: 6,
};

const ColorComponents = ({green, red, yellow}) => {
  return (
    <>
      <Text
        style={[
          colorButtonStyle,
          getBackgroundColor({status: green, text: 'G'}),
        ]}>
        G
      </Text>
      <Text
        style={[
          colorButtonStyle,
          getBackgroundColor({status: yellow, text: 'Y'}),
        ]}>
        Y
      </Text>
      <Text
        style={[
          colorButtonStyle,
          getBackgroundColor({status: red, text: 'R'}),
        ]}>
        R
      </Text>
      <Text style={[colorButtonStyle]}>NA</Text>
    </>
  );
};
const ReportCard = () => {
  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 6,
            paddingTop: 13,
            paddingBottom: 18,
          }}>
          <View>
            <Text style={{fontSize: 16}}>{item?.title}</Text>
            {item?.desc && <Text style={{color: 'grey'}}>{item?.desc}</Text>}
          </View>
          <Ionicons name="stats-chart" size={22} color={'#7AA874'} />
        </View>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 13,
              paddingBottom: 23,
              borderBottomWidth: 0.5,
              borderBottomColor: 'grey',
              marginHorizontal: 13,
            }}>
            {item.status === 'green' && <ColorComponents green={'green'} />}
            {item.status === 'red' && <ColorComponents red={'red'} />}
            {item.status === 'yellow' && <ColorComponents yellow={'yellow'} />}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingVertical: 18,
            }}>
            <Text style={{fontSize: 16}}>Comment</Text>
            <Text style={{borderRightWidth: 1}} />
            <MaterialIcons name="upgrade" size={23} />
            <Text style={{borderLeftWidth: 1}} />
            <Text style={{fontSize: 16}}>1 Detail</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={flatlistKeyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ReportCard;
