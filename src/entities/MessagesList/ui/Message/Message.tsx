import { memo } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface MessageProps {
  name: string;
  message: string;
  isActive: boolean;
}

export const Message = memo(({ isActive, name, message }: MessageProps) => (
  <View style={[styles.messageContainer]}>
    <Text style={styles.name}>{name}</Text>
    <View style={[styles.message, isActive && styles.activeMessage]}>
      <Text style={[styles.messageText, isActive && styles.activeText]}>{message}</Text>
    </View>
  </View>
));
