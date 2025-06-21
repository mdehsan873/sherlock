import {View} from "react-native";
import {icons} from "@/constants/icons";
import ReportCard from "@/components/ReportCard";

// TODO Make this dynamic
function ReportsSection() {
    return (
        <View className="flex-row flex-wrap justify-left">
            <View key={"110"} className="pr-2 w-full md:w-[45%]">
               <ReportCard reportId={"110"} title={"Asad Rizvi"} description={"Bhelupur Road, Varanasi"}  metadata={"Tue, 10:00AM 2025-06-12"} icon={icons.home}/>
            </View>
            <View key={"111"} className="pr-2 w-full md:w-[45%]">
                <ReportCard reportId={"111"} title={"Asad Rizvi"} description={"Bhelupur Road, Varanasi"}  metadata={"Tue, 10:00AM 2025-06-12"} icon={icons.home}/>
            </View>
            <View key={"113"} className="pr-2 w-full md:w-[45%]">
                <ReportCard reportId={"113"} title={"Asad Rizvi"} description={"Bhelupur Road, Varanasi"}  metadata={"Tue, 10:00AM 2025-06-12"} icon={icons.home}/>
            </View>
        </View>
    )
}

export default ReportsSection