import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/all-course');
                setCourses(response.data.course);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <Context.Provider value={{ courses }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
export { ContextProvider };
