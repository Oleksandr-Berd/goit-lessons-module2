// import StatefulComponentExample from './StatefulComponentExample';
import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import style from './App.module.css';
import { InputSection } from './InputSection';
import { OutputSection } from './OutputSection';

export class App extends React.Component {
  state = {
    inputValues: {
      inputOne: '',
      inputTwo: '',
      checkboxOne: false,
      checkboxTwo: true,
      selectedValue: 'lime',
      radio: '',
    },
    formData: '',
  };

  // onTextInputChangeHandler = evt => {
  //   const fieldName = evt.target.name;
  //   const value = evt.target.value;
  //   this.setState({
  //     inputValues: {
  //       ...this.state.inputValues,
  //       [fieldName]: value,
  //     },
  //   });
  // };

  // onCheckboxInputChangeHandler = evt => {
  //   const fieldName = evt.target.name;
  //   const isChecked = evt.target.checked;
  //   this.setState({
  //     inputValues: {
  //       [fieldName]: isChecked,
  //     },
  //   });
  // };

  onFormSubmit = serializedData => {
    this.setState({ formData: serializedData });
    this.setState({
      inputValues: {
        inputOne: '',
        inputTwo: '',
        checkboxOne: false,
        checkboxTwo: true,
        selectedValue: 'lime',
        radio: '',
      },
    });
  };

  onInputChange = evt => {
    let fieldName = evt.target.name;
    const fieldType = evt.target.type;

    if (fieldName === 'selectedValue') {
      this.setState({
        inputValues: {
          ...this.state.inputValues,
          [fieldName]: evt.target.value,
        },
      });
      return;
    }

    const getValue = () => {
      switch (fieldType) {
        case 'checkbox':
          return evt.target.checked;
        case 'radio':
          return evt.target.value;
        case 'text':
          return evt.target.value;
        default:
          return null;
      }
    };
    const value = getValue();
    this.setState({
      inputValues: {
        ...this.state.inputValues,
        [fieldName]: value,
      },
    });
  };

  // inputHandlers = {
  //   onTextChange: this.onTextInputChangeHandler,
  //   onCheckboxChange: this.onCheckboxInputChangeHandler,
  // };

  render() {
    return (
      <div className={style.wrapper}>
        <InputSection
          inputValues={this.state.inputValues}
          onChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
        />
        <OutputSection formData={this.state.formData} />
        {/* <StatefulComponentExample></StatefulComponentExample> */}
      </div>
    );
  }
}
