import { TouchableOpacity } from 'react-native';
import type { FC } from 'react';
import type { SvgProps } from 'react-native-svg';

import { styles } from './styles';

interface ButtonProps {
  Icon: FC<SvgProps>;
  onPress?: () => void;
}

export const Button = ({ Icon, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Icon width={20} height={20} color={styles.buttonContent.color} />
    </TouchableOpacity>
  );
};
