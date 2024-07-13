import React from 'react';

const DayLabels = ({ dayLabels }: { dayLabels: string[] }) => {

    return (
        <div className='ststr-datepicker-calendar-daylabels'>
            {dayLabels.map((label, index) => {
                return (
                    <div
                        key={index}
                        className='ststr-datepicker-calendar-daylabels-label'
                    >
                        {label}
                    </div>
                );
            })}
        </div>
    );
};

export default DayLabels;
