import React from 'react';
import DateCell from './DateCell';

const Dates = (props: {
    date1: string;
    date2: string;
    date: string;
    onDateSelect: (date: string) => void;
}) => {
    const dateObject = new Date(props.date);
    const daysInMonth = new Date(
        dateObject.getFullYear(),
        dateObject.getMonth() + 1,
        0
    ).getDate();
    const dayOffset = new Date(
        dateObject.getFullYear(),
        dateObject.getMonth(),
        1
    ).getDay();

    return (
        <div className='ststr-datepicker-calendar-dates'>
            {Array.from(Array(dayOffset).keys()).map((day, index) => {
                return (
                    <DateCell
                        key={`date-cell-empty-${index}`}
                        isEmpty={true}
                    />
                );
            })}

            {Array.from(Array(daysInMonth).keys()).map((day, index) => {
                const dayValue = day + 1;
                const dateString = `${dateObject.getFullYear()}-${
                    dateObject.getMonth() + 1
                }-${dayValue}`;
                return (
                    <DateCell
                        key={`date-cell-${dayValue}`}
                        date={dateString}
                        onDateSelect={props.onDateSelect}
                        date1={props.date1}
                        date2={props.date2}
                    />
                );
            })}
        </div>
    );
};

export default Dates;
