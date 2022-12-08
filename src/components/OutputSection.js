import style from './OutputSection.module.css';

export const OutputSection = ({ formData }) => {
  const renderData = () => {
    const formObject = JSON.parse(formData);
    const items = Object.entries(formObject).map(value => {
      return (
        <p key={value[0]}>
          {value[0]}: {String(value[1])}
        </p>
      );
    });
    return items;
  };

  return (
    <div className={style.container}>{formData ? renderData() : null}</div>
  );
};
