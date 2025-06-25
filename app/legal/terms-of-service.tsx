import PolicyPage from "@/components/sections/policies/PolicyPage";
import TERMS_OF_SERVICE from "@/constants/termsOfService";

//TODO update this
function TermsOfService(){
    return <PolicyPage title={"Terms of Service"} content={TERMS_OF_SERVICE}/>
}

export default TermsOfService;