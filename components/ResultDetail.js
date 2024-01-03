import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function ResultDetail({result}) {
  return (
    <View>
        <Image 
        style={{width:250, height:120}} 
        source={ result.image_url ? {uri:result.image_url} : null}
        />
      <Text>{result.name}</Text>
      <Text>{result.rating} rating out of {result.review_count} reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({})