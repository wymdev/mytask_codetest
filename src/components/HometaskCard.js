import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Style';

const HometaskCard = ({ title, picture, description, completed }) => {
    return (
        <View>
            <View>
                <Text>Completed Tasks</Text>
                <View>
                    <Text>View All</Text>
                    <Text>-</Text>
                </View>
            </View>
        <TouchableOpacity style={styles.cardBodyContainer}>
          <View style={styles.cardContainer}>
            {/* Picture */}
            <Image source={{ uri: picture }} style={styles.picture} />
    
            <View style={styles.contentContainer}>
              {/* Title */}
              <Text style={styles.title}>{title}</Text>
    
              {/* Description */}
              <Text style={styles.description}>{description}</Text>
    
              {/* Completed Badge */}
              {completed && <View style={styles.completedBadge}><Text>Completed</Text></View>}
            </View>
          </View>
        </TouchableOpacity>
        </View>
      );
}

export default HometaskCard