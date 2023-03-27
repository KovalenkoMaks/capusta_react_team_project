import { DatePicker } from 'antd';
import styled from 'styled-components';
const { Field } = require('formik');

export const FieldEl = styled(Field)`
  &::placeholder {
  }
`;
export const DatePickerEl = styled(DatePicker)`
  color: #d9d9d9;
`;
