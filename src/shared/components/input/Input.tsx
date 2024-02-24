import {TextInputProps} from 'react-native/types';
import {View} from 'react-native';
import {ContainerInput, IconEye} from './input.style';
import {DisplayFlexColumn} from '../globalStyles/globalView.style';
import Text from '../text/Text';
import {textTypes} from '../text/textTypes';
import {theme} from '../../themes/theme';
import {useState} from 'react';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({
  title,
  errorMessage,
  secureTextEntry,
  margin,
  ...props
}: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(
    !!secureTextEntry,
  );

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  return (
    <DisplayFlexColumn customMargin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          color={theme.colors.grayTheme.gray100}
          type={textTypes.PARAGRAPH_SMALL_BOLD}>
          {title}
        </Text>
      )}

      <View>
        <ContainerInput
          {...props}
          isError={!!errorMessage}
          secureTextEntry={currentSecure}
          hasSecureTextEntry={secureTextEntry}
        />
        {secureTextEntry && (
          <IconEye
            onPress={handleOnPressEye}
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={20}
          />
        )}
      </View>

      {errorMessage && (
        <Text
          margin="0px 0px 0px 8px"
          color={theme.colors.orangeTheme.orange80}
          type={textTypes.PARAGRAPH_SMALL_BOLD}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
