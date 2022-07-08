import { useState } from 'react';
import { H5 } from '../../typography/H5';
import { CreateAccount, Login } from '../Account';
import { Button } from '../Button/Button';
import { Modal } from '../Modals/Modal';
import { HeaderContainer, HeaderNav } from './components';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const [modal, setModal] = useState('');

  return (
    <div>
      <HeaderContainer>
        <H5>Flowrspot</H5>
        <HeaderNav>
          <ul>
            <li>Flowers</li>
            <li>Latest Sightings</li>
            <li>Favorites</li>
            <li
              onClick={() => {
                setIsOpen(true);
                setModal('login');
              }}>
              Login
            </li>
            <Button
              variant="rounded-base"
              onClick={() => {
                setIsOpen(true);
                setModal('createAccount');
              }}>
              New Account
            </Button>
          </ul>
        </HeaderNav>
      </HeaderContainer>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        {modal === 'login' ? <Login /> : <CreateAccount />}
      </Modal>
    </div>
  );
};
