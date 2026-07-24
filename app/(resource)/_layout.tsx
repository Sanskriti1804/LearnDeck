import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function ResourceLayout() {
 return(
    <Stack screenOptions={{
        headerShown : false, 
        animation : "slide_from_bottom"
    }}>
        <Stack.Screen name='[resId]'/>
        <Stack.Screen name='comment'/>
        <Stack.Screen name='index'/>

    </Stack>
 )
}

const styles = StyleSheet.create({})