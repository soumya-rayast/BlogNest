import axios from "axios"

export const uploadImage = async (image, onUploadProgress) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "BlogNest");
    formData.append('api_key', "311775924837317")
    const config = {
        headers: {
            "Content-Type": onUploadProgress,
        },
        onUploadProgress: onUploadProgress,
        withCredentials: false,
    };
    const res = await axios.post(
        'https;//api.cloudinary.com/v1-1/diwb41tza/image/upload',
        formData,
        config
    )
    const data = await res.data;

    if (!data) {
        throw new Error("Error uploading image")
    }
    const imageData = {
        publicId: data.public_id,
        utl: data.secure_url,
    }
    return imageData;
}
