import {Stack, Tabs} from "expo-router";
import "../../globals.css";
import {Image, Text, useWindowDimensions, View} from "react-native";
import {icons} from "@/constants/icons";


interface TabIconProps {
    isActive: boolean;
    icon: any;
    title: string;
}

function TabIcon({isActive, icon, title}: TabIconProps) {
    return (
        <View className="items-center">
            <Image
                source={icon}
                style={{
                    maxWidth: 30,
                    maxHeight: 30,
                    tintColor: isActive ? "#63877A" : "#A5A5A5"
                }}
                className="mb-1"
            />
            <Text
                className="text-xs"
                style={{
                    color: isActive ? "#63877A" : "#A5A5A5"
                }}
            >
                {title}
            </Text>
        </View>
    );
}

const SCREEN_CONFIG = [
    {
        name: "home/index",
        title: "Home",
        icon: icons.home,
    },
    {
        name: "report/index",
        title: "Report",
        icon: icons.report,
    },
    {
        name: "profile/index",
        title: "Profile",
        icon: icons.profile,
    },
];

function TabsNavigation({ isLargeScreen = false }) {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    width: "100%",
                    height: "100%",
                },
                tabBarStyle: {
                    height: 60,
                    overflow: "hidden",
                },
                sceneStyle : {
                    backgroundColor: "#eceff3",
                }
            }}
        >
            {SCREEN_CONFIG.map((screen) => (
                <Tabs.Screen
                    key={screen.name}
                    name={screen.name}
                    options={{
                        title: screen.title,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon isActive={focused} icon={screen.icon} title={screen.title} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
}

export default function TabsLayout() {
    const {width} = useWindowDimensions();
    const isLargeScreen = width >= 768;

    // Use Tab navigation for all screen sizes, with different styling based on screen size
    return <TabsNavigation isLargeScreen={isLargeScreen} />;
}