import { StyleSheet } from 'react-native';

import { theme } from '../../lib/theme';

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: theme.secondaryBgColor,
    padding: 10,
    borderRadius: '50%',
  },
  disabled: {
    backgroundColor: theme.inverterPrimaryBgColor,
  },
  buttonContent: {
    color: theme.secondaryTextColor,
  },
});
