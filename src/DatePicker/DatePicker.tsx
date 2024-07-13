import React from 'react';
import { DatePickerProps } from './DatePickerProps';
import './style/DatePicker.scss';
import Calendar from './Calendar';
import {
    getCurrentMonthDateString,
    getNextMonthDate,
    getPrevMonthDate,
    isDateExpired,
    isDateFuture,
    sortDates,
} from './helpers';

import { useEffect, useState } from 'react';

const DatePicker = (props: DatePickerProps) => {

    const [navDate, setNavDate] = useState<string>(getCurrentMonthDateString({
        min: props.minRange,
        max: props.maxRange,
    }));

    const [date1, setDate1] = useState<string>(props.date1 || '');
    const [date2, setDate2] = useState<string>(props.date2 || '');

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

        if (props.className) {
            classNameArray.push(props.className);
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

    const handleDateSelect = (date: string) => {
        const reset = () => {
            setDate1('');
            setDate2('');
        };

        if (props.disallowExpired) {
            if (isDateExpired(date)) {
                return;
            }
        }

        if (props.disallowFuture) {
            if (isDateFuture(date)) {
                return;
            }
        }

        if (!date1) {
            setDate1(date);
        } else {
            if (date2) {
                reset();

                if (date !== date2) {
                    setDate1(date);
                }
            } else {
                if (date1 === date) {
                    reset();
                } else {
                    setDate2(date);
                }
            }
        }
    };

    const getShouldDisablePrev = (): boolean => {
        if (typeof props.minRange === 'string' && props.minRange.length === 7) {
            const minRangeObject = new Date(`${props.minRange}-01`);
            minRangeObject.setHours(0, 0, 0, 0);

            const navObject = new Date(navDate);
            navObject.setDate(1);
            navObject.setHours(0, 0, 0, 0);

            return navObject <= minRangeObject;
        }

        return false;
    };

    const getShouldDisableNext = (): boolean => {
        if (typeof props.maxRange === 'string' && props.maxRange.length === 7) {
            const maxRangeObject = new Date(`${props.maxRange}-01`);
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

    /**
     * * Update parent component when date1 or date2 changes
     */
    useEffect(() => {
        if (date1 && date2) {
            const { date1: from, date2: to } = sortDates(date1, date2);
            props.onChange(from, to);
        } else if (date1 || date2) {
            const from = date1 || date2;
            props.onChange(from, '');
        } else {
            props.onChange('', '');
        }
    }, [date1, date2, props]);

    /**
     * * Reset when minRange, maxRange, disallowExpired, or disallowFuture changes
     */
    useEffect(()=>{

        setDate1('');
        setDate2('');

        const newDate = getCurrentMonthDateString({
            min: props.minRange,
            max: props.maxRange,
        });

        setNavDate(newDate);

    }, [props.minRange, props.maxRange, props.disallowExpired, props.disallowFuture]);

    return (
        <div className={getClassName()}>
            <Calendar
                date1={date1}
                date2={date2}
                dayLabels={props.dayLabels}
                monthLabels={props.monthLabels}
                date={navDate}
                prevButtonDisabled={getShouldDisablePrev()}
                nextButtonDisabled={props?.dual || getShouldDisableNext()}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
                onDateSelect={handleDateSelect}
            />
            {props.dual && (
                <Calendar
                    date1={date1}
                    date2={date2}
                    dayLabels={props.dayLabels}
                    monthLabels={props.monthLabels}
                    date={getNextMonthDate(navDate)}
                    prevButtonDisabled={props?.dual}
                    nextButtonDisabled={getShouldDisableNext()}
                    onPrevClick={handlePrevClick}
                    onNextClick={handleNextClick}
                    onDateSelect={handleDateSelect}
                />
            )}
        </div>
    );
};

export default DatePicker;
