# aldyadk's Homework assignment #6

## Repository of [Pirple's](https://pirple.thinkific.com) Nodejs Masterclass Course

#### Requirements

[NodeJS](https://nodejs.org/en/) & [Git](https://git-scm.com/)

### Description
Repository for homework assignment #5 of Pirple's Nodejs Masterclass Course.
Creating a simple nodejs server utilizing all cpu cores using the 'cluster' module.


### Getting Started
Clone the repo

```sh
$ git clone https://github.com/aldyadk/adk-simple-nodejs-server-with-cluster-module.git
$ cd adk-simple-nodejs-server-with-cluster-module
```
Paste the key.pem & cert.pem files required on the 'https' folder

Start the server
```sh
$ node index.js
```

Open a new browser tab and enter

```sh
localhost:3000/hello?name=yourname
```

This API will response in JSON format

```sh
{"response":"Hello there, yourname"}
```

yourname will default to 'stranger'