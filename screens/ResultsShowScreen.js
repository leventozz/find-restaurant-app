import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default function ResultsShowScreen({ route }) {
    const [result, setResult] = useState(null)

    const id = route.params.id
    const getResult = async () => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    //waiting for data
    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.rating}>{result.rating} ★ Rating</Text>
            <Text style={styles.phone}>Phone: {result.phone}</Text>
            {
                result.is_closed ? <Text style={styles.closed}>Closed</Text> : <Text style={styles.open}>Open Now</Text>
            }

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10
    },
    image: {
        height: 180,
        width: 300,
        marginHorizontal: 10,
        borderRadius: 20
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    phone: {
        fontSize: 15,
    },
    rating: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    closed: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 5
    },
    open:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 5
    }
})
