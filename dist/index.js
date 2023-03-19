#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const helper_1 = require("./utils/helper");
commander_1.program
    .option("-f, --function <functionName>", "Function name")
    .option("-p, --path [path]", "Folder path")
    .parse();
const options = commander_1.program.opts();
const functionName = options.function;
const folderPath = options.path || `/src/functions/${functionName}`;
console.log(`Generating ${functionName} function at ${folderPath}`);
(0, helper_1.generateCode)({
    functionName,
    folderPath,
    templateFile: "crud-template.hbs",
    fileName: "handler.ts",
});
console.log(`Generating ${functionName} model at ${folderPath}`);
(0, helper_1.generateCode)({
    functionName,
    folderPath,
    templateFile: "model-template.hbs",
    fileName: `${functionName}.model.ts`,
});
//# sourceMappingURL=index.js.map