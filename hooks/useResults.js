import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import * as Location from 'expo-location';

const useResults = () => {
    const [results, setResults] = useState([]);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 25,
                    term: searchTerm,
                    //location: 'İstanbul',
                    latitude:location.coords.latitude,
                    longitude: location.coords.longitude
                },
            });
            setResults(response.data.businesses);
            setErrorMsg('')
        } catch (error) {
            setErrorMsg('Connection Error')
        }
    };

    useEffect(() => {
        searchApi('Toast');
    }, []);

    return [searchApi, results, errorMsg];
};

export default useResults;

// export default () => {

//     const searchApi = async (searchTerm) => {
//         const [results, setResults] = useState([]);
//         const response = await yelp.get('/search', {
//             params: {
//                 limit: 50,
//                 term: searchTerm,
//                 location: 'İstanbul'
//             }
//         });
//         setResults(response)
//     }

//     useEffect(() => {
//         searchApi('Toast');
//     }, [])

//     return [searchApi, results];
// }