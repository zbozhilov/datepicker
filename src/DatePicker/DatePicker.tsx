import React from 'react';
import { DatePickerProps } from './DatePickerProps';
import './DatePicker.scss';
import Calendar from './Calendar';
import {
    getCurrentMonthDateString,
    getNextMonthDate,
    getPrevMonthDate,
} from './helpers';

const DatePicker = (props: DatePickerProps) => {
    
    const [navDate, setNavDate] = React.useState<string>(
        getCurrentMonthDateString()
    );

    const getClassName = (): string => {
        const classNameArray = ['ststr-datepicker'];

        if (props.dual) {
            classNameArray.push('ststr-datepicker-dual');
        }

        if (props.disallowExpired) {
            classNameArray.push('ststr-datepicker-disallow-expired');
        }

        if (props.disallowFuture) {
            classNameArray.push('ststr-datepicker-disallow-future');
        }

        return classNameArray.join(' ');
    };

    const handlePrevClick = () => {
        setNavDate((date) => {
            return getPrevMonthDate(date);
        });
    };

    const handleNextClick = () => {
        setNavDate((date) => {
            return getNextMonthDate(date);
        });
    };

    const getShouldDisablePrev = (): boolean => {
        if (typeof props.minRange === 'string' && props.minRange.length > 0) {
            const minRangeObject = new Date(props.minRange);
            minRangeObject.setDate(1);
            minRangeObject.setHours(0, 0, 0, 0);

            const navObject = new Date(navDate);
            navObject.setDate(1);
            navObject.setHours(0, 0, 0, 0);

            return navObject <= minRangeObject;
        }

        return false;
    };

    const getShouldDisableNext = (): boolean => {
        if (typeof props.maxRange === 'string' && props.maxRange.length > 0) {
            const maxRangeObject = new Date(props.maxRange);
            maxRangeObject.setDate(1);
            maxRangeObject.setHours(0, 0, 0, 0);

            const navObject = new Date(navDate);
            navObject.setDate(1);
            navObject.setHours(0, 0, 0, 0);

            if (props.dual) {
                navObject.setMonth(navObject.getMonth() + 1);
            }

            return navObject >= maxRangeObject;
        }

        return false;
    };

    return (
        <div className={getClassName()}>
            <Calendar
                dayLabels={props.dayLabels}
                monthLabels={props.monthLabels}
                date={navDate}
                prevButtonDisabled={getShouldDisablePrev()}
                nextButtonDisabled={props?.dual || getShouldDisableNext()}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
            />
            {props.dual && (
                <Calendar
                    dayLabels={props.dayLabels}
                    monthLabels={props.monthLabels}
                    date={getNextMonthDate(navDate)}
                    prevButtonDisabled={props?.dual}
                    nextButtonDisabled={getShouldDisableNext()}
                    onPrevClick={handlePrevClick}
                    onNextClick={handleNextClick}
                />
            )}
        </div>
    );
};

export default DatePicker;
