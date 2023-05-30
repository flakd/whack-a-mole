import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Square from './Square';

const GameBoard = (props) => {
  const time = 60;
  const [timeLeft, setTimeLeft] = useState(time);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!timeLeft) return;
    const timerId = setInterval(() => {
      //happens every 1 sec/1000ms
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const squareArray = Array(12);
  for (let i = 0; i < squareArray.length; i++) {
    squareArray[i] = i;
  }

  const addToScore = () => {
    console.log('prev score: ', score);
    setScore((prevScore) => prevScore + 1);
    console.log('post score: ', score);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/background.png')}
    >
      <Text style={styles.header}>Whack-a-mole</Text>
      <Text style={styles.score}>TIME: {timeLeft}</Text>
      <Text style={styles.score}>SCORE: {score}</Text>
      <View style={styles.game}>
        {squareArray.map((square) => (
          <Square
            key={square}
            id={square}
            time={time}
            addToScore={addToScore}
          ></Square>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  game: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingTop: 50,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    marginTop: 5,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  score: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 30,
    marginBottom: 5,
    marginTop: 5,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: -3,
  },
});
export default GameBoard;
