import css from './ReviewsList.module.css';
const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <ul className={css.review_list}>
        {reviews.map(item => (
          <li key={item.author} className={css.review_list_item}>
            <h3>
              Author: <span className={css.review_list_author}>{item.author}</span>
            </h3>
            <a href={item.url} className={css.review_list_link}>
              {item.url}
            </a>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
