import { ComponentPropsWithoutRef } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { EmphasizedModalContainer } from './components/EmphasizedModalContainer';
import { EmphasizedModalContent } from './components/EmphasizedModalContent';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
} & ComponentPropsWithoutRef<'div'>;

export const Modal = (props: ModalProps) => {
  const { children, isOpen, onRequestClose } = props;

  const ref = useOnclickOutside(() => {
    onRequestClose();
  });

  return isOpen ? (
    <div>
      <EmphasizedModalContainer>
        <EmphasizedModalContent>
          <div ref={ref}>{children}</div>
        </EmphasizedModalContent>
      </EmphasizedModalContainer>
    </div>
  ) : null;
};
