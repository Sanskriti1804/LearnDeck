import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout(){
  return (
    <Stack screenOptions={{
        headerShown : false,
        animation : "slide_from_bottom"
        }}>
        <Stack.Screen name='login' options={{title: "Login"}}/>
        <Stack.Screen name='signup' options={{title: "Create Account"}}/>
        <Stack.Screen name='forgot-password' options={{presentation : "modal", title : "Forgot Password"}}/>
    </Stack>
  );
}

const styles = StyleSheet.create({})