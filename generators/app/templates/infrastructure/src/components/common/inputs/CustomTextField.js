/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import i18n from 'i18next';

// material-ui components
import { makeStyles, TextField } from "@material-ui/core";
import textFieldStyle from 'assets/jss/components/common/textFieldStyle';
import { useDebounce } from "use-debounce";
import { curry } from "ramda";

const useStyles = makeStyles(textFieldStyle);

const isAllowed = values => !(values.floatValue && values.floatValue.toString().includes("e"))

function NumberFormatCustom(props) {
  const { inputRef, onChange, decimalScale, fixedDecimalScale, thousandSeparator, ...other } = props;
  let formatter = new Intl.NumberFormat(i18n.language);

  var thousandSep = thousandSeparator ? formatter.format(1111).replace(/1/g, '') : thousandSeparator;
  var decimalSeparator = formatter.format(1.1).replace(/1/g, '');
  const valueIsNumericString = !!props.value && typeof (props.value) === "string" && !Number.isNaN(Number(props.value));

  const handleValueChange = useCallback(values => onChange(values.floatValue), [onChange])

  return (
    <NumberFormat
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      style={{ textAlign: "right" }}
      onValueChange={handleValueChange}
      isAllowed={isAllowed}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
      thousandSeparator={thousandSep}
      decimalSeparator={decimalSeparator}
      isNumericString={valueIsNumericString}
    //format = {customFormat}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  decimalScale: PropTypes.number.isRequired,
  fixedDecimalScale: PropTypes.bool,
  thousandSeparator: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

NumberFormatCustom.defaultProps = {
  decimalScale: 2,
  fixedDecimalScale: true,
  thousandSeparator: true
};

// TODO: this is for backwards compatibility (onTextBoxChange) ... remove onTextBoxChange and keep only value
const setValueToDesiredFormat = curry((isNumeric, value) => isNumeric ? value : ({ target: { value } }))
const getValueFromDesiredFormat = curry((isNumeric, e) => isNumeric ? e : e?.target.value)

function CustomTextField({ isNumeric, customInputProps, endAdornment, InputLabelProps, className, value, onChange, debounceBy, ...rest }) {
  const classes = useStyles();
  const customInput = isNumeric ?
    {
      inputComponent: NumberFormatCustom,
      inputProps: {
        className: classes.input,
        ...customInputProps
      },
      endAdornment
    }
    : {
      inputProps: {
        className: classes.input,
        ...customInputProps,
      },
      endAdornment
    };

  const [localValue, setLocalValue] = useState(value)
  const [debouncedValue] = useDebounce(localValue, debounceBy)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { debouncedValue !== value && onChange(debouncedValue |> setValueToDesiredFormat(isNumeric)) }, [debouncedValue])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { value !== localValue && setLocalValue(value) }, [value])

  const handleChange = useCallback(e => setLocalValue(e |> getValueFromDesiredFormat(isNumeric)), [isNumeric])

  return (
    <TextField {...rest}
      onChange={handleChange}
      value={localValue}
      className={classes.textField + " " + className}
      InputProps={customInput}
      InputLabelProps={{
        className: classes.label,
        ...InputLabelProps
      }}
    >
    </TextField >
  );
}

CustomTextField.propTypes = {
  className: PropTypes.string,
  isNumeric: PropTypes.bool,
  customInputProps: PropTypes.object,
  endAdornment: PropTypes.any,
  InputLabelProps: PropTypes.object,
  value: PropTypes.any,
  onChange: PropTypes.func,
  debounceBy: PropTypes.number
};

CustomTextField.defaultProps = {
  isNumeric: false,
  debounceBy: 500,
  onChange: () => { }
};

export default CustomTextField;