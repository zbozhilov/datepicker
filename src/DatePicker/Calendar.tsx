import React from 'react';
import Header from './Header';
import DayLabels from './DayLabels';
import Dates from './Dates';

const Calendar = (props: {
    dayLabels: string[];
    monthLabels: string[];
    date: string;
    nextButtonDisabled?: boolean;
    prevButtonDisabled?: boolean;
    disallowExpired?: boolean;
    onPrevClick: () => void;
    onNextClick: () => void;
}) => {
    return (
        <div className='ststr-datepicker-calendar'>
            <Header
                monthLabels={props.monthLabels}
                date={props.date}
                nextButtonDisabled={props.nextButtonDisabled}
                prevButtonDisabled={props.prevButtonDisabled}
                onPrevClick={props.onPrevClick}
                onNextClick={props.onNextClick}
            />

            <DayLabels dayLabels={props.dayLabels} />

            <Dates date={props.date} />
        </div>
    );
};

export default Calendar;
