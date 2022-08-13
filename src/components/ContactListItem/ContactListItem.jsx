import { useState } from 'react';
import { Line } from './ContactListItem.styled';
import {
  useDeleteContactMutation,
  //   useUpdateContactMutation,
} from 'redux/contactsSlice';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
// import ContactForm from 'components/ContactForm';
import ModalForm from 'components/ModalForm';

const ContactListItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  //   const [updateContact] = useUpdateContactMutation();
  const [showModal, setshowModal] = useState(false);

  const handleShowModal = () => {
    setshowModal(!showModal);
  };
  //   console.log('~ updateContact', updateContact);
  return (
    <>
      <Line>
        {name}: <span>{phone}</span>
      </Line>
      <div>
        <Button click={() => handleShowModal()}>Edit</Button>
        <Button click={() => deleteContact(id)} isDeleting={isDeleting}>
          {isDeleting ? <Loader /> : 'Delete'}
        </Button>
      </div>
      {showModal && (
        <Modal onClose={handleShowModal}>
          <ModalForm nameValue={name} phoneValue={phone} />
        </Modal>
      )}
    </>
  );
};

export default ContactListItem;
