import React, { useEffect, useState } from 'react';
import './DynamicCalendar.css'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Tilt from 'react-tilt';

const DynamicCalendar = () => {
    const [value, onChange] = useState(new Date());

    const createDailyTask = () => {
        console.log(`TODO FORM COMING SOON`);
    }

    return (
        <div className="calendar__wrapper">
            <section>
                <div className="box">
                   <Tilt className="container" options={{ max : 15, speed: 400, }}>
                        <Calendar value={value} onChange={onChange} onClickDay={createDailyTask}></Calendar>
                   </Tilt>
                </div>
            </section>
        </div>
    )
}

export default DynamicCalendar
