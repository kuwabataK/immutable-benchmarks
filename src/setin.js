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

exports.objectSetInNative = (cycles) => {
  const obj = {
    data: {value},
  };
  for (let i = 0; i < cycles; i++) {
    Object.assign({}, obj, {
      data: Object.assign({}, obj.data, {
        value: Math.random(),
      }),
    });
  }
};

exports.objectSetInSeamlessImmutableJs = (cycles) => {
  const obj = seamlessImmutableJs.from({
    data: {value},
  });
  for (let i = 0; i < cycles; i++) {
    obj.setIn(['data', 'value'], Math.random());
  }
};

exports.objectSetInImmutableJs = (cycles) => {
  const obj = ImmutableJs.fromJS({
    data: {value},
  });
  for (let i = 0; i < cycles; i++) {
    obj.setIn(['data', 'value'], Math.random());
  }
};

exports.objectSetInMoriJs = (cycles) => {
  const obj = moriJs.hashMap('data', moriJs.hashMap('value', value));
  for (let i = 0; i < cycles; i++) {
    moriJs.assocIn(obj, ['data', 'value'], Math.random());
  }
};

exports.objectSetInCrio = (cycles) => {
  const obj = crio({
    data: {value},
  });
  for (let i = 0; i < cycles; i++) {
    obj.setIn(['data', 'value'], Math.random());
  }
};

exports.objectSetInBelt = (cycles) => {
  const obj = BeltMapString.fromArray([['data', BeltMapString.fromArray([['value', value]])]]);
  for (let i = 0; i < cycles; i++) {
    BeltMapString.set(obj, 'data', BeltMapString.set(BeltMapString.get(obj, 'data')[0], 'value', Math.random()));
  }
};

/**
 * Array
 */

exports.arraySetInNative = (cycles) => {
  const arr = [array];
  const maxIndex = arr[0].length;
  for (let i = 0; i < cycles; i++) {
    const newArr = [].concat(arr);
    newArr[0] = [].concat(arr[0]);
    const index = ~~(Math.random() * maxIndex);
    newArr[0][index] = Math.random();
  }
};

exports.arraySetInSeamlessImmutableJs = (cycles) => {
  const arr = seamlessImmutableJs.from([array]);
  const maxIndex = arr[0].length;
  for (let i = 0; i < cycles; i++) {
    arr.setIn([0, ~~(Math.random() * maxIndex)], Math.random());
  }
};

exports.arraySetInImmutableJs = (cycles) => {
  const arr = ImmutableJs.fromJS([array]);
  const maxIndex = arr.get(0).size;
  for (let i = 0; i < cycles; i++) {
    arr.setIn([0, ~~(Math.random() * maxIndex)], Math.random());
  }
};

exports.arraySetInMoriJs = (cycles) => {
  const arr = moriJs.vector(moriJs.vector(...array));
  const maxIndex = moriJs.count(moriJs.get(arr, 0));
  for (let i = 0; i < cycles; i++) {
    moriJs.assocIn(arr, [0, ~~(Math.random() * maxIndex)], Math.random());
  }
};

exports.arraySetInCrio = (cycles) => {
  const arr = crio([array]);
  const maxIndex = arr[0].length;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    arr.setIn([0, index], Math.random());
  }
};

exports.arraySetInBelt = (cycles) => {
  const arr = BeltMapInt.fromArray([[0, BeltMapInt.fromArray(array.map((v, i) => [i, v]))]]);
  const maxIndex = BeltMapInt.size(BeltMapInt.get(arr, 0)[0]);
  for (let i = 0; i < cycles; i++) {
    BeltMapInt.set(arr, 0, BeltMapInt.set(BeltMapInt.get(arr, 0)[0], ~~(Math.random() * maxIndex), Math.random()));
  }
};
