/* config-overrides.js */
const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(addBabelPlugin(["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }]));
