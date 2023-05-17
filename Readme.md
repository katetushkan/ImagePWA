Katsiaryna Tushynskaya, 256241

# ML Digits Classification

In this repository you can find a Progression Web Application which can be installed on ur Android or IOS device and helps you classify digits via uploading an image.

## Architecture
It was considered to use cloud functions to extract massive counting and create a lightweight App.

I chose a Firebase Storage to store pretrained model, and load it to the `/recognize` Google Cloud Function which is stored in `recognise.ts` file.

GCF takes an array representation of an uploaded image, performs image preprocessing and makes a prediction. 

Client PWA displays predictions under the **_Power_** button.

### User-workflow:
1. Open https://images-6e368.web.app (install if preferable)
2. Press the **_Power_** button.
3. Wait for a img to be process (see the Loader)
4. Get prediction results underneath the **_Power_** button.
5. Repeat steps 2-4 if needed.


### Results
