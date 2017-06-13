'use strict';

require('dotenv').config()

const Buffer = require('safe-buffer').Buffer;

module.exports.{{ FUNCTION_NAME }} = (event, callback) => {
  const pubsubMessage = event.data;
  const decoded = Buffer.from(pubsubMessage.data, 'base64').toString()
  // log the payload
  console.log(decoded)
  // call this to `ack` the message
  callback()
}
