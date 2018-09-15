'use strict';

const linkedListCopy = require('../lib/linked-list');

describe('Running tests for link-lists.js program.', () => {
  test('find: if non-number value returns null', () => {
    expect(linkedListCopy.run.find('a')).toEqual(null);
  });
  test('find: if the SSL object was returned', () => {
    expect(typeof linkedListCopy.run.find(5)).toBe('object');
  });
});
