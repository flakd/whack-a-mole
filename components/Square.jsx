import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const Square = (props) => {
  const [moleActive, setMoleActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const randomTime = Math.random() * 20000;
  let timerId = null;

  useEffect(() => {
    timerId = setInterval(() => {
      setMoleActive(true);
      setTimeout(() => {
        setMoleActive(false);
      }, 800);
    }, randomTime);
    setTimeout(endGame, props.time * 1000);
  }, []);

  const endGame = () => {
    clearInterval(timerId);
    setIsGameOver(true);
  };

  const onPressMole = () => {
    console.log('moleActive: ', moleActive);
    if (moleActive) {
      props.addToScore();
      setMoleActive(false);
    }
  };

  return (
    <TouchableOpacity onPress={onPressMole}>
      <Image
        source={
          moleActive
            ? require('../assets/mole.png')
            : require('../assets/hole.png')
        }
        style={moleActive ? styles.mole : styles.square}
      ></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    //minWidth: 60,
    //minHeight: 100,
    width: 80,
    height: 80,
    margin: 10,
    //borderColor: 'black',
    //borderStyle: 'solid',
    //backgroundColor: 'red',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
  },
  mole: {
    flex: 1,
    //minWidth: 60,
    //minHeight: 100,
    width: 80,
    height: 80,
    margin: 10,
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
  },
});
export default Square;
