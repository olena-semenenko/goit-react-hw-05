import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import NotFoundPageImage from '/src/images/NotFoundPage.png';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <img src={NotFoundPageImage} alt="NotFoundPage" />
      <Link className={css.link} to={'/'}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
