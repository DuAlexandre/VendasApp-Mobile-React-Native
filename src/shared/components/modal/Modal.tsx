import { Alert, Modal as ModalReact } from 'react-native';
import { ModalProps as ModalPropsNative } from 'react-native/types';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';

interface ModalProps extends ModalPropsNative {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}>
      <ContainerModal>
        <Text
          margin="16px"
          type={textTypes.PARAGRAPH_BOLD}
          color={theme.colors.mainTheme.primary}>
          {title}
        </Text>
        <Text>{text}</Text>
        <Button title="OK" onPress={onCloseModal} />
        <IconCloseModal name="cross" onPress={onCloseModal} />
      </ContainerModal>
    </ModalReact>
  );
};

export default Modal;
