const runtimeEnv = window.env;
const compileEnv = process.env;

export const env = {...compileEnv, ...runtimeEnv}