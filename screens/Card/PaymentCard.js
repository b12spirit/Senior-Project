import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import { Header, IconButton, TextButton, CardItem } from "../../components";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

const PaymentCard = ({ navigation }) => {

    const [selectedCard, setSelectedCard] = React.useState(null)

    function renderHeader() {
        return (
            <Header
                title="My Cards"

                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.white
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }

    {/* This will render the cards */ }
    function renderMyCards() {
        return (
            <View >

                {dummyData.myCards.map((item, index) => {
                    {/* This will return the displayed item in this case is a map with multiple 'cards' */ }
                    return (
                        <CardItem
                            key={`MyCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
                        />
                    )
                })}
            </View>
        )
    }

    function renderAddNewCard() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>Add new card</Text>

                {dummyData.allCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`NewCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `NewCard-${item.id}`}
                            onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
                        />
                    )
                })}
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    disabled={selectedCard == null}
                    buttonContainerStyle={{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: selectedCard == null ? COLORS.darkGray2 : COLORS.primary

                    }}
                    label={selectedCard?.key == "NewCard" ? "Add" : "Place Order"}
                    onPress={() => {
                        if (selectedCard?.key == "NewCard") {
                            navigation.navigate("AddCard", { selectedCard: selectedCard })
                        } else {
                            navigation.navigate("Checkout", { selectedCard: selectedCard })
                        }
                    }}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1, backgroundColor: COLORS.gray
            }}
        >
            {/* Header */}
            {renderHeader()}
            <View style={{
                flex: 1, backgroundColor: COLORS.grey
            }}
            >
                {/* Cards */}
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        marginTop: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        paddingBottom: SIZES.radius,
                    }}
                >
                    {/* My Cards */}
                    {renderMyCards()}

                    {/* Add New Card */}
                    {renderAddNewCard()}
                </ScrollView>
                {/* Footer */}
                {renderFooter()}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
    },
});

export default PaymentCard;