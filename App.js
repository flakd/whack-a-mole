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
const MySettings = [
  {
    key: 1,
    roundName: 'Level 1',
    startTime: 5,
    moleActiveTime: 1200,
    numMoles: 9,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: MySounds.level1,
  },
  {
    key: 2,
    roundName: 'Level 2',
    startTime: 5,
    moleActiveTime: 1100,
    numMoles: 9,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: MySounds.level2,
  },
  {
    key: 3,
    roundName: 'Level 3',
    startTime: 5,
    moleActiveTime: 1000,
    numMoles: 12,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: MySounds.level3,
  },
  {
    key: 4,
    roundName: 'Level 4',
    startTime: 5,
    moleActiveTime: 900,
    numMoles: 15,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: MySounds.level4,
  },
  {
    key: 5,
    roundName: 'Level 5',
    startTime: 5,
    moleActiveTime: 800,
    numMoles: 16,
    timerBlink: 10,
    gameWidth: 400,
    bgMusic: MySounds.level5,
  },
  {
    key: 6,
    roundName: 'Level 6',
    startTime: 5,
    moleActiveTime: 700,
    numMoles: 20,
    timerBlink: 10,
    gameWidth: 400,
    bgMusic: MySounds.level6,
  },
  {
    key: 7,
    roundName: 'Level 7',
    startTime: 5,
    moleActiveTime: 600,
    numMoles: 25,
    timerBlink: 10,
    gameWidth: 500,
    bgMusic: MySounds.level7,
  },
  {
    key: 8,
    roundName: 'Level 8',
    startTime: 5,
    moleActiveTime: 500,
    numMoles: 30,
    timerBlink: 10,
    gameWidth: 400,
    bgMusic: MySounds.level8,
  },
  {
    key: 9,
    roundName: 'Level 9',
    startTime: 5,
    moleActiveTime: 400,
    numMoles: 35,
    timerBlink: 10,
    gameWidth: 400,
    bgMusic: MySounds.level5,
  },
  {
    key: 10,
    roundName: 'Level 10',
    startTime: 5,
    moleActiveTime: 300,
    numMoles: 35,
    timerBlink: 10,
    gameWidth: 400,
    bgMusic: MySounds.level8,
  },
];

const App = () => {
  return (
    <GameBoard
      settings={MySettings}
      sounds={MySounds}
    />
  );
};

export default App;
