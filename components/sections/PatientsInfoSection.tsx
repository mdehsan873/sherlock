import {View} from "react-native";
import PatientInfoBox from "@/components/PatientInfoBox";
import {images} from "@/constants/images";
import Divider from "@/components/common/Divider";

// TODO make this dynamic by calling API
function PatientsInfoSection(){
    return (
        <>
            <View className="flex-row flex-wrap justify-left">
                <View key={"110"} className="pr-2 w-full md:w-[45%]">
                    <PatientInfoBox patientId={"110"} name={"Asad"} recentVisitDateTime={"22-06-2018"}
                                    summary={"This is a summary that i want to show"} image={images.heroBackground}/>
                </View>
            </View>
            <Divider/>
        </>
    )
}

export default PatientsInfoSection;