"use strict";

// todo: use [local modules](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)
import '../lib/unpaginate';
import {test} from 'tape';

test('basic pass', t => {
  t.equal(1, 1, 'one should equal itself');
  t.end();
});

test('basic fail', t => {
  t.equal(1, "1", 'one not should equal the string "1"');
  t.end();
});