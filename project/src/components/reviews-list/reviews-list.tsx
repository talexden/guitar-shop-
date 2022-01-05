import Review from '../review/review';

function  ReviewsList(): JSX.Element {
  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <a className="button button--red-border button--big reviews__sumbit-button" href="#top">Оставить отзыв</a>
      <div>
        <Review />
        <Review />
        <Review />
      </div>
      <button className="button button--medium reviews__more-button">Показать еще отзывы</button>
      <a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
    </section>
  );
}

export default  ReviewsList;
