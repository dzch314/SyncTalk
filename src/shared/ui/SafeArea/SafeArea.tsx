import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { ReactNode } from 'react';

import { styles } from './styles';

interface SafeAreaProps {
  children: ReactNode;
}

export const SafeArea = ({ children }: SafeAreaProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.unsafeArea}>
      <View
        style={{
          ...styles.safeAreaContainer,
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        }}
      >
        {children}
      </View>
    </View>
  );
};
