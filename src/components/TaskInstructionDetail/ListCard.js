import { StyleSheet, Text, View, FlatList , Image, ScrollView} from 'react-native'
import React from 'react'
import styles from './Style';

const data = [
  {
    id: 1,
    picture: '',
    description: 'Please safety signs Wear Appropriate PPE',
  },
  {
    id: 2,
    picture: '',
    description: 'Clear area by removing obstacles',
  },
  {
    id: 3,
    picture: '',
    description: 'Prepare floor cleaning items',
  },
  {
    id: 4,
    picture: '',
    description: 'Please safety signs Wear Appropriate PPE',
  },
  {
    id: 5,
    picture: '',
    description: 'Clear area by removing obstacles',
  },
  {
    id: 6,
    picture: '',
    description: 'Prepare floor cleaning items',
  },

];

const flatlistKeyExtractor = (_, index) => index.toString();

const ListCard = () => {

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={require('../../assets/floorcleaning.png')}
        style={styles.picture}
        resizeMode={'contain'}
      />
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
    
  );

  return (
    <View style={styles.listContainer}>
      {/* <View style={styles.scrollBar} /> */}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={flatlistKeyExtractor}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default ListCard