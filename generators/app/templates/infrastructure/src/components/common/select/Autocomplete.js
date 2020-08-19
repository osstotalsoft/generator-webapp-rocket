/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import AsyncCreatableSelect from 'react-select/async-creatable';
import AsyncSelect from 'react-select/async';
import { Paper, MenuItem, TextField, ListItem, ListItemIcon, ListItemText, Checkbox, makeStyles, InputAdornment } from '@material-ui/core';
import Typography from 'components/common/inputs/Typography';
import autoCompleteStyles from "assets/jss/components/common/autocompleteStyle"
import { isArray } from 'util';
import Search from '@material-ui/icons/Search';
import { curry, prop } from 'ramda';
import i18next from 'i18next';

const useStyles = makeStyles(autoCompleteStyles);

function NoOptionsMessage({ selectProps, innerProps, children }) {
    return (
        <Typography
            color="textSecondary"
            className={selectProps.classes.noOptionsMessage}
            {...innerProps}
        >
            {children}
        </Typography>
    );
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function controlHasValue(selectProps) {
    if (selectProps.inputValue.length > 0) {
        return true;
    }
    if (selectProps.value === null || selectProps.value === undefined) {
        return false;
    }
    if (isArray(selectProps.value) && selectProps.value.length === 0) {
        return false;
    }

    return true;
}

function Control({ selectProps, innerRef, children, innerProps }) {

    const inputProps = {
        inputComponent,
        inputProps: {
            className: selectProps.classes.input,
            inputRef: innerRef,
            children: children,
            ...innerProps,
        },
        endAdornment: (
            <InputAdornment>
                <Search />
            </InputAdornment>)
    }

    if (!selectProps.isSearchable) {
        delete inputProps.endAdornment;
    }

    return (
        <TextField
            fullWidth
            InputProps={inputProps}
            InputLabelProps={{
                shrink: controlHasValue(selectProps),
                style: { fontSize: 'inherit' }
            }}
            value={selectProps.value ? selectProps.getOptionValue(selectProps.value) : null}
            {...selectProps.textFieldProps}
        />
    );
}

function Option({ innerRef, isFocused, isSelected, innerProps, children }) {
    return (
        <MenuItem
            buttonRef={innerRef}
            selected={isFocused}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
                fontSize: "14px"
            }}
            {...innerProps}
        >
            {typeof children === 'function' ? children() : children}
        </MenuItem>
    );
}

const MultiOption = props => (
    <ListItem dense button selected={props.isSelected} {...props.innerProps}>
        <ListItemIcon>
            <Checkbox
                edge="start"
                checked={props.isSelected}
                tabIndex={-1}
                disableRipple
            />
        </ListItemIcon>
        <ListItemText primary={props.label} />
    </ListItem>

);

function Placeholder({ selectProps, innerProps, children }) {
    return (
        <Typography
            color="textSecondary"
            className={selectProps.classes.placeholder}
            {...innerProps}
        >
            {children}
        </Typography>
    );
}

function SingleValue({ selectProps, innerProps, children }) {
    return (
        <Typography className={selectProps.classes.singleValue} {...innerProps}>
            {typeof children === 'function' ? children() : children}
        </Typography>
    );
}

function ValueContainer({ selectProps, children }) {
    return <div className={selectProps.classes.valueContainer}>{children}</div>;
}

function MultiValueDisplay(text) {
    return (
        <span key={text}>
            {text}
        </span>
    );
}

function MultiValueContainer({ selectProps, children }) {

    let elements = Object.assign([], children);
    if (children.length > 0 && children[0] && children[0].length > 1) {
        elements[0] = MultiValueDisplay(`(${children[0].length} selected)`);
    }

    return <div className={selectProps.classes.valueContainer}>{elements}</div>;
}


function MultiValue(props) {
    return (
        <span>{props.children}</span>
    );
}

function Menu({ selectProps, innerProps, children }) {
    return (
        <Paper square className={selectProps.classes.paper} {...innerProps}>
            {children}
        </Paper>
    );
}

function IndicatorSeparator() {
    return (<span />);
}

function getSimpleValue(options, value, valueKey, isMultiSelection) {
    const option = options.filter(a => a[valueKey] === value)[0];

    if (isMultiSelection) {
        return options.filter(a => value && value.includes(a[valueKey])) || [];
    }
    return option || null;
}

function DropdownIndicator() {
    return (<span />);
}

const formatCreateLabel = curry((createdLabel, text) => i18next.t(createdLabel, { text }))

function Autocomplete({ options, loadOptions, onChange, creatable, onMenuOpen, value, isMultiSelection, isClearable, isSearchable, disabled, simpleValue, label, valueKey, labelKey, error, helperText, createdLabel, ...other }) {
    const classes = useStyles();

    const handleOnChange = useCallback(inputValue => {
        if (simpleValue && inputValue) {
            if (isMultiSelection) {
                return onChange(inputValue.map(a => a[valueKey]))
            } else {
                return onChange(inputValue[valueKey])
            }
        }

        return onChange(inputValue)
    }, [isMultiSelection, onChange, simpleValue, valueKey])

    const getNewOptionData = useCallback((inputValue, optionLabel) => ({
        [labelKey]: optionLabel,
        [valueKey]: undefined
    }), [labelKey, valueKey])

    const Comp = loadOptions ? creatable ? AsyncCreatableSelect : AsyncSelect : Select;
    const loadOptionsAsync = useCallback(input => {
        if (!input) {
            return [];
        }

        return loadOptions(input)
    }, [loadOptions])

    const components = {
        Control,
        Menu,
        MultiValue,
        NoOptionsMessage,
        Option: isMultiSelection ? MultiOption : Option,
        Placeholder,
        SingleValue,
        ValueContainer: isMultiSelection ? MultiValueContainer : ValueContainer,
        IndicatorSeparator,
    }

    if (isSearchable) {
        components.DropdownIndicator = DropdownIndicator;
    }

    return (
        <Comp
            {...other}
            classes={classes}
            styles={classes.selectStyles}
            options={options}
            loadOptions={loadOptionsAsync}
            components={components}
            closeMenuOnSelect={isMultiSelection ? false : true}
            value={simpleValue ? getSimpleValue(options, value, valueKey, isMultiSelection) : value}
            onChange={handleOnChange}
            onMenuOpen={onMenuOpen}
            textFieldProps={{
                label: label,
                error: error,
                helperText: helperText
            }}
            multiValueRemove={false}
            creatable={creatable}
            hideSelectedOptions={false}
            placeholder={null}
            isMulti={isMultiSelection}
            isClearable={isClearable}
            isSearchable={isSearchable}
            isDisabled={disabled}
            getOptionLabel={prop(labelKey)}
            getOptionValue={prop(valueKey)}
            formatCreateLabel={formatCreateLabel(createdLabel)}
            getNewOptionData={getNewOptionData}
        />
    )
}

Autocomplete.defaultProps = {
    options: [],
    isMultiSelection: false,
    isClearable: false,
    isSearchable: false,
    disabled: false,
    simpleValue: false,
    valueKey: "id",
    labelKey: "name",
    label: " ",
    error: false,
    value: null,
    creatable: false
};

Autocomplete.propTypes = {
    options: PropTypes.array,
    loadOptions: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
    ]),
    onChange: PropTypes.func.isRequired,
    onMenuOpen: PropTypes.func,
    isMultiSelection: PropTypes.bool,
    isClearable: PropTypes.bool,
    isSearchable: PropTypes.bool,
    disabled: PropTypes.bool,
    simpleValue: PropTypes.bool,
    label: PropTypes.string,
    valueKey: PropTypes.string,
    labelKey: PropTypes.string,
    error: PropTypes.bool,
    createdLabel: PropTypes.string
};

export default Autocomplete;