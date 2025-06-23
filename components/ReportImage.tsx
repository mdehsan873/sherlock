import {ImageBackground, View} from "react-native";
import {images} from "@/constants/images";

interface ReportImageProps {
    url: string;
}

// TODO Make this dynamic
function ReportImage({ url }: ReportImageProps){
    return (
        <ImageBackground
            source={images.heroBackground}
            resizeMode="cover"
            className="my-4 rounded-lg"
            style={{ width: 300, height: 300, alignSelf: 'center' }}
        />
    )

}

export default ReportImage;