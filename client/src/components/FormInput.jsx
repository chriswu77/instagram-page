/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const TextInput = styled(TextField)`
  width: 258px !important;
  box-sizing: border-box;
  border: 1px solid rgb(219, 219, 219) !important;
  border-radius: 3px !important;
  margin-bottom: 6px !important;
`;

const FormInput = (props) => {
  const { type, text, onChange } = props;
  return (
    <TextInput
      label={text}
      placeholder={text}
      variant="filled"
      type={type}
      inputProps={{
        style: {
          backgroundColor: 'rgb(250, 250, 250)',
          fontSize: '12px',
          padding: '24px 8px 7px',
        },
      }}
      InputLabelProps={{
        style: {
          fontSize: '12px',
          color: 'rgba(0,0,0,0.54)',
          marginLeft: '-4px',
        },
      }}
      InputProps={{ disableUnderline: true }}
      onChange={onChange}
    />
  );
};

export default FormInput;
