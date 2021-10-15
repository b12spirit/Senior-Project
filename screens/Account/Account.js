import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { COLORS, FONTS, SIZES } from "../../constants";
const Account = () => {
    return (
        <ScrollView
            style={{ backgroundColor: COLORS.gray }}
        >
            <Text style={{
                ...FONTS.h1,
                color: COLORS.white,
                paddingBottom: '10%',
                paddingTop: '10%',
                marginHorizontal: SIZES.padding
            }}
            >
                Hi Username
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Account_name')}>
                <Text // This is the button for Name
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,
                    }}
                >
                    Name
                </Text>

            </TouchableOpacity>
            <View // This is the line for name
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_email')}>
                <Text // This is the button for Email
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Email
                </Text>

            </TouchableOpacity>
            <View // This is the line for email
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Account_password')}>
                <Text // This is the button for Password
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Password
                </Text>

            </TouchableOpacity>
            <View // This is the line for password
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_payment')}>
                <Text  // This is the button for Payment
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Payment
                </Text>
            </TouchableOpacity>
            <View // This is the line for Payment
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_order_history')}>
                <Text // This is the button for Order History
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Order History
                </Text>

            </TouchableOpacity>
            <View // This is the line for order history
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_push_notifications')}>
                <Text // This is the button for Push Notifications
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    Push Notifications
                </Text>

            </TouchableOpacity>
            <View // This is the line for push notifications
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Account_app_feedback')}>
                <Text // This is the button for App Feedback
                    style={{
                        color: COLORS.white2,
                        ...FONTS.h3,
                        marginHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding,

                    }}
                >
                    App Feedback
                </Text>
            </TouchableOpacity>
            <View // This is the line for app feedback
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                }}
            />
            <TouchableOpacity style={{
                marginTop: "10%",
                paddingTop: "2%",
                paddingBottom: "2%",
                margin: "5%",
                width: "50%",
                alignSelf: "center",
                backgroundColor: COLORS.primary,
                borderRadius: 30,
            }}
                onPress={() => navigation.navigate('Account_app_feedback')}
            >
                <Text style={{
                    textAlign: "center", color: COLORS.white2,
                    ...FONTS.h4,
                    marginHorizontal: SIZES.padding,
                }}>
                    Log Out 
                </Text>
            </TouchableOpacity>
            <View // This is the line for app feedback
                style={{
                    borderBottomColor: COLORS.linelightGray,
                    borderBottomWidth: 1,
                    paddingTop: SIZES.padding,
                    paddingBottom: (SIZES.padding * 2)
                }}
            />

        </ScrollView>
    )
}
export default Account;