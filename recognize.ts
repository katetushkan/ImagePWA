import * as functions from 'firebase-functions';
import * as tf from '@tensorflow/tfjs-node';
import * as cors from 'cors';


const recognize = functions.https.onRequest(async (request, response) => {
  cors({ origin: true })(request, response, async () => {
    const { image } = request.body;

    const fileBlob = Buffer.from(Object.values(image) as any);

    const model = await tf.loadLayersModel('https://storage.googleapis.com/ar-viewer/out/model.json');


    const ui8ca = new Uint8Array(fileBlob);
    const example = tf.node.decodeImage(ui8ca);

    const img = tf.image.resizeBilinear(example, [28, 28]).cast('float32').div(tf.scalar(255));

    const prediction = model.predict(tf.expandDims(img, 0)) as tf.Tensor;
    prediction.print();

    response.json(prediction.dataSync());
  });
});

export default recognize;
