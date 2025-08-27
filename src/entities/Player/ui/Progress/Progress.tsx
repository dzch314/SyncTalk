import { memo } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { useProgress } from 'react-native-track-player';
import { formatTime } from '@shared/lib/formatTime';

export const Progress = memo(() => {
  const { position, duration } = useProgress(100);

  return (
    <View>
      <View style={styles.progressBarOuter}>
        <View style={[styles.progressBarInner, { width: `${Math.floor((position / duration) * 100)}%` }]} />
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.timeText}>{formatTime(position)}</Text>
        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
});
