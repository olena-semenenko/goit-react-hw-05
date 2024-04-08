import css from './ReviewsList.module.css';
const ReviewsList = ({ reviews }) => {
  // author
  // :
  // "Manuel São Bento"

  // author_details
  // :
  // {avatar_path: null, name: "Manuel São Bento", ratin…}
  // content
  // :
  // "FULL SPOILER-FREE REVIEW @ https://talkingfilms.net/dune-part-two-review-the-new-generational-epitome-of-sci-fi-epics/\r\n\r\n\"Dune: Part Two surpasses even the highest expectations, establishing itself as an unquestionable technical masterpiece of blockbuster filmmaking.\r\n\r\nWith a narrative that deepens the complex web of political relationships, power, faith, love, and destiny, it not only provides a breathtaking audiovisual spectacle, thanks to the genius of Denis Villeneuve, Greig Fraser, and Ha..."
  // created_at
  // :
  // "2024-02-22T21:00:01.602Z"
  // id
  // :
  // "65d7b5d191f0ea0185e69bac"
  // updated_at
  // :
  // "2024-02-22T21:00:01.712Z"
  // url
  // :
  // "https://www.themoviedb.org/review/65d7b5d191f0ea0185e69bac"
  // new entry
  // :

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
