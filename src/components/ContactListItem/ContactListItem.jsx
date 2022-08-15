import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
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
  const [updateContact, { isLoading: isUpdaiting }] =
    useUpdateContactMutation();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted successfully!');
    } catch (error) {
      toast.error('Something went wrong. Try again.');
    }
  };

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id, ...fields });
      setShowModal(!showModal);
      toast.success('Contact edited successfully!');
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
        <Button click={handleDelete} isDeleting={isDeleting}>
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
            isUpdaiting={isUpdaiting}
          />
        </Modal>
      )}
    </>
  );
};

export default ContactListItem;
