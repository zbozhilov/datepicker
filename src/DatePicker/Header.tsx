import React from 'react';

const Header = (props: {
    monthLabels: string[];
    date: string;
    nextButtonDisabled?: boolean;
    prevButtonDisabled?: boolean;
    onPrevClick: () => void;
    onNextClick: () => void;
}) => {

    let prevDisabled = props?.prevButtonDisabled || false;
    let nextDisabled = props?.nextButtonDisabled || false;

    const getMonthLabel = () => {
        const date = new Date(props.date);
        return props.monthLabels[date.getMonth()];
    }

    const getLabel = () => {

        const date = new Date(props.date);
        return `${props.monthLabels[date.getMonth()]} ${date.getFullYear()}`;

    }

    return (
        <div className='ststr-datepicker-calendar-header'>
            <div className='ststr-datepicker-calendar-header-nav-prev'>
                {!prevDisabled && (
                    <i
                        className='fa-solid fa-chevron-left'
                        onClick={props.onPrevClick}
                    ></i>
                )}
            </div>

            <div className='ststr-datepicker-calendar-header-label'>
                {getLabel()}
            </div>

            <div className='ststr-datepicker-calendar-header-nav-next'>
                {!nextDisabled && (
                    <i
                        className='fa-solid fa-chevron-right'
                        onClick={props.onNextClick}
                    ></i>
                )}
            </div>
        </div>
    );
};

export default Header;
