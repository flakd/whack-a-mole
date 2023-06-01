import React from 'react';
import {View, Text, Platform} from 'react-native';
import styles from '../styles';

const TimeScore = (props) => {
  return (
    <View style={styles.timeScore}>
      <View
        style={{
          //backgroundColor: 'yellow',
          alignItems: 'center',
        }}
      >
        <Text style={styles.score}>TIME:</Text>
      </View>
      <View
        style={[
          {
            //backgroundColor: 'blue',
            width: 55,
          },
          Platform.OS === 'web' && {alignItems: 'center'},
        ]}
      >
        <Text
          style={[
            styles.score,
            {display: props.showTimeLeft ? 'flex' : 'none'},
          ]}
        >
          {' '}
          {props.timeLeft}
        </Text>
      </View>
      <View
        style={{
          //backgroundColor: 'red',
          alignItems: 'center',
        }}
      >
        <Text style={styles.score}>{'  '}SCORE:</Text>
      </View>
      <View
        style={[
          {
            //backgroundColor: 'blue',
            minWidth: 60,
          },
          Platform.OS === 'web' && {alignItems: 'center'},
        ]}
      >
        <Text style={styles.score}> {props.score}</Text>
      </View>
    </View>
  );
};

export default TimeScore;
