import { StyleSheet } from 'react-native';

import { theme } from '../../lib/theme';

export const styles = StyleSheet.create({
  unsafeArea: {
    backgroundColor: theme.primaryBgColor,
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
});
