import React from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'
import { colors } from "@/constants/theme";


type ThemedViewProps = ViewProps;

function ThemedView({style, children, ...props} : ThemedViewProps) {
  return (
    <View
    style = {[
        styles.container,
        style,
    ]} {...props}
    >
        {children}
    </View>
  )
}

export default ThemedView

const styles = StyleSheet.create({

    container: {
        backgroundColor: "red"
    },

});