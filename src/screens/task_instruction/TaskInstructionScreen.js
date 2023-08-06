import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import HometaskCard from '../../components/HometaskCard';
import styles from './Style';
import ImageCard from '../../components/TaskInstructionDetail/ImageCard';
import ListCard from '../../components/TaskInstructionDetail/ListCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CompleteButton from '../../components/TaskInstructionDetail/CompleteButton';

const TaskInstructionScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <CustomHeader showNotification={false} />
            <ScrollView style={styles.container}>
                <ImageCard picture={require('../../assets/floorcleaning.png')} />
                <View style={{marginLeft:10}}>
                    <View>
                        <Text style={styles.texttitle}>
                            Floor Cleaning
                        </Text>
                        <Text style={styles.textbody}>
                            This task involves Wet mopping using required amount of water
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.texttitle}>
                            Location
                        </Text>
                        <Text style={styles.locationtext}>
                            <AntDesign name='enviromento' color={'#000'} size={15} /> Main Lobby
                        </Text>
                    </View>
                    <Text style={styles.steptitle}>Steps to follow</Text>
                    <ListCard />
                </View>
                <CompleteButton/>
            </ScrollView>
        </View>
    )
}

export default TaskInstructionScreen