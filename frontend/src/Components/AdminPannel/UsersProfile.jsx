import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UsersProfile = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/users')
            .then((res) => {
                setData(res.data);
                setLoading(false); 
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default UsersProfile;
