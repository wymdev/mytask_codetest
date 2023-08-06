import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ScheduleFilter = () => {
  const [activeOption, setActiveOption] = useState('Daily');

  const handleOptionPress = (option) => {
    setActiveOption(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.optionButton,
          activeOption === 'Daily' && { backgroundColor: '#0777CD' },
        ]}
        onPress={() => handleOptionPress('Daily')}
      >
        <Text
          style={[styles.optionText, activeOption === 'Daily' && { color: 'white' }]}
        >
          Daily
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          activeOption === 'Weekly' && { backgroundColor: '#0777CD' },
        ]}
        onPress={() => handleOptionPress('Weekly')}
      >
        <Text
          style={[styles.optionText, activeOption === 'Weekly' && { color: 'white' }]}
        >
          Weekly
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          activeOption === 'Monthly' && { backgroundColor: '#0777CD' },
        ]}
        onPress={() => handleOptionPress('Monthly')}
      >
        <Text
          style={[styles.optionText, activeOption === 'Monthly' && { color: 'white' }]}
        >
          Monthly
        </Text>
      </TouchableOpacity>

      <Feather name="sliders" size={19} color="gray" style={[styles.listIcon, { paddingRight: 3 }]} />
      <Text style={styles.optionText}>
        List
      </Text>
    </View>
  );
};

export default ScheduleFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F7FA',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    width: 70, // Set the desired width for each TouchableOpacity
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 12,
    color: 'gray',
  },
  listIcon: {
    marginLeft: 'auto',
  },
});
