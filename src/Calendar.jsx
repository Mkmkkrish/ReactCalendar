import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());
    const [filterDate, setFilterDate] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const onChange = (date) => {
        setDate(date);
    };

    const handleFilterChange = (event) => {
        setFilterDate(event.target.value);
    };

    return (
        <div className="calendar-container">
            <input
                type="date"
                value={filterDate}
                onChange={handleFilterChange}
                placeholder="Filter by date"
            />
            <Calendar onChange={onChange} value={date} />
            <div className="selected-date">
                <h3>Selected Date:</h3>
                <p>{date.toDateString()} {currentTime}</p>
            </div>
            <div className="filtered-date">
                <h3>Filtered Date:</h3>
                <p>{filterDate}</p>
            </div>
        </div>
    );
};

export default CalendarComponent;