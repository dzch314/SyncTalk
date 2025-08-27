import { useState, useMemo } from 'react';
import { View } from 'react-native';

import { MessagesList } from '@entities/MessagesList';
import { Player } from '@entities/Player';
import { generateMessageTimeline } from '@shared/lib/generateMessageTimeline';
import { SafeArea } from '@shared/ui/SafeArea';

import { styles } from './styles';
import md from '../../../../../assets/metadata.sample.json';

export const MainScreen = () => {
  const { messages, messageMap } = useMemo(() => generateMessageTimeline(md), []);
  const [activeIndex, setActiveIndex] = useState(-2);

  return (
    <SafeArea>
      <View style={styles.container}>
        <MessagesList activeIndex={activeIndex} messages={messages} />
        <Player messages={messages} messageMap={messageMap} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </View>
    </SafeArea>
  );
};
