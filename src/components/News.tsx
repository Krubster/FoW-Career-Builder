import IconChevronRight from '../icons/IconChevronRight';
import css from '../css/components/News.module.css';

const News = () => {
  return (
    <div className={css.container}>
      <div className={css.heading}>Latest updates</div>
      <div className={css.item}>
        <span className={css.itemIcon}>
          <IconChevronRight
            classes="icon--small"
            name="right chevron icon"
            nameSlug="right-chevron-icon"
          />
        </span>
        <div className={css.itemDate}>14-11-2023</div>
        <span className={css.itemText}>
          Added https support and updated content
        </span>
      </div>
      <div className={css.item}>
        <span className={css.itemIcon}>
          <IconChevronRight
            classes="icon--small"
            name="right chevron icon"
            nameSlug="right-chevron-icon"
          />
        </span>
        <div className={css.itemDate}>21-04-2023</div>
        <span className={css.itemText}>Career builder is available</span>
      </div>
    </div>
  );
};

export default News;
