"use strict";
const fs = require("fs");
const crypto = require('crypto');
const path = require('path');

const envFileRegEx = /env.([a-z0-9]*.)?js/g
const buildDir = "./build"


// Generate the configuration script from environment variables
function generateConfigScript() {
    const prefixRegexp = /^REACT_APP_/;
    const env = process.env;
    const config = Object.keys(env)
        .filter(key => prefixRegexp.test(key))
        .reduce((c, key) => (Object.assign({}, c, { [key]: env[key] })), {});

    console.log(config);
    return `window.env=${JSON.stringify(config)};`;
}

// Save the configuration script to disk
function saveConfigScript(scriptContents, scriptName) {
    const scriptPath = path.join(buildDir, scriptName);
    console.log(("Saving file to: " + scriptPath));
    fs.writeFile(scriptPath, scriptContents, "utf8", function (err) {
        if (err) throw err;

        console.log("The file was saved!");
    });
}

// Update configuration script name in index.html
function updateIndex(scriptName) {
    const indexPath = path.join(buildDir, "index.html");

    fs.readFile(indexPath, "utf8", function (err, data) {
        if (err) throw err;

        let result = data.replace(envFileRegEx, scriptName);

        fs.writeFile(indexPath, result, "utf8", function (err) {
            if (err) throw err;

            var indexHash = crypto.createHash('md5').update(result).digest("hex");
            updateIndexInServiceWorker(indexHash)
        });
    });
}

// Update index hash in service-worker.js
function updateIndexInServiceWorker(indexHash) {
    const swPath = path.join(buildDir, "service-worker.js");

    fs.readFile(swPath, "utf8", function (err, data) {
        if (err) throw err;

        let result = data.replace(/"\/index.html","(.*?)"/, `"/index.html","${indexHash}"`);

        fs.writeFile(swPath, result, "utf8", function (err) {
            if (err) throw err;
        });
    });
}


// Delete old configuration scripts from disk
function deleteOldScript(currentScriptName) {
    const files = fs.readdirSync(buildDir).filter(fn => fn != currentScriptName && fn.match(envFileRegEx));
    files.forEach(fn => {
        let filePath = path.join(buildDir, fn);
        fs.unlink(filePath, (err) => {
            if (err) throw err;
        });
    });
}

// MAIN
console.log("Setting runtime envoronment..");
let scriptContents = generateConfigScript();
let scriptHash = crypto.createHash('md5').update(scriptContents).digest("hex");
let scriptName = `env.${scriptHash}.js`

saveConfigScript(scriptContents, scriptName);
updateIndex(scriptName);
deleteOldScript(scriptName);
