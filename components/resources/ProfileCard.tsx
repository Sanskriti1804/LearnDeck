import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedCard from '../themedUi/ThemedCard'
import ThemedText from '../themedUi/ThemedText'

export default function ProfileCard() {
  return (
    <ThemedCard>
        <ThemedText style= {{color : "white", fontSize : 40, fontWeight : "bold"}}>HELLO I AM SUNS</ThemedText>
        <ThemedText style= {{color : "white", fontSize : 40, fontWeight : "bold"}}> I 💗 U</ThemedText>
    </ThemedCard>
  )
}

