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
        <View>
            <Text>{result.name}</Text>
            <Text>{result.phone}</Text>
            <FlatList
                data={result.photos}
                renderItem={({ item }) => {
                    return <Image style={{height:100, width:100}} source = {{uri:item}}/>
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})