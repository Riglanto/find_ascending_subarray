const assert = require('chai').assert;
const Algos = require('../lib/Algos');

describe('ascending_subarray', function() {
  describe('#find_ascending_subarray', function() {

    it('given example', function() {
      var input = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16];
      var expected = [1, 5, 7, 10, 12, 16];
      var result = Algos.find_ascending_subarray(input);
      assert.lengthOf(result, expected.length);
      assert.deepEqual(result, expected);
    });

    it('easy', function() {
      var input = [1, 2, 3];
      var expected = [1, 2, 3];
      var result = Algos.find_ascending_subarray(input);
      assert.lengthOf(result, expected.length);
      assert.deepEqual(result, expected);
    });

    it('worst case scenario', function() {
      var input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      var expected = [10];
      var result = Algos.find_ascending_subarray(input);
      assert.lengthOf(result, expected.length);
      assert.deepEqual(result, expected);
    });

    it('random finished by winner', function() {
      var input = [7, 8, 9, 5, 6, 1, 2, 3, 4];
      var expected = [1, 2, 3, 4];
      var result = Algos.find_ascending_subarray(input);
      assert.lengthOf(result, expected.length);
      assert.deepEqual(result, expected);
    });

    it('second of two candidates', function() {
      var input = [10, 11, 12, 1, 2, 3, 4];
      var expected = [1, 2, 3, 4];
      var result = Algos.find_ascending_subarray(input);
      assert.lengthOf(result, expected.length);
      assert.deepEqual(result, expected);
    });

    it('second of three candidates', function() {
      var input = [6, 7, 3, 4, 5, 1, 2];
      var expected = [3, 4, 5];
      var result = Algos.find_ascending_subarray(input);
      assert.lengthOf(result, expected.length);
      assert.deepEqual(result, expected);
    });

    it('two parts combined', function() {
      var input = [10, 11, 1, 12, 13];
      var expected = [10, 11, 12, 13];
      var result = Algos.find_ascending_subarray(input);
      assert.lengthOf(result, expected.length);
      assert.deepEqual(result, expected);
    });

    it('wiki', function() {
      var input = [10, 11, 12, 1, 2, 3, 4, 13];
      var expected = [1, 2, 3, 4, 13];
      var result = Algos.find_ascending_subarray(input);
      assert.lengthOf(result, expected.length);
      assert.deepEqual(result, expected);
    });

  });

  describe('#try_altering_array', function() {
    it('simple', function() {
      var arr = [1, 2, 3];
      var value = 4;
      var expected = [1, 2, 3, 4];
      var was_altered = Algos.try_altering_array(arr, value);
      assert.lengthOf(arr, expected.length);
      assert.deepEqual(arr, expected);
      assert.equal(was_altered, true);
    });

    it('tricky', function() {
      var arr = [1, 2, 4];
      var value = 3;
      var expected = [1, 2, 3];
      var was_altered = Algos.try_altering_array(arr, value);
      assert.lengthOf(arr, expected.length);
      assert.deepEqual(arr, expected);
      assert.equal(was_altered, true);
    });

    it('no altering', function() {
      var arr = [10, 11];
      var value = 9;
      var expected = arr;
      var was_altered = Algos.try_altering_array(arr, value);
      assert.lengthOf(arr, expected.length);
      assert.deepEqual(arr, expected);
      assert.equal(was_altered, false);
    });

  });
});
