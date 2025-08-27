import { TouchableOpacity } from 'react-native';
import type { FC } from 'react';
import type { SvgProps } from 'react-native-svg';

import { styles } from './styles';

interface ButtonProps {
  Icon: FC<SvgProps>;
  onPress?: () => void;
  disabled?: boolean;
}

export const Button = ({ Icon, onPress, disabled = false }: ButtonProps) => {
  const disabledStyles = disabled ? styles.disabled : {};

  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        ...styles.buttonContainer,
        ...disabledStyles,
      }}
      onPress={onPress}
    >
      <Icon width={20} height={20} color={styles.buttonContent.color} />
    </TouchableOpacity>
  );
};
