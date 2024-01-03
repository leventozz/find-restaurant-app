import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const useResults = () => {
    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm) => {
        const response = await yelp.get('/search', {
            params: {
                limit: 15,
                term: searchTerm,
                location: 'İstanbul',
            },
        });
        setResults(response.data.businesses);
    };

    useEffect(() => {
        searchApi('Toast');
    }, []);

    return [searchApi, results];
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