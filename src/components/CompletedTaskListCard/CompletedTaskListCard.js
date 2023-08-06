import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Style';

const data = [
  {
    id: 1,
    rating: '4.2',
    image: '',
    title: 'Floor Cleaning',
    level: 'Main Lobby',
  },
  {
    id: 2,
    rating: '4.2',
    image: '',
    title: 'Door Cleaning',
    level: 'Level 2 Auditorium',
  },
  {
    id: 3,
    rating: '4.2',
    image: '',
    title: 'Glass Cleaning',
    level: 'Level 1 Office Room',
  },
  {
    id: 4,
    rating: '4.2',
    image: '',
    title: 'Carpet Cleaning',
    level: 'Level 3 Office Room',
  },
];

const flatlistKeyExtractor = (_, index) => index.toString();

const CompletedTaskListCard = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardBodyContainer}>
          <View style={styles.ratingContainer}>
            <AntDesign name={'star'} color={'gold'} size={10} />
            <Text style={{marginLeft: 3, fontSize: 10, fontWeight: 'bold'}}>
              {item?.rating}
            </Text>
          </View>
          <Image
            source={require('../../assets/floorcleaning.png')}
            resizeMode={'cover'}
            style={{
              width: 100,
              height: 80,
              position: 'relative',
              marginLeft: 10,
              borderRadius: 20,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {item?.title}
            </Text>
            <Text style={{fontSize: 16}}>{item?.level}</Text>
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
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: 30,
          paddingTop: 15,
        }}
      />
    </View>
  );
};

export default CompletedTaskListCard;
