import { TouchableOpacityProps } from 'react-native/types';
import {
  ActivityIndicatorButton,
  ButtonDisabled,
  ContainerButton,
  GradientButton,
  SecondaryButton,
} from './button.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({
  title,
  margin,
  type,
  disabled,
  loading,
  onPress,
  ...props
}: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text color={color} type={textTypes.BUTTON_BOLD}>
        {title}
      </Text>
      {loading && <ActivityIndicatorButton color={color} />}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <SecondaryButton {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </SecondaryButton>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ContainerButton {...props} margin={margin} onPress={handleOnPress}>
          <GradientButton
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={[
              theme.colors.purpleTheme.purple80,
              theme.colors.pinkTheme.pink80,
            ]}>
            {renderText(theme.colors.neutralTheme.white)}
          </GradientButton>
        </ContainerButton>
      );
  }
};

export default Button;
