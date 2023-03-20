# AWS Lambda TypeScript Code Generator

This package provides a command-line tool to generate CRUD (Create, Read, Update, Delete) boilerplate code for AWS Lambda functions written in TypeScript. The generated code is based on the `aws-nodejs-typescript` template from the Serverless Framework.

## Installation

```
npm i -D sls-ts-codegen
```

## Usage

To generate the boilerplate code for a Lambda function, use the `generate` command followed by the function name:

```
npx sls-ts-codegen generate -f myFunction
```

By default, the generated code will be saved in a folder named after the function in the `/src/functions` directory. You can specify a different path using the `-p` or `--path` option:

```
npx sls-ts-codegen generate -f myFunction -p /path/to/myFunction
```

The generated code includes a `handler.ts` file that defines the Lambda function handler and a `model.ts` file that defines the data model. Both files are based on Handlebars templates, which you can customize by modifying the `crud-template.hbs` and `model-template.hbs` files in the `templates` directory.
