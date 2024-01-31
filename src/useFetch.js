import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url).
                then(response => {
                    if (!response.ok) {
                        throw Error("data could not be fetched");
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                }).catch(err => {
                    setError(err.message);
                })
        }, 1000)
    }, [url]);
    return { data, isLoading, error };
}

export default useFetch