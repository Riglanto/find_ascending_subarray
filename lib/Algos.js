'use strict'

function find_ascending_subarray(input) {
  let current = [input[0]];
  let longest = current;

  for (let i = 1; i < input.length; i++) {
    let current_altered = try_altering_array(current, input[i]);
    if (!current_altered) {
      current = [input[i]];
    }
    try_altering_array(longest, input[i]);
    if (current.length > longest.length)
      longest = current;
  }
  if (current.length > longest.length)
    longest = current;
  return longest;
}

function try_altering_array(arr, value) {
  let size = arr.length;
  let last = arr[size - 1];
  if (value > last) {
    arr.push(value);
  } else if (value < last) {
    let last_2 = arr[size - 2];
    if (value > last_2) {
      arr[size - 1] = value;
    } else return false;
  }
  return true;
}

module.exports = {
  find_ascending_subarray,
  try_altering_array
}
