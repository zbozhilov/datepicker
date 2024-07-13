import React from 'react';
import DatePicker from './DatePicker/DatePicker';

function App() {
    return (
        <div
            className='App'
            style={{ maxWidth: 700, margin: '100px auto' }}
        >
            <DatePicker
                onChange={(from, to) => {
                    console.log('from:', from);
                    console.log('to:', to);
                }}
                dual={true}
                minRange={'2024-01'}
                maxRange={'2024-12'}
                disallowExpired={true}
                disallowFuture={false}
                dayLabels={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
                monthLabels={[
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
                ]}
            />
        </div>
    );
}

export default App;
