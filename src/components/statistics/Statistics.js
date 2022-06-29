import PropTypes from 'prop-types';
import style from './statistics.module.css';


const Statistics = ({ title, data }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statisticsList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <li
              className={style.item}
              key={id}
              style={{ backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16) }}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;