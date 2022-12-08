import style from './InputSection.module.css';

export const InputSection = ({ inputValues, onChange, onFormSubmit }) => {
  const onSubmit = evt => {
    evt.preventDefault();
    onFormSubmit(JSON.stringify(inputValues));
  };

  return (
    <div className={style.container}>
      <form id={'form'} onSubmit={onSubmit}>
        <div className={style.inputField}>
          <label htmlFor="inputOne">Text input 1: </label>
          <input
            type={'text'}
            id={'inputOne'}
            name={'inputOne'}
            value={inputValues.inputOne}
            onChange={onChange}
          />
        </div>

        <div className={style.inputField}>
          <label htmlFor="inputTwo">Text input 2: </label>
          <input
            type={'text'}
            id={'inputTwo'}
            name={'inputTwo'}
            value={inputValues.inputTwo}
            onChange={onChange}
          />
        </div>

        <div className={style.inputField}>
          <label htmlFor="checkboxOne">Checkbox 1: </label>
          <input
            type={'checkbox'}
            id={'checkboxOne'}
            name={'checkboxOne'}
            checked={inputValues.checkboxOne}
            onChange={onChange}
          />
        </div>

        <div className={style.inputField}>
          <label htmlFor="checkboxTwo">Checkbox 2: </label>
          <input
            type={'checkbox'}
            id={'checkboxTwo'}
            name={'checkboxTwo'}
            checked={inputValues.checkboxTwo}
            onChange={onChange}
          />
        </div>

        <div className={style.inputField}>
          <label htmlFor="radioOne">Radio 1: </label>
          <input
            type={'radio'}
            id={'radioOne'}
            name={'radio'}
            value={'one'}
            onChange={onChange}
            checked={inputValues.radio === 'one'}
          />
        </div>

        <div className={style.inputField}>
          <label htmlFor="radioTwo">Radio 2: </label>
          <input
            type={'radio'}
            id={'radioTwo'}
            name={'radio'}
            value={'two'}
            onChange={onChange}
            checked={inputValues.radio === 'two'}
          />
        </div>

        <div className={style.inputField}>
          <label htmlFor="radioThree">Radio 3: </label>
          <input
            type={'radio'}
            id={'radioThree'}
            name={'radio'}
            value={'three'}
            onChange={onChange}
            checked={inputValues.radio === 'three'}
          />
        </div>

        <select
          onChange={onChange}
          name={'selectedValue'}
          value={inputValues.selectedValue}
        >
          <option value={'grapefruit'}>Grapefruit</option>
          <option value={'lime'}>Lime</option>
          <option value={'coconut'}>Coconut</option>
          <option value={'mango'}>Mango</option>
        </select>
      </form>
      <button type="submit" form="form">
        Submit
      </button>
    </div>
  );
};
