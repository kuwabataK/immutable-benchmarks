/* eslint no-unused-vars: 0 */
const seamlessImmutableJs = require('seamless-immutable');
const ImmutableJs = require('immutable');
const moriJs = require('mori');
const crio = require('crio').default;
const BeltMapString = require('bs-platform/lib/js/belt_MapString');
const BeltMapInt = require('bs-platform/lib/js/belt_MapInt');

/**
 * Data
 */

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];

/**
 * Object
 */

exports.objectGetNative = (cycles) => {
  const obj = {value};
  for (let i = 0; i < cycles; i++) {
    const val = obj.value;
  }
};

exports.objectGetSeamlessImmutableJs = (cycles) => {
  const obj = seamlessImmutableJs.from({value});
  for (let i = 0; i < cycles; i++) {
    const val = obj.value;
  }
};

exports.objectGetImmutableJs = (cycles) => {
  const obj = ImmutableJs.fromJS({value});
  for (let i = 0; i < cycles; i++) {
    const val = obj.get('value');
  }
};

exports.objectGetMoriJs = (cycles) => {
  const obj = moriJs.hashMap('value', value);
  for (let i = 0; i < cycles; i++) {
    const val = moriJs.get(obj, 'value');
  }
};

exports.objectGetCrio = (cycles) => {
  const obj = crio({value});
  for (let i = 0; i < cycles; i++) {
    const val = obj.value;
  }
};

exports.objectGetBelt = (cycles) => {
  const obj = BeltMapString.fromArray([['value', value]]);
  for (let i = 0; i < cycles; i++) {
    const val = BeltMapString.get(obj, 'value');
  }
};

/**
 * Array
 */

exports.arrayGetNative = (cycles) => {
  const arr = array;
  const maxIndex = arr.length;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = arr[index];
  }
};

exports.arrayGetSeamlessImmutableJs = (cycles) => {
  const arr = seamlessImmutableJs.from(array);
  const maxIndex = arr.length;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = arr[index];
  }
};

exports.arrayGetImmutableJs = (cycles) => {
  const arr = ImmutableJs.fromJS(array);
  const maxIndex = arr.size;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = arr.get(index);
  }
};

exports.arrayGetMoriJs = (cycles) => {
  const arr = moriJs.vector(...array);
  const maxIndex = moriJs.count(arr) - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = moriJs.get(arr, index);
  }
};

exports.arrayGetCrio = (cycles) => {
  const arr = crio(array);
  const maxIndex = arr.length;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = arr[index];
  }
};

exports.arrayGetBelt = (cycles) => {
  const arr = BeltMapInt.fromArray(array.map((v, i) => [i, v]));
  const maxIndex = BeltMapInt.size(arr);
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = BeltMapInt.get(arr, index);
  }
};