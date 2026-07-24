import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type AppIconProps = {
    name : React.ComponentProps<typeof Ionicons>["name"]
    size? : number,
    color? : string,
    style? : StyleProp<TextStyle>
}
export default function ThemedIcon({
    name,
    style,
    size = 24,
    color = "pink"
} : AppIconProps) {
  return (
    <Ionicons name={name} size={size} style={style} color={color}/>
  )
}

