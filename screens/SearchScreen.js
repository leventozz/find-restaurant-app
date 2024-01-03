import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList';



export default function SearchScreen() {
    const [searchApi, results] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        <View>
            <SearchBar />
            <ResultList title='Cheap Restaurants' results={filterResultByPrice('₺')} />
            <ResultList title='Affordable Restaurants' results={filterResultByPrice('₺₺')} />
            <ResultList title='Expensive Restaurants' results={filterResultByPrice('₺₺₺')} />
        </View>
    )
}

const styles = StyleSheet.create({})