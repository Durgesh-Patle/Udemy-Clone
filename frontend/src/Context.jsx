import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
    const [courses, setCourses] = useState([]);
    const [pendingCourse, setPendingCourse] = useState([]);
    const [cart, setCarts] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/all-course');
                const pendingCourses = res.data.course.filter((course) => course.status === "Pending");
                setPendingCourse(pendingCourses);
                const approvedCourses = res.data.course.filter((course) => course.status === "Approved");
                setCourses(approvedCourses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <Context.Provider value={{ pendingCourse, courses, cart, setCarts }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
export { ContextProvider };
