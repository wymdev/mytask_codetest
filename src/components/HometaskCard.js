import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import styles from './Style';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {
    id: 1,
    rating: '4.2',
    image: '',
    title: 'Floor Cleaning',
    level: 'Main Lobby',
    status: 'Completed',
  },
  {
    id: 2,
    rating: '4.2',
    image: '',
    title: 'Glass Cleaning',
    level: 'Main Lobby',
    status: 'Completed',
  },
  {
    id: 3,
    rating: '4.2',
    image: '',
    title: 'Carpet Cleaning',
    level: 'Main Lobby',
    status: 'Completed',
  },
];

const flatlistKeyExtractor = (_, index) => index.toString();

const HometaskCard = () => {
  const navigation = useNavigation();
  const handleViewAll = () => {
    navigation.navigate('CompletedTasksDetail');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.cardBodyContainer}>
        <View style={styles.cardContainer}>
          {/* Picture */}
          <View style={styles.ratingContainer}>
            <AntDesign name={'star'} color={'gold'} size={10} />
            <Text style={{marginLeft: 3, fontSize: 10, fontWeight: 'bold'}}>
              {item?.rating}
            </Text>
          </View>
          <Image
            source={require('../assets/floorcleaning.png')}
            style={styles.picture}
            resizeMode={'cover'}
          />

          <View style={styles.contentContainer}>
            {/* Title */}
            <Text style={styles.title}>{item?.title}</Text>

            {/* Description */}
            <Text style={styles.description}>{item?.level}</Text>
          </View>
          {/* Completed Badge */}
          {item?.status === 'Completed' && (
            <View style={styles.completedBadge}>
              <Text style={{color: 'green', fontSize: 13}}>{item?.status}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.completedTaskContainer}>
        <Text style={styles.completedTaskTitle}>Completed Tasks</Text>
        <TouchableOpacity
          onPress={handleViewAll}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.viewAllText}>View All</Text>
          <AntDesign name="arrowright" size={18} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={flatlistKeyExtractor}
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: 5,
        }}
      />
    </View>
  );
};

export default HometaskCard;
