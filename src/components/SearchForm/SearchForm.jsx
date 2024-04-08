import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './SearchForm.module.css';
import searchIcon from '/src/images/search-alt-2-svgrepo-com.svg';
import trashCanIcon from '/src/images/trash-bin-trash-svgrepo-com.svg';

const SearchForm = ({ onSubmit }) => {
  const initialValues = {
    searchValue: '',
  };
  const SearchFormSchema = Yup.object().shape({
    searchValue: Yup.string().max(50, 'Too Long!').required('Required'),
  });

  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SearchFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <Field
            className={css.input}
            type="text"
            name="searchValue"
            placeholder="Search movie by title"
          />
          <ErrorMessage name="searchValue" component="span" />
        </label>

        <div className={css.buttons}>
          <button className={css.button} type="submit">
            <img src={searchIcon} alt="searchIcon" />
          </button>
          <button className={css.button} type="reset">
            <img src={trashCanIcon} alt="trashCanIcon" />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchForm;
