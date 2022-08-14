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
      <Form className={style.form}>
        <label className={style.label} htmlFor="contactName">
          Name
        </label>
        <Field
          className={style.input}
          id="contactName"
          type="text"
          name="name"
          pattern={NAME_MATCH}
          autoComplete="off"
          placeholder="Name"
          required
        />
        <FormError name="name" />
        <label className={style.label} htmlFor="phone">
          Number
        </label>
        <Field
          className={style.input}
          id="phone"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Number"
          autoComplete="off"
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
