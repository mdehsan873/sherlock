import {Text, TouchableOpacity} from "react-native";

interface VerifyButtonProps {
    phoneNumber: string;
    phoneNumberLength: number;
    otp: string;
    otpLength: number;
    onSendOtp: () => void;
    onVerifyOtp: () => void;
    isOtpSent: boolean;
}

export default function VerifyButton( { phoneNumber, phoneNumberLength, otp, otpLength, onSendOtp, onVerifyOtp, isOtpSent }: VerifyButtonProps) {

    const isPhoneNumberValid = phoneNumber.length === phoneNumberLength;
    const isOtpEntered = otp.length === otpLength;


    const buttonText = !isOtpSent ?
        "Send OTP" :
        "Verify";

    const isEnabled = !isOtpSent ? isPhoneNumberValid : isOtpEntered;

    const handlePress = () => {
        if (!isOtpEntered) {
            onSendOtp();
        } else {
            onVerifyOtp();
        }
    };

    return <TouchableOpacity
        onPress={handlePress}
        disabled={!isEnabled}
        className={`rounded-lg py-4 mt-5 ${isEnabled ? "bg-primary" : "bg-grayish_blue"}`}
    >
        <Text className="text-center text-lg text-secondary font-bold">{buttonText}</Text>
    </TouchableOpacity>
}