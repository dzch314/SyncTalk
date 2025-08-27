import { memo, useEffect, useRef } from 'react';
import { FlatList } from 'react-native';

import type { TimelinedMessage } from '@shared/lib/generateMessageTimeline';

import { Message } from '../Message/Message';
import { styles } from './styles';

interface MessagesListProps {
  messages: TimelinedMessage[];
  activeIndex: number;
}

export const MessagesList = memo(({ messages, activeIndex }: MessagesListProps) => {
  const flatListRef = useRef<FlatList<TimelinedMessage>>(null);

  useEffect(() => {
    if (activeIndex > 0) {
      flatListRef?.current?.scrollToIndex({ animated: true, index: Math.trunc(activeIndex / 2), viewPosition: 1 });
    }
  }, [activeIndex]);

  return (
    <FlatList
      style={styles.messagesList}
      ref={flatListRef}
      data={messages.filter((msg) => msg.type !== 'pause')}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => (
        <Message isActive={index === activeIndex / 2} name={item?.name ?? ''} message={item?.message ?? ''} />
      )}
    />
  );
});
