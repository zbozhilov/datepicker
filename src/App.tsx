import React from 'react';
import DatePicker from './DatePicker/DatePicker';

function App() {
    const dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const monthLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return (
        <div className='demo-wrap'>
            <DatePicker
                onChange={(from, to) => {
                    console.log('from:', from);
                    console.log('to:', to);
                }}
                dual={true}
                minRange={'2024-07'}
                maxRange={'2026-01'}
                disallowExpired={true}
                disallowFuture={false}
                dayLabels={dayLabels}
                monthLabels={monthLabels}
            />
        </div>
    );
}

export default App;
