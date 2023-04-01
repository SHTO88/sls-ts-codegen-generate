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

if (!functionName) {
  console.log("Function name is required");
  process.exit(1);
}

console.log(`Generating ${functionName} function at ${folderPath}`);

generateCode({
  functionName,
  folderPath,
  templateFile: "crud-template.hbs",
  fileName: `${functionName}Handler.ts`,
});

console.log(`Generating ${functionName} model at ${folderPath}`);

generateCode({
  functionName,
  folderPath,
  templateFile: "model-template.hbs",
  fileName: `${functionName}Model.ts`,
});

console.log(`Generating ${functionName} index at ${folderPath}`);

generateCode({
  functionName,
  folderPath,
  templateFile: "index-template.hbs",
  fileName: `index.ts`,
});
