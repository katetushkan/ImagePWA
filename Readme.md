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

![IMG_3293](https://github.com/katetushkan/ImagePWA/assets/43992068/164f4bd7-95db-427c-a3d2-7b06a9b96bf6)
![IMG_3294](https://github.com/katetushkan/ImagePWA/assets/43992068/094e9dec-0f8c-43ca-90d4-7de2efa18f71)
![IMG_3295](https://github.com/katetushkan/ImagePWA/assets/43992068/e6896ad9-7f1e-4cb2-8102-a81d561f84c8)
![IMG_3291](https://github.com/katetushkan/ImagePWA/assets/43992068/c37c9fbb-b660-4522-88e0-e23e18c225ab)

