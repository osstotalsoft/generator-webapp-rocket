import { curry, without, intersection, isEmpty, not } from "ramda";

export const extractExactAge = (birthday, referenceDate) => {
    var differenceInMilisecond = Date.parse(referenceDate) || Date.now() - Date.parse(birthday);

    var years = Math.floor(differenceInMilisecond / 31536000000);
    var days = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
    var months = Math.floor(days / 30);

    days = days % 30;

    if (isNaN(years) || isNaN(months) || isNaN(days)) {
        return {};
    }
    else {
        return {
            years,
            months,
            days
        }
    }
};

// valueOrDefault :: a -> a -> a
export const valueOrDefault = curry(($default, value) => value ?? $default);

// withoutItem :: a -> [a] -> [a]
export const withoutItem = curry((x, xs) => xs |> without([x]));

export const intersect = (needed = [], received = []) => intersection(needed, received) |> isEmpty |> not

export const isNullOrWhitespace = str => !str || /^\s*$/.test(str);

// transformToDate :: String -> Date
export const transformToDate = str => new Date(str)

// addDays :: Int -> Date -> Date
export const addDays = curry((days, date) => {
    let localMutable = new Date(date)
    localMutable.setDate(localMutable.getDate() + days)
    return localMutable
})

// addOneDay :: Date -> Date
export const addOneDay = addDays(1)

// addMilliseconds :: Int -> Date -> Date
export const addMilliseconds = curry((milliseconds, date) => new Date(date.getTime() + milliseconds))

// subtractOneMillisecond :: Date -> Date
export const subtractOneMillisecond = addMilliseconds(-1)

export const getOidcConfigName = () => {
    const tid = <% if (withMultiTenancy){ _%> sessionStorage.getItem("tenant") || <%_ } _%> 'config_show_access_token';
    return tid
}