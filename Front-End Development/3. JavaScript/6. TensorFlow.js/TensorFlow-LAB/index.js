// Importing tensorflow.js library
import * as tf from "@tensorflow/tfjs"

// Initializing the input
const code_input = tf.tensor([1, 2, 9, 6, 5,
    4, 7, 4, 7, 4, 3
], [1, 11], 'int32');

// Printing Input tensor
console.log('Input tensor: ', code_input)

// Weight and size for the bincount
const code_Weight = tf.tensor(
    [0, 2, 5, 8, 9, 3, 5, 5, 3, 8, 2]);

const code_size = 8;

// Applying bincount to input tensor
const r = tf.bincount(code_input, code_Weight, code_size)

// Printing result
console.log("Output tensor: ", r)