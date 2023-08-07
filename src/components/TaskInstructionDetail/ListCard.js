import { StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
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

const ListCard = () => {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
      completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.listContainer}>
      <View
        style={{
          height: '100%',
          width: 6,
          backgroundColor: '#9de86e',
          borderRadius: 8,
          marginRight: 5,
        }}
      >
        <Animated.View
          style={{
            width: 6,
            borderRadius: 8,
            backgroundColor: '#000',
            height: 30,
            transform: [{ translateY: scrollIndicatorPosition }]
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingRight: 14, shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          backgroundColor: '#ffffff',
          borderRadius: 25,
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginBottom:20,
        }}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={height => {
          setCompleteScrollBarHeight(height);
        }}
        onLayout={({
          nativeEvent: {
            layout: { height }
          }
        }) => {
          setVisibleScrollBarHeight(height);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {data.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image
              source={require('../../assets/floorcleaning.png')}
              style={styles.picture}
              resizeMode={'contain'}
            />
            <Text style={styles.itemDescription}>{item.description}</Text>
            <View style={styles.separator}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListCard;
