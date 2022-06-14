# images-gallery-public
This repository is a small project where I can do some experimentation with React and will be able to consume apis from my other repository [images-api-serverless](https://github.com/astaBean/images-api-serverless)

This is going to be a site which will be hosted on publicly open S3 bucket. It can also be runnable in local environment.
Code in this repository was written using NextJs, you can find out more about the framework [here](https://nextjs.org/docs/getting-started).

## Prerequisites
Make sure you have installed following dependencies:
- git - installation instructions can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- node 16 or higher and npm package manager - installation instructions can be found [here](https://nodejs.dev/download/package-manager/)
- aws account and credentials - used for deploying to your AWS account. You will need AWS account and configure your credentials and profile on your local machine or ci. More info can be found [here](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html) 
and [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

## Set a correct node version and install dependencies
Run command below in this repository in your shell terminal
```shell
nvm i
yarn
```

to set correct node version and install dependencies.

## Run lint
To check verify linting run
```shell
yarn lint
```

## Run unit tests
To run unit tests execute command in this repository in your terminal:
```shell
yarn test
```


