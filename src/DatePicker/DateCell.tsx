import React from 'react';
import {
    isDateBetween,
    isDateExpired,
    isDateFuture,
    isDateToday,
    sortDates,
} from './helpers';

const DateCell = (props: {
    date1?: string;
    date2?: string;
    date?: string;
    isEmpty?: boolean;
    onDateSelect?: (date: string) => void;
}) => {
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

            if (
                props.date &&
                (props.date === props.date1 || props.date === props.date2)
            ) {
                classNameArray.push('ststr-datepicker-calendar-date-selected');

                if (props.date1 && props.date2) {
                    const sortedDates = sortDates(props.date1, props.date2);
                    const { date1: minDate, date2: maxDate } = sortedDates;

                    if (props.date === minDate) {
                        classNameArray.push(
                            'ststr-datepicker-calendar-date-selected-start'
                        );
                    }

                    if (props.date === maxDate) {
                        classNameArray.push(
                            'ststr-datepicker-calendar-date-selected-end'
                        );
                    }
                }
            }

            if (props.date && props.date1 && props.date2) {
                
                const searchFor = [
                    'ststr-datepicker-calendar-date-selected-start',
                    'ststr-datepicker-calendar-date-selected-end',
                ];

                if (false === classNameArray.some((test) => searchFor.includes(test))) {
                    if (isDateBetween(props.date1, props.date2, props.date)) {
                        classNameArray.push(
                            'ststr-datepicker-calendar-date-between'
                        );
                    }
                }
            }
        }

        return classNameArray.join(' ');
    };

    return (
        <div className={getClassName()}>
            {props.date && !props.isEmpty && (
                <div
                    className='ststr-datepicker-calendar-date-inner'
                    onClick={() => {
                        if (props.onDateSelect && props.date) {
                            props.onDateSelect(props.date);
                        }
                    }}
                >
                    <span className='ststr-datepicker-calendar-date-text'>
                        {props.date.split('-')[2]}
                    </span>
                </div>
            )}
        </div>
    );
};

export default DateCell;
