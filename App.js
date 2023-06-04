//import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import GameBoard from './components/GameBoard';
const MyMusic = {
  round1: require('./assets/sounds/round1.mp3'),
  round2: require('./assets/sounds/round2.mp3'),
  round3: require('./assets/sounds/round3.mp3'),
  round4: require('./assets/sounds/round4.mp3'),
  round5: require('./assets/sounds/round5.mp3'),
  round6: require('./assets/sounds/round6.mp3'),
  round7: require('./assets/sounds/round7.mp3'),
  round8: require('./assets/sounds/round8.mp3'),
  popOut: require('./assets/sounds/popOut.mp3'),
  whack: require('./assets/sounds/whack.mp3'),
};
const MySettings = [
  {
    key: 1,
    roundName: 'Round 1',
    startTime: 5,
    moleActiveTime: 1200,
    numMoles: 9,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: 'round1',
  },
  {
    key: 2,
    roundName: 'Round 2',
    startTime: 5,
    moleActiveTime: 1100,
    numMoles: 9,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: 'round2',
  },
  {
    key: 3,
    roundName: 'Round 3',
    startTime: 5,
    moleActiveTime: 1000,
    numMoles: 12,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: 'round3',
  },
  {
    key: 4,
    roundName: 'Round 4',
    startTime: 5,
    moleActiveTime: 900,
    numMoles: 15,
    timerBlink: 10,
    gameWidth: 300,
    bgMusic: MyMusic.round4,
  },
  {
    key: 5,
    roundName: 'Round 5',
    startTime: 5,
    moleActiveTime: 800,
    numMoles: 16,
    timerBlink: 10,
    gameWidth: 350,
    bgMusic: MyMusic.round5,
  },
  {
    key: 6,
    roundName: 'Round 6',
    startTime: 5,
    moleActiveTime: 700,
    numMoles: 20,
    timerBlink: 10,
    gameWidth: 400,
    bgMusic: MyMusic.round6,
  },
  {
    key: 7,
    roundName: 'Round 7',
    startTime: 5,
    moleActiveTime: 600,
    numMoles: 25,
    timerBlink: 10,
    gameWidth: 400,
    bgMusic: MyMusic.round7,
  },
  {
    key: 8,
    roundName: 'Round 8',
    startTime: 5,
    moleActiveTime: 500,
    numMoles: 30,
    timerBlink: 10,
    gameWidth: 400,
    bgMusic: MyMusic.round8,
  },
  {
    key: 9,
    roundName: 'Round 9',
    startTime: 5,
    moleActiveTime: 400,
    numMoles: 35,
    timerBlink: 10,
    gameWidth: 500,
    bgMusic: MyMusic.round5,
  },
  {
    key: 10,
    roundName: 'Round 10',
    startTime: 5,
    moleActiveTime: 300,
    numMoles: 42,
    timerBlink: 10,
    gameWidth: 600,
    bgMusic: MyMusic.round8,
  },
];

const App = () => {
  return (
    <GameBoard
      settings={MySettings}
      sounds={MyMusic}
    />
  );
};

export default App;
