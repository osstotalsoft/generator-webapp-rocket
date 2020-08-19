import { useState, useEffect } from "react"

export const useSessionStorage = (key) => {
    const [state, setState] = useState(window.sessionStorage.getItem(key))
    useEffect(() => {
        state
            ? window.sessionStorage.setItem(key, state)
            : window.sessionStorage.removeItem(key)
    }, [key, state])

    return [state, setState]
}
