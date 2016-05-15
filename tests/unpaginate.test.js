"use strict";

// todo: use [local modules](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)
import * as unpaginate from '../lib/unpaginate';
import {test} from 'tape';

test('basic pass', t => {
  t.plan(1);

  unpaginate.justX.subscribe(x => {
    t.equal(
      x,
      'x',
      'a plain observer should be testable'
    );
    t.end();
  });

});