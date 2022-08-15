import { Formik } from 'formik';
import {
  FormError,
  NAME_MATCH,
  SignupSchema,
} from 'components/ContactForm/ContactForm';
import { EditButton, FormBlock, Input, Label } from './ModalForm.styled';
import Loader from 'components/Loader';

const ModalForm = ({ onSubmit, nameValue, phoneValue, isUpdaiting }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    // actions.setSubmitting(false);
    // actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: nameValue,
        phone: phoneValue,
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <FormBlock>
        <Label htmlFor="contactName">Name</Label>
        <Input
          id="contactName"
          type="text"
          name="name"
          pattern={NAME_MATCH}
          autoComplete="off"
          placeholder="Name"
          required
        />
        <FormError name="name" />
        <Label htmlFor="phone">Number</Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Number"
          autoComplete="off"
          required
        />
        <FormError name="number" />
        <EditButton type="submit">
          {isUpdaiting ? <Loader /> : 'Edit'}
        </EditButton>
      </FormBlock>
    </Formik>
  );
};

export default ModalForm;
