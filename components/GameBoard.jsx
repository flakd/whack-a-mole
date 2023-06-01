import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import Square from './Square';

const GameBoard = (props) => {
  const time = 10;
  const [timeLeft, setTimeLeft] = useState(time);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [justPaused, setJustPaused] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!isGamePaused) {
      if (timeLeft > 0) {
        const timerId = setInterval(() => {
          //happens every 1 sec/1000ms
          setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(timerId);
      } else if (timeLeft === 0) {
        setIsGameOver(true);
      }
    }
  }, [timeLeft, isGamePaused, isGameOver]);

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
    <>
      <Modal
        id='gamePausedModal'
        visible={isModalVisible}
        transparent={true}
        style={styles.modal}
      >
        <View style={styles.modal}>
          <View style={styles.continueButtonBox}>
            <Text style={styles.paused}>GAME</Text>
            <Text style={styles.paused}>PAUSED</Text>
            <TouchableOpacity
              style={[styles.pauseButton, {backgroundColor: 'green'}]}
              onPress={() => {
                console.log('wtf');
                setIsGamePaused(false);
                setIsModalVisible(false);
              }}
            >
              <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        id='gameOverModal'
        visible={isGameOver}
        transparent={true}
        style={styles.modal}
      >
        <View style={styles.modal}>
          <View style={styles.continueButtonBox}>
            <Text style={styles.paused}>GAME</Text>
            <Text style={styles.paused}>OVER</Text>
            <TouchableOpacity
              style={[styles.pauseButton, {backgroundColor: 'green'}]}
              onPress={() => {
                console.log('Game Over Pressed');
                setIsGameOver(false);
                setTimeLeft(10);
                //setIsModalVisible(false);
              }}
            >
              <Text style={styles.buttonText}>START</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ImageBackground
        style={styles.container}
        source={require('../assets/background.png')}
      >
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={[
              styles.pauseButton,
              isGamePaused
                ? {backgroundColor: '#5fb8e0'}
                : {backgroundColor: 'blue'},
            ]}
            disabled={isGamePaused}
            onPress={() => {
              setIsGamePaused(true);
              setIsModalVisible(true);
            }}
          >
            <Text
              style={[
                styles.buttonText,
                isGamePaused ? {color: '#92e8e0'} : {color: 'white'},
              ]}
            >
              PAUSE
            </Text>
          </TouchableOpacity>
        </View>
        {/* //END ButtonBox  */}

        <Text style={styles.header}>Whack-a-mole</Text>
        <Text style={styles.score}>
          TIME: {timeLeft} {'  '} SCORE: {score}
        </Text>
        <View style={[styles.game]}>
          {squareArray.map((square) => (
            <Square
              key={square}
              id={square}
              time={time}
              isGameOver={isGameOver}
              setIsGameOver={setIsGameOver}
              isGamePaused={isGamePaused}
              addToScore={addToScore}
            ></Square>
          ))}
        </View>
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
  game: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',

    marginTop: 280,
    position: 'absolute',
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
  gameWeb: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 400,
    justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',

    //marginTop: 280,
    //position: 'absolute',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0 , 0.5)',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 'auto',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  paused: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 25,
    marginBottom: 5,
    marginTop: 0,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    top: 0,
  },
  score: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 30,
    marginBottom: 5,
    marginTop: 5,
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 2,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0 , 0.5)',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  continueButtonBox: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    //alignItems: 'center',
    //alignSelf: 'center',
    margin: 'auto',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    //position: 'absolute',
    top: -170,
  },
  continueButton: {
    //zIndex: 99,
    //flexDirection: 'row',
    //margin: 10,
    //width: 120,
    //alignSelf: 'center',
    //position: 'absolute',
    //top: 40,
    //borderRadius: 10,
    height: 35,
    minWidth: 70,
    borderRadius: 10,
    margin: 5,
    padding: 5,
    top: 40,
  },
  buttonBox: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    //alignSelf: 'center',
    position: 'absolute',
    top: 30,
    left: 220,
  },
  pauseButton: {
    borderRadius: 10,
    height: 35,
    minWidth: 70,
    margin: 5,
    padding: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    //alignItems: 'center',
    //justifyContent: 'center',
    textAlign: 'center',
    //verticalAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
export default GameBoard;
