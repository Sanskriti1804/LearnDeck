import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'


const hello = () => {
  return (
    <View>
      <Image source={require("@/assets/images/down.jpg")}/>
      <Text>hello</Text>
    </View>
  )
}

export default hello

const styles = StyleSheet.create({})