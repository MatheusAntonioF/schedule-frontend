import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { FiX } from 'react-icons/fi';

import {
  Wrapper,
  Modal as StyledModal,
  ModalHead,
  Title,
  ModalBody,
  BackgroundModal,
} from './styles';

import { darkTheme } from '../../styles/themes/dark';

interface IModalProps {
  title: string;
  headIcon: React.ComponentType<IconBaseProps>;
  color?: keyof typeof darkTheme.pallete;
  onClose?: () => void;
  width?: string;
}

const Modal: React.FC<IModalProps> = ({
  width = '23rem',
  title,
  headIcon: HeadIcon,
  color = 'primary',
  onClose,
  children,
}) => {
  return (
    <Wrapper>
      <StyledModal width={width}>
        <ModalHead color={color}>
          <div className="info">
            <div className="wrapper-icon">
              <HeadIcon size={25} />
            </div>
            <Title>{title}</Title>
          </div>
          <button
            className="close"
            type="button"
            onClick={() => onClose && onClose()}
          >
            <FiX size={25} />
          </button>
        </ModalHead>
        <ModalBody>{children}</ModalBody>
      </StyledModal>
      <BackgroundModal />
    </Wrapper>
  );
};

export { Modal };
