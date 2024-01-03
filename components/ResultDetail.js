import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={result.image_url ? { uri: result.image_url } : null}
            />
            <Text style={styles.name}>{result.name}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{result.rating} rating</Text>
                <Text> out of </Text>
                <Text style={styles.rating}>{result.review_count} reviews</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 9
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 10,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15
    },
    rating: {
        fontWeight: 'bold'
    },
    ratingContainer:{
        flexDirection:'row'
    }
})