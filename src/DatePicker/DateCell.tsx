import React from 'react';
import { isDateExpired, isDateFuture, isDateToday } from './helpers';

const DateCell = (props: { date?: string; isEmpty?: boolean }) => {

    const getClassName = (): string => {

        const classNameArray = ['ststr-datepicker-calendar-date'];

        if (props.isEmpty) {
            classNameArray.push('ststr-datepicker-calendar-date-empty');
        }

        if (!props.isEmpty) {
            if (props.date && isDateExpired(props.date)) {
                classNameArray.push('ststr-datepicker-calendar-date-expired');
            }

            if (props.date && isDateFuture(props.date)) {
                classNameArray.push('ststr-datepicker-calendar-date-future');
            }

            if (props.date && isDateToday(props.date)) {
                classNameArray.push('ststr-datepicker-calendar-date-today');
            }
        }

        return classNameArray.join(' ');
    };

    return (
        <div className={getClassName()}>
            {props.date && !props.isEmpty && (
                <div className='ststr-datepicker-calendar-date-inner'>
                    <span className='ststr-datepicker-calendar-date-text'>
                        {props.date.split('-')[2]}
                    </span>
                </div>
            )}
        </div>
    );
};

export default DateCell;
