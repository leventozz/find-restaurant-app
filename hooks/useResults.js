import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const useResults = () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 25,
                    term: searchTerm,
                    location: 'İstanbul',
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