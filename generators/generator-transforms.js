const through = require("through2");
const prettier = require("prettier");

const defaultPrettierOptions = {
  printWidth: 125,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false
};

const prettierTransform = function (defaultOptions) {
  const transform = (file, encoding, callback) => {
    /* resolve from the projects config */
    prettier.resolveConfig(file.relative).then((options) => {
      const str = file.contents.toString("utf8");
      if (!options || Object.keys(options).length === 0) {
        options = defaultOptions;
      }
      // for better errors
      options.filepath = file.relative;
      const data = prettier.format(str, options);
      file.contents = Buffer.from(data);
      callback(null, file);
    });
  };
  return through.obj(transform);
};

module.exports = {
  prettierTransform,
  defaultPrettierOptions,
};
