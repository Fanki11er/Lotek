import React from 'react';
import styled from 'styled-components';
import { FormikProps, withFormik } from 'formik';
import SelectNumberInput from '../../atoms/SelecNumbertInput/SelectNumberInput';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

interface FormValues {
  bidsNumber: number;
  numberOfNumbers: number;
}

interface NumberStatsFormProps {
  maxBidsNumber: number;
  maxNumbersNumber: number;
  defaultNumberOfNumbers?: number;
  defaultBidsNumber?: number;
  getValues: (bidsNumber: number, numberOfNumbers: number) => void;
}

const Form = (props: FormikProps<FormValues> & NumberStatsFormProps) => {
  const { maxBidsNumber, maxNumbersNumber, handleSubmit, setFieldValue, values } = props;
  const handleChange = (name: string, value: string) => {
    value && setFieldValue(name, value);
    value && handleSubmit();
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <SelectNumberInput
        name={'bidsNumber'}
        numberOfOptions={maxBidsNumber}
        label={'Losowania'}
        handleChange={handleChange}
        value={values.bidsNumber}
      />
      <SelectNumberInput
        handleChange={handleChange}
        name={'numberOfNumbers'}
        numberOfOptions={maxNumbersNumber}
        label={'Liczby'}
        value={values.numberOfNumbers}
      />
    </StyledForm>
  );
};

const NumbersStatsForm = withFormik<NumberStatsFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    bidsNumber: props.defaultBidsNumber || 0,
    numberOfNumbers: props.defaultNumberOfNumbers || 0,
  }),

  handleSubmit: (values, { props: { getValues }, setSubmitting }) => {
    const { bidsNumber, numberOfNumbers } = values;
    getValues(bidsNumber, numberOfNumbers);

    setSubmitting(false);
  },
})(Form);

export default NumbersStatsForm;
