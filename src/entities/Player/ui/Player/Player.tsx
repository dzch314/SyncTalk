import { memo, useEffect } from 'react';
import { View } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import type { TimelinedMessage, MessageMap } from '@shared/lib/generateMessageTimeline';

import { Controls } from '../Controls/Controls';
import { Progress } from '../Progress/Progress';
import { styles } from './styles';

interface PlayerProps {
  messages: TimelinedMessage[];
  messageMap: MessageMap;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

async function setupPlayer() {
  await TrackPlayer.setupPlayer();

  await TrackPlayer.add([
    {
      url: require('../../../../../assets/sample.mp3'),
      title: 'untitled',
      artist: 'unknown',
    },
  ]);
}

export const Player = memo(({ messages, messageMap, activeIndex, setActiveIndex }: PlayerProps) => {
  useEffect(() => {
    setupPlayer();
  }, []);

  return (
    <View style={styles.playerContainer}>
      <Progress />
      <Controls messages={messages} messageMap={messageMap} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </View>
  );
});
