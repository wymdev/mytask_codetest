import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './Style'

const ImageCard = ({ picture }) => {
  return (
    <View style={styles.ImageCard}>
        <Image
            source={picture}
            resizeMode="contain"
            style={styles.taskInstructionPhoto}
        />
    </View>
  )
}

export default ImageCard