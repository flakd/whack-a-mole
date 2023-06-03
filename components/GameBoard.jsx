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
import {Audio} from 'expo-av';
import Square from './Square';
import TimeScore from './TimeScore';
import ButtonBox from './ButtonBox';
import GameOverModal from './GameOverModal';
import GamePausedModal from './GamePausedModal';
import RoundCompletedModal from './RoundCompletedModal';
import Moles from './Moles';
//import styles from '../styles';

const GameBoard = (props) => {
  const roundSettings = props.settings[1];
  const startTime = roundSettings.startTime;
  const roundNum = roundSettings.key;

  const [timeLeft, setTimeLeft] = useState(startTime);
  const [blinkCount, setBlinkCount] = useState(0);
  const [showTimeLeft, setShowTimeLeft] = useState(true);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRoundOver, setIsRoundOver] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [isPauseModalVisible, setIsPauseModalVisible] = useState(false);

  useEffect(() => {
    if (!isGamePaused) {
      if (timeLeft > 0) {
        const timerId = setInterval(() => {
          if (blinkCount % 5 === 0) {
            //happens every 1 sec/1000ms
            setTimeLeft(timeLeft - 1);
          }
          setBlinkCount((prevBlinkCount) => prevBlinkCount + 1);
        }, 200);
        if (timeLeft < props.settings.timerBlink) {
          setShowTimeLeft((showTimeLeft) => !showTimeLeft);
        }
        return () => clearInterval(timerId);
      } else if (timeLeft === 0) {
        setIsRoundOver(true);
      }
    }
  }, [timeLeft, isGamePaused, isRoundOver, blinkCount]);

  const addToScore = () => {
    console.log('prev score: ', score);
    setScore((prevScore) => prevScore + 1);
    console.log('post score: ', score);
  };

  const playSound = async (soundName) => {
    console.log('soundName: ', soundName);
    const soundObject = new Audio.Sound();
    try {
      //let path = MySounds[index - 1];
      const path = props.sounds[soundName];

      if (soundName === 'whack') console.log(path);
      await soundObject.loadAsync(path);

      // Your sound is playing below!
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
            //}, playbackStatus.durationMillis);
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GamePausedModal
        isModalVisible={isPauseModalVisible}
        setIsGamePaused={setIsGamePaused}
        setIsModalVisible={setIsPauseModalVisible}
      />

      <RoundCompletedModal
        isRoundOver={isRoundOver}
        setIsRoundOver={setIsRoundOver}
        setTimeLeft={setTimeLeft}
        startTime={startTime}
        roundNum={roundNum}
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
          setIsModalVisible={setIsPauseModalVisible}
        />
        {/* BUTTON BOX */}

        <TimeScore
          timeLeft={timeLeft}
          score={score}
          showTimeLeft={showTimeLeft}
        />

        {/* MOLES */}
        <Moles
          settings={roundSettings}
          isRoundOver={isRoundOver}
          setIsRoundOver={setIsRoundOver}
          addToScore={addToScore}
          playSound={playSound}
        />
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    //flexWrap: 'wrap',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerWeb: {
    flex: 1,
    //flexDirection: 'column',
    //flexWrap: 'wrap',
    //width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    //alignSelf: 'center',
    //paddingTop: 70,
    //marginLeft: 'auto',
    //marginRight: 'auto',
  },
});
export default GameBoard;
