import axios from "axios";
import { useState } from "react";
const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
    params: {
        from:'0',
        size:'20'
    },

    headers: {
        "X-RapidAPI-Key": " 234862e420msh131e167265239c2p189e04jsnf4df89847941",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
};



const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchRecipes = async (searchTerm) => {
        setLoading(true);
        setRecipes(null);
        setError(null);
        try {

            const reqOptions = { ...options };

            reqOptions.params.q = searchTerm;

            const response = await
                axios.request(reqOptions);
            setRecipes(response.data.results);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return [fetchRecipes, { data: recipes, loading, error }];
};

export default useFetchRecipes;