#!/usr/bin/env node

import { program } from "commander";
import { generateCode } from "./utils/helper";

program
  .option("-f, --function <functionName>", "Function name")
  .option("-p, --path [path]", "Folder path")
  .parse();

const options = program.opts();

const functionName = options.function;
const folderPath = options.path || `/src/functions/${functionName}`;

console.log(`Generating ${functionName} function at ${folderPath}`);

generateCode({
  functionName,
  folderPath,
  templateFile: "crud-template.hbs",
  fileName: "handler.ts",
});

console.log(`Generating ${functionName} model at ${folderPath}`);

generateCode({
  functionName,
  folderPath,
  templateFile: "model-template.hbs",
  fileName: `${functionName}.model.ts`,
});
