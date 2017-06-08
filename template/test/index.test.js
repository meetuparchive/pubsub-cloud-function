'use strict';

const proxyquire = require(`proxyquire`).noCallThru();
const sinon = require(`sinon`);
const test = require(`ava`);
const Buffer = require('safe-buffer').Buffer;

function getSample () {
  return {
    program: proxyquire(`../`, {
      // fill in overrides here
    })
  };
}

test(`acks messages`, (t) => {
  const callback = sinon.stub()
  const event = {
    data: {
      data: Buffer.from(JSON.stringify({ hello: "world" })).toString('base64')
    }
  }
  const sample = getSample();
  sample.program.deploy_complete(event, callback)
  t.deepEqual(callback.callCount, 1)
  t.deepEqual(callback.firstCall.args, [])
});
