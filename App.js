//import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import GameBoard from './components/GameBoard';
const MySounds = {
  level1: require('./assets/sounds/level1.mp3'),
  level2: require('./assets/sounds/level2.mp3'),
  level3: require('./assets/sounds/level3.mp3'),
  level4: require('./assets/sounds/level4.mp3'),
  level5: require('./assets/sounds/level5.mp3'),
  level6: require('./assets/sounds/level6.mp3'),
  level7: require('./assets/sounds/level7.mp3'),
  level8: require('./assets/sounds/level8.mp3'),
  popOut: require('./assets/sounds/popOut.mp3'),
  whack: require('./assets/sounds/whack.mp3'),
};
const MySettings = {
  1: {
    startTime: 15,
    moleActiveTime: 1200,
    numMoles: 9,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: MySounds.level1,
  },
  2: {
    startTime: 15,
    moleActiveTime: 1100,
    numMoles: 9,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: MySounds.level2,
  },
  3: {
    startTime: 15,
    moleActiveTime: 1000,
    numMoles: 12,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: MySounds.level3,
  },
  4: {
    startTime: 15,
    moleActiveTime: 900,
    numMoles: 15,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: MySounds.level4,
  },
  5: {
    startTime: 15,
    moleActiveTime: 800,
    numMoles: 16,
    timerBlink: 10,
    gameWidth: 400,
    bgMusic: MySounds.level5,
  },
};

const App = () => {
  const [settings, setSettings] = useState(MySettings);
  return (
    <GameBoard
      settings={settings}
      sounds={MySounds}
    />
  );
};

export default App;
