import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {setModalAction} from '.';
import {GlobalModalType} from '../../../shared/types/globalModalType';

export const useGlobalReducer = () => {
  const dispatch = useDispatch();
  const {modal} = useAppSelector(state => state.globalReducer);

  const closeModal = () => {
    dispatch(
      setModalAction({
        ...modal,
        visible: false,
      }),
    );
  };

  const setModal = (currentModal: GlobalModalType) => {
    dispatch(setModalAction(currentModal));
  };

  return {
    modal,
    closeModal,
    setModal,
  };
};
