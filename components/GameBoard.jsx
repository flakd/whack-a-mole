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
import PauseButton from './PauseButton';
import GameOverModal from './GameOverModal';
import GamePausedModal from './GamePausedModal';
import RoundCompletedModal from './RoundCompletedModal';
import Moles from './Moles';
//import styles from '../styles';

const GameBoard = (props) => {
  const [roundNum, setRoundNum] = useState(1);
  const [roundSettings, setRoundSettings] = useState(
    props.settings[roundNum - 1]
  );
  const startTime = roundSettings.startTime;
  const [timeLeft, setTimeLeft] = useState(startTime);
  const [blinkCount, setBlinkCount] = useState(0);
  const [showTimeLeft, setShowTimeLeft] = useState(true);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRoundOver, setIsRoundOver] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [isPauseModalVisible, setIsPauseModalVisible] = useState(false);

  const nextRound = () => {
    //setRoundNum((prevRoundNum) => prevRoundNum + 1);
    setRoundNum(roundNum + 1);
    if (props.settings.length === roundNum) {
      setIsGameOver(true);
    } else {
      //setRoundSettings(props.settings[roundNum - 1]);
      setRoundSettings(props.settings[roundNum]);
      setTimeLeft(startTime);
      playSound('level' + roundNum + 1, (startTime + 1) * 1000);
      //..
    }
  };
  const endGame = () => {
    setIsGameOver(true);
  };

  const startGame = () => {
    setIsGameOver(false);
    setScore(0);
    setRoundNum(1);
  };

  useEffect(() => {
    startGame();
  }, [isGameOver]);

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
        if (timeLeft < roundSettings.timerBlink) {
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

  const playSound = async (soundName, durationMillis) => {
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
          }, durationMillis);
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
        setIsGameOver={setIsGameOver}
      />

      <RoundCompletedModal
        isRoundOver={isRoundOver}
        setIsRoundOver={setIsRoundOver}
        setTimeLeft={setTimeLeft}
        startTime={startTime}
        roundNum={roundNum}
        setRoundNum={setRoundNum}
        nextRound={nextRound}
      />

      <GameOverModal
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        setRoundNum={setRoundNum}
      />

      <ImageBackground
        style={Platform.OS === 'web' ? styles.containerWeb : styles.container}
        source={require('../assets/background.png')}
      >
        <Text style={styles.header}>Whack-a-mole</Text>

        <PauseButton
          isGamePaused={isGamePaused}
          setIsGamePaused={setIsGamePaused}
          setIsModalVisible={setIsPauseModalVisible}
        />

        <TimeScore
          roundNum={roundNum}
          timeLeft={timeLeft}
          score={score}
          showTimeLeft={timeLeft > 0 ? showTimeLeft : true}
        />

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
