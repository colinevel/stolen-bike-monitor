import React from 'react';
import DatePicker from 'react-date-picker';


const Calendar = (props) => {
    return (
        <div>
           <DatePicker
            onChange={props.handleStartDateChange} 
            value={props.startDate}
             />
            <DatePicker
            onChange={props.handleEndDateChange} 
            value={props.endDate}
             /> 
        </div>
    )
}

export default Calendar
