import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ButtonsBlock, Line } from './ContactListItem.styled';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsSlice';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import ModalForm from 'components/ModalForm';
import { CloseButton } from 'components/Button/Button.styled';

const ContactListItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [showModal, setshowModal] = useState(false);

  const handleShowModal = () => {
    setshowModal(!showModal);
  };

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id, ...fields });
      setshowModal(!showModal);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Line>
        {name}: <span>{phone}</span>
      </Line>
      <ButtonsBlock>
        <Button click={() => handleShowModal()}>Edit</Button>
        <Button click={() => deleteContact(id)} isDeleting={isDeleting}>
          {isDeleting ? <Loader /> : 'Delete'}
        </Button>
      </ButtonsBlock>
      {showModal && (
        <Modal onClose={handleShowModal}>
          <CloseButton onClick={handleShowModal}>
            <AiOutlineCloseCircle size={20} />
          </CloseButton>
          <ModalForm
            nameValue={name}
            phoneValue={phone}
            onSubmit={handleUpdateContact}
          />
        </Modal>
      )}
    </>
  );
};

export default ContactListItem;
