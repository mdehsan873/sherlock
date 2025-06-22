import {useState} from "react"
import {View} from "react-native";
import PhoneNumberFieldBox from "@/components/PhoneNumberFieldBox";
import OtpFieldBox from "@/components/OtpFieldBox";
import VerifyButton from "@/components/VerifyButton";
import {router} from "expo-router";

export default function LoginSection() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);

    const otpLength = 4;
    const phoneNumberLength = 10;

    const handleSendOtp = () => {
        console.log("Sending OTP to", phone);
        setIsOtpSent(true);
        // TODO API to send OTP
    };

    const handleVerify = () => {
        console.log("Verifying OTP", otp);
        // TODO API to Verify OTP

        // TODO Remove this
        router.push("/home")
    }

    return (
        <View>
            <PhoneNumberFieldBox
                value={phone}
                onChangeText={setPhone}
                maxLength={phoneNumberLength}
                keyboardType="phone-pad"
            />
            <OtpFieldBox
                placeholder="Enter OTP"
                value={otp}
                maxLength={otpLength}
                onChangeText={setOtp}
                editable={isOtpSent}
            />

            <VerifyButton
                phoneNumber={phone}
                phoneNumberLength={phoneNumberLength}
                otp={otp}
                otpLength={otpLength}
                onSendOtp={handleSendOtp}
                onVerifyOtp={handleVerify}
                isOtpSent={isOtpSent}
                />
        </View>
    );
}