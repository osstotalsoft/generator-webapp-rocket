import i18next from 'i18next';
import { isCNP as validateCnp } from "@totalsoft/validations";
import { Validator, Success, Failure, ValidationError } from "@totalsoft/pure-validations";
import { any } from 'ramda';
import { format, isAfter, isBefore, isEqual } from 'date-fns'

export const defaultFormatDateTime = date => format(date, 'DD-MM-YYYY')

export function lessThanOrEqualDate(max) {
    return Validator(function lessThanOrEqualDate(value) {
        return value === null || value === undefined || isEqual(value, max) || isBefore(value, max)
            ? Success
            : Failure(ValidationError(i18next.t('Validations.Generic.LessOrEqual', { max: defaultFormatDateTime(max) })))
    });
}

export function lessThanDate(max) {
    return Validator(function lessThanDate(value) {
        return value === null || value === undefined || isEqual(value, max) || isBefore(value, max)
            ? Success
            : Failure(ValidationError(i18next.t('Validations.Generic.Less', { max: defaultFormatDateTime(max) })))
    });
}

export function greaterThanOrEqualDate(min) {
    return Validator(function greaterThanOrEqualDate(value) {
        return value === null || value === undefined || isEqual(value, min) || isAfter(value, min)
            ? Success
            : Failure(ValidationError(i18next.t('Validations.Generic.GreaterOrEqual', { min: defaultFormatDateTime(min) })))
    });
}

export function greaterThanDate(min) {
    return Validator(function greaterThanDate(value) {
        return value === null || value === undefined || isAfter(value, min)
            ? Success
            : Failure(ValidationError(i18next.t('Validations.Generic.Greater', { min: defaultFormatDateTime(min) })))
    });
}

export const isPhone = Validator(function isPhone(x) {
    const input = /^(07[2-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|)?([0-9]{3}(\s|\.|)){2}$/;
    return input.test(String(x)) ? Success : Failure(ValidationError(i18next.t("Validations.Phone")));
});

export const noSpaceAtBeginning = Validator(function noSpaceAtBeginning(x) {
    const input = /^[^-\s]([a-zA-Z0-9])/;
    return input.test(String(x)) ? Success : Failure(ValidationError(i18next.t("Validations.NoSpace")));
});

export const isCnp = Validator(function isCnp(x) {
    return validateCnp(x) ? Success : Failure(ValidationError(i18next.t("Validations.Cnp")));
});

export const isIdSeries = Validator(function isIdSeries(x) {
    var input = /^[A-Za-z]{2}$/;
    return input.test(String(x)) ? Success : Failure(ValidationError(i18next.t("Validations.IdSeries")));
});

export const onlyLetters = Validator(function onlyLetters(x) {
    var input = /^[\p{Letter} -']+$/u;
    return input.test(String(x)) ? Success : Failure(ValidationError(i18next.t("Validations.OnlyLetters")));
});

export const isSixNumberCharacters = Validator(function isSixNumberCharacters(x) {
    var input = /^[0-9]{6}$/;
    return input.test(String(x)) ? Success : Failure(ValidationError(i18next.t("Validations.SixNumberCharacters")));
});

export const isPhotoUploaded = Validator(function isPhotoUploaded(input) {
    return input ? Success : Failure(ValidationError(i18next.t("Validations.IdPhotoMandatory")));
});

export const singleSelectionValidator = Validator((list) => {
    if (list === null || list === undefined) {
        return Success;
    }
    if (list.every(l => l.isMainActor === false)) {
        return Failure(ValidationError(i18next.t("Validations.TrueValueRequired")))
    } else if (list.filter(l => l.isMainActor === true).length > 1) {
        return Failure(ValidationError(i18next.t("Validations.SingleIsMainSelection")))
    }
    else {
        return Success;
    }
});

export const requiredFile = Validator(x =>
    x && x.fileId && x.fileName
        ? Success
        : Failure(ValidationError(i18next.t('Validations.FileIsMandatory')))
)

export const integer = Validator(x =>
    Number.isInteger(x)
        ? Success
        : Failure(ValidationError(i18next.t('Validations.Integer')))
)

export const numberOfFiles = Validator(list =>
    list.length > 5 ? Failure(ValidationError(i18next.t("Validations.MaximumNumberOfFiles"))) : Success
);

export const isCnpUnique = (list, personId) => Validator(function isCnpUnique(cnp) {
    return any(item => item.cnp === cnp && item.id !== personId, list)
    ? Failure(ValidationError(i18next.t('Validations.UniqueCnp')))
    : Success
})

export const isFlowNameUnique = (list, flowId) => Validator(function isFlowNameUnique(name) {
    return any(item => item.name === name && item.id !== flowId, list)
      ? Failure(ValidationError(i18next.t('Validations.UniqueFlowName')))
      : Success
})