# Commercial-Gateway-API

## Description:

This application created by [NEST CLI](https://nestjs.com/) for commercial product.

## How to set up application:

* install global NEST CLI: `npm i -g @nestjs/cli`;
* install global SERVERLESS: `npm i -g serverless`;
* install all dependencies from package.json: `npm i`;
* add to root application folder .env file with:
```
AWS_ACCESS_KEY_ID=
AWS_ACCESS_KEY=
STAGE=
```


## Start application: 

* for start application with serverless use command: `npm run server`;

## Usage:

For create dependency module use command:
* create module with dependency all modules: `npm run nest:generate {module name}`
* create module without dependency modules: [NEST CLI generate module commands](https://docs.nestjs.com/cli/usages) 

<ins>
NOTE: Module's folder and files will be created relative your current place and module with dependencies.
</ins>

If you like to create submodule for some created module use: `cd src/{module_folder_name}` then use usage command.

Serverless handlers place: `src/handlers`.

## Build:

For build application use command: `npm run build`
