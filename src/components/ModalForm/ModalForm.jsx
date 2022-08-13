// import { useUpdateContactMutation } from 'redux/contactsSlice';
import { Field, Form, Formik } from 'formik';
import style from 'components/ContactForm/ContactForm.module.css';
import {
  FormError,
  NAME_MATCH,
  SignupSchema,
} from 'components/ContactForm/ContactForm';
import Button from 'components/Button';

const ModalForm = ({ onSubmit, nameValue, phoneValue }) => {
  //   const [updateContact] = useUpdateContactMutation();

  //   const handleUpdateContact = () => {};

  return (
    <Formik
      initialValues={{
        name: nameValue,
        number: phoneValue,
      }}
      validationSchema={SignupSchema}
    >
      <Form className={style.form} onSubmit={onSubmit}>
        <label className={style.label} htmlFor="name">
          Name
        </label>
        <Field
          className={style.input}
          id="name"
          type="text"
          name="name"
          pattern={NAME_MATCH}
          placeholder="Name"
          required
        />
        <FormError name="name" />
        <label className={style.label} htmlFor="number">
          Number
        </label>
        <Field
          className={style.input}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Number"
          required
        />
        <FormError name="number" />
        <Button className={style.button} type="submit">
          {/* {isPosting ? <Loader /> : 'Add contact'} */}
          Edit
        </Button>
      </Form>
    </Formik>
  );
};

export default ModalForm;
