package com.dev800;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Base64;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class RNImgToBase64Module extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNImgToBase64Module(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNImgToBase64";
    }

    @ReactMethod
    public void getBase64String(String uri, Promise promise) {
        Bitmap image = null;
        Bitmap newImage = null;
        int moyRed = 0;
        int moyBlue = 0;
        int moyGreen = 0;
        int moyAlpha = 0;

        try {
            if (uri.contains("http")) {
                image = getBitmapFromURL(uri);
            } else {
                image = MediaStore.Images.Media.getBitmap(reactContext.getContentResolver(), Uri.parse(uri));
            }
            if (image == null) {
                promise.reject("Error", "Failed to decode Bitmap, uri: " + uri);
            } else {
                newImage = image.copy(image.getConfig(), true);
                int bitmapWidth = image.getWidth()-1;
                int bitmapHeight = image.getHeight()-1;
                for (int width = 0; width <= bitmapWidth; width++) {
                    for (int height = 0; height <= bitmapHeight; height+=3) {
                        moyAlpha = Alpha(width, height, image, bitmapHeight);
                        moyRed = Red(width, height, image, bitmapHeight);
                        moyGreen = Green(width, height, image, bitmapHeight);
                        moyBlue = Blue(width, height, image, bitmapHeight);

                        newImage.setPixel(width, height, Color.argb( moyAlpha, moyRed, moyGreen, moyBlue));
                        if (height + 1 <= bitmapHeight ) {
                            newImage.setPixel(width, height + 1, Color.argb( moyAlpha, moyRed, moyGreen, moyBlue));
                        }
                        if (height + 2 <= bitmapHeight ) {
                            newImage.setPixel(width, height + 2, Color.argb( moyAlpha, moyRed, moyGreen, moyBlue));
                        }
                    }
                }
                //int[] intArray = new int[image.getWidth()*image.getHeight()];
                //image.getPixels(intArray,0,image.getWidth(),0,0,image.getWidth(),image.getHeight());
                promise.resolve(bitmapToPNG(newImage));
            }
        } catch (Error e) {
            promise.reject("Error", "Failed to decode Bitmap: " + e);
            e.printStackTrace();
        } catch (Exception e) {
            promise.reject("Error", "Exception: " + e);
            e.printStackTrace();
        }
    }

    public static int Alpha (int width, int height, Bitmap image, int maxHeight){
        int divise = 1;
        int moy = Color.alpha(image.getPixel(width,height));
        if (height + 1 <= maxHeight ) {
            moy += Color.alpha(image.getPixel(width,height + 1));
            divise++;
        }
        if (height + 2 <= maxHeight ) {
            moy += Color.alpha(image.getPixel(width,height + 2));
            divise++;
        }
        moy = moy/divise;
        return  moy;
    }

    public static int Red (int width, int height, Bitmap image, int maxHeight){
        int divise = 1;
        int moy = Color.red(image.getPixel(width,height));
        if (height + 1 <= maxHeight ) {
            moy += Color.red(image.getPixel(width,height + 1));
            divise++;
        }
        if (height + 2 <= maxHeight ) {
            moy += Color.red(image.getPixel(width,height + 2));
            divise++;
        }
        moy = moy/divise;
        return  moy;
    }

    public static int Green (int width, int height, Bitmap image, int maxHeight){
        int divise = 1;
        int moy = Color.green(image.getPixel(width,height));
        if (height + 1 <= maxHeight ) {
            moy += Color.green(image.getPixel(width,height + 1));
            divise++;
        }
        if (height + 2 <= maxHeight ) {
            moy += Color.green(image.getPixel(width,height + 2));
            divise++;
        }
        moy = moy/divise;
        return  moy;
    }

    public static int Blue (int width, int height, Bitmap image, int maxHeight){
        int divise = 1;
        int moy = Color.blue(image.getPixel(width,height));
        if (height + 1 <= maxHeight ) {
            moy += Color.blue(image.getPixel(width,height + 1));
            divise++;
        }
        if (height + 2 <= maxHeight ) {
            moy += Color.blue(image.getPixel(width,height + 2));
            divise++;
        }
        moy = moy/divise;
        return  moy;
    }





    public Bitmap getBitmapFromURL(String src) {
        try {
            URL url = new URL(src);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoInput(true);
            connection.connect();
            InputStream input = connection.getInputStream();
            Bitmap myBitmap = BitmapFactory.decodeStream(input);
            return myBitmap;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    private String bitmapToPNG(Bitmap bitmap) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
        byte[] byteArray = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(byteArray, Base64.DEFAULT);
    }
}
