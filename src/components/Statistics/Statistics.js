import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}> {title} </h2>}
      <ul className={css.list}>
        {stats.map((stat) => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
