import { StyleSheet } from 'react-native';

import { theme } from '@shared/lib/theme';

export const styles = StyleSheet.create({
  playerContainer: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: theme.secondaryBgColor,
    borderStyle: 'solid',
    gap: 8,
  },
});
