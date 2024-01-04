import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList';



export default function SearchScreen() {
    const [searchApi, results, errorMsg] = useResults();
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
                onTermSubmit={() => searchApi(term)}
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}

            {results.length === 0 ? (
                <Text style={styles.empty}>Couldn't Find Anything!</Text>
            ) : (
                <>
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
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    empty: {
        marginTop: '50%',
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        marginLeft:10
    }
})