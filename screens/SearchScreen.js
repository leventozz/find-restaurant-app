import { StyleSheet, Text, View } from 'react-native'
import React, {useState}  from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList';



export default function SearchScreen() {
    const [searchApi, results] = useResults();
    const [term, setTerm] = useState('')

    const filterResultByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        <View>
            <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
            <ResultList
                title='Cheap Restaurants'
                results={filterResultByPrice('₺')}
            />
            <ResultList
                title='Affordable Restaurants'
                results={filterResultByPrice('₺₺')}
            />
            <ResultList
                title='Expensive Restaurants'
                results={filterResultByPrice('₺₺₺')}
            />
        </View>
    )
}

const styles = StyleSheet.create({})