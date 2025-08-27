import { StyleSheet } from 'react-native';

import { theme } from '@shared/lib/theme';

export const styles = StyleSheet.create({
  messageContainer: { marginBottom: 16 },
  name: { color: theme.primaryTextColor, marginBottom: 8, fontSize: 16, fontWeight: '500' },
  message: { backgroundColor: theme.inverterPrimaryBgColor, borderRadius: 16, padding: 16 },
  activeMessage: { backgroundColor: theme.secondaryBgColor },
  messageText: { color: theme.secondaryTextColor, fontSize: 20, fontWeight: '700' },
  activeText: { fontWeight: '900' },
});
