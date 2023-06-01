import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import Square from './Square';
import TimeScore from './TimeScore';
import ButtonBox from './ButtonBox';
import GameOverModal from './GameOverModal';
import GamePausedModal from './GamePausedModal';
import RoundCompletedModal from './RoundCompletedModal';
import Moles from './Moles';
import styles from '../styles';

const GameBoard = (props) => {
  const startTime = 10;
  const [timeLeft, setTimeLeft] = useState(startTime);
  const [count, setCount] = useState(0);
  const [showTimeLeft, setShowTimeLeft] = useState(true);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRoundOver, setIsRoundOver] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!isGamePaused) {
      if (timeLeft > 0) {
        const timerId = setInterval(() => {
          if (count % 5 === 0) {
            //happens every 1 sec/1000ms
            setTimeLeft(timeLeft - 1);
          }
          setCount((prevCount) => prevCount + 1);
        }, 200);
        if (timeLeft < 5) {
          setShowTimeLeft((showTimeLeft) => !showTimeLeft);
        }
        return () => clearInterval(timerId);
      } else if (timeLeft === 0) {
        setIsGameOver(true);
      }
    }
  }, [timeLeft, isGamePaused, isGameOver, count]);

  const addToScore = () => {
    console.log('prev score: ', score);
    setScore((prevScore) => prevScore + 1);
    console.log('post score: ', score);
  };

  return (
    <>
      <GamePausedModal
        isModalVisible={isModalVisible}
        setIsGamePaused={setIsGamePaused}
        setIsModalVisible={setIsModalVisible}
      />

      <RoundCompletedModal
        isRoundOver={isRoundOver}
        setIsRoundOver={setIsGameOver}
        setTimeLeft={setTimeLeft}
        startTime={startTime}
      />

      <GameOverModal
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        setTimeLeft={setTimeLeft}
        startTime={startTime}
      />

      <ImageBackground
        style={Platform.OS === 'web' ? styles.containerWeb : styles.container}
        source={require('../assets/background.png')}
      >
        <Text style={styles.header}>Whack-a-mole</Text>

        <ButtonBox
          isGamePaused={isGamePaused}
          setIsGamePaused={setIsGamePaused}
          setIsModalVisible={setIsModalVisible}
        />
        {/* BUTTON BOX */}

        <TimeScore
          timeLeft={timeLeft}
          score={score}
          showTimeLeft={showTimeLeft}
        />

        {/* MOLES */}
        <Moles
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          addToScore={addToScore}
        />
      </ImageBackground>
    </>
  );
};

export default GameBoard;
