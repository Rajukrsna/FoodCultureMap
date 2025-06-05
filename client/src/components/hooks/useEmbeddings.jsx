import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs';

export default function useEmbeddings() {
  let model;

  return async (text) => {
    // Ensure the backend is set before loading the model
    await tf.setBackend('cpu');

    if (!model) {
      // Load the model once
      model = await use.load();
    }

    // Generate the embeddings
    const embeddings = await model.embed([text]);
    const vector = embeddings.arraySync()[0];

    console.log(vector); // Log the vector for debugging
    return vector; // Return the embeddings as a vector
  };
}
