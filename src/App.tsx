import React from 'react';
import DatePicker from './DatePicker/DatePicker';

function App() {
    return (
        <div
            className='App'
            style={{ maxWidth: 700, margin: '100px auto' }}
        >
            <DatePicker
                dual={true}
                minRange={'2024-07-01'}
                maxRange={'2025-07-01'}
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
