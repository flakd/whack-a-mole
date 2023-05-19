import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Square from './Square';

const GameBoard = () => {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (!timeLeft) return;
    const timerId = setInterval(() => {
      //happens every 1 sec/1000ms
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <Text>testing</Text>
      <Text>{timeLeft}</Text>
      <View style={styles.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  game: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 380,
    paddingTop: 20,
  },
});
export default GameBoard;
