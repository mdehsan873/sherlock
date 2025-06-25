import PolicyPage from "@/components/sections/policies/PolicyPage";
import PRIVACY_POLICY from "@/constants/privacyPolicy";

//TODO update this
function PrivacyPolicy(){
    return <PolicyPage title={"Privacy Policy"} content={PRIVACY_POLICY}/>
}

export default PrivacyPolicy;