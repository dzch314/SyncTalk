import { StyleSheet } from 'react-native';

import { theme } from '@shared/lib/theme';

export const styles = StyleSheet.create({
  progressBarOuter: { height: 4, backgroundColor: '#e3e6ef', borderRadius: 4, overflow: 'hidden' },
  progressBarInner: { height: 4, backgroundColor: theme.secondaryBgColor },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  timeText: { color: theme.secondaryBgColor, fontSize: 12 },
});
