import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import ThemedView from './ThemedView'

type CardProps = ViewProps;

export default function ThemedCard({
    style, children, ...props
} : CardProps) {
  return (
    <ThemedView style={styles.card} {...props}>
      {children}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    card: {
    padding: 16,
    borderRadius: 16,
    height : 200,
    width : 250,
    backgroundColor : "pink"
    }
})