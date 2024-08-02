import { curry } from 'ramda'

export const addPropertyPrefix = curry((prefix, fn, prop) => fn(`${prefix}.${prop}`))

export const onCheckBoxChange = onPropertyChange => event => onPropertyChange(event.target.checked)

export const onRadioBoxChange = onPropertyChange => event => onPropertyChange(event.target.value)

export const onSliderChange = (onPropertyChange, min, max) => (_, value) => {
    if (value) {
        if (value <= min) {
            onPropertyChange(min)
        }
        else if (value >= max) {
            onPropertyChange(max)
        }
        else {
            onPropertyChange(value)
        }
    }
    else {
        onPropertyChange(min)
    }

}

export const onTextBoxChange = onPropertyChange => value =>
    onPropertyChange(value)

export const onDynamicInputChange = onPropertyChange => (_, value) =>
    onPropertyChange(value)