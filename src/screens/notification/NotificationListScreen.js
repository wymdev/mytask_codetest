import React from 'react';
import { View, Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import styles from './Style';

const NotificationListScreen = ({ navigation }) => {
    return (
        <View>
            <CustomHeader showNotification={true} />

            <View style={{marginHorizontal:20,}}>
                <Text style={styles.title}>Notifications</Text>
                <NotificationCard
                    title="Reminder"
                    detail="You have a pending task about to complete"
                    time="today, 15:34:34"
                />
                <NotificationCard
                    title="Feedback received"
                    detail="You task got a review. Please view your feedback"
                    time="today, 15:34:34"
                />
            </View>
        </View>
    );
};

export default NotificationListScreen;
