import React, { useState } from 'react';
import { View, Button, Image, Platform } from 'react-native';
import { ImageLibraryOptions, PhotoQuality, launchImageLibrary } from 'react-native-image-picker';
import { Storage } from 'aws-amplify';

const ImageUploader = () => {
    const [imageUri, setImageUri] = useState(null);

    const chooseImage = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            maxHeight: 500,
            maxWidth: 500,
            quality: 1 as PhotoQuality,
        };

        launchImageLibrary(options, (response) => {
            if (!response.didCancel && !response.errorCode) {
                const { uri: imageUri } = response.assets[0];
                setImageUri(imageUri);
            }
        });
    };

    const uploadImage = async () => {
        try {
            const response = await fetch(imageUri);
            const blob = await response.blob();

            await Storage.put('category-image.jpg', blob, {
                contentType: 'image/jpeg',
            });

            console.log('Image uploaded successfully');
        } catch (error) {
            console.log('Error uploading image:', error);
        }
    };

    return (
        <View>
            {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
            <Button title="Choose Image" onPress={chooseImage} />
            <Button title="Upload Image" onPress={uploadImage} />
        </View>
    );
};

export default ImageUploader