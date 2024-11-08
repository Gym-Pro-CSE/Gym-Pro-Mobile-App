import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

function PieChartCard({value, title, reps, time}) {
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    return (
        <View style={styles.pieChartContainer}>
            <CircularProgress
                value={value}
                valueSuffix="%"
                radius={60}
                duration={500}
                progressValueColor={'white'}
                maxValue={100}
                title={title}
                titleFontSize={12}
                titleColor={'#E2F163'}
                activeStrokeColor={'#E2F163'}
                inActiveStrokeWidth={15}
                activeStrokeWidth={5}
            />
            <View style={styles.statContainer}></View>
            {reps !== undefined && (
                <View style={styles.statsRow}>
                    <Icon name="ios-walk-outline" size={16} color="#E2F163" style={styles.icon} />
                    <Text style={styles.stats}>Reps: {reps}</Text>
                </View>
            )}
            <View style={styles.statsRow}>
                <Icon name="ios-stopwatch-outline" size={16} color="#E2F163" style={styles.icon} />
                <Text style={styles.stats}>
                    Time: {time < 60 ? `${time}s` : formatTime(time)}
                </Text>
            </View>
            <View/>
        </View>
    );
};

export default PieChartCard;

const styles = StyleSheet.create({
    pieChartContainer: {
        width: 140,
        height: 190,
        borderRadius: 30,
        backgroundColor: '#101010',
        margin: 2.5,
        padding: 10,
        alignItems: 'center',
    },
    stats: {
        color: '#fff',
        fontSize: 12,
    },
    statContainer: {
        paddingTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    icon: {
        marginRight: 5,
    },

});