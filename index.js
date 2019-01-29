/*
 * Primary file for the API
 *
 */

//Dependencies
const cluster = require("cluster");
const os = require("os");

const server = require("./server");

//start sever and listen on http port
if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  server.init();
}
