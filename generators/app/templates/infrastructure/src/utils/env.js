const runtimeEnv = window.env
const compileEnv = import.meta.env

export const env = {...compileEnv, ...runtimeEnv}