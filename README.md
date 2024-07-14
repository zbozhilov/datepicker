# Simple DatePicker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Properties

- **className?**: `string`
  - Custom class name

- **dual?**: `boolean`
  - Whether to show two calendars side by side

- **onDateSelect?**: `(date: string) => void`
  - Callback function for date selection, e.g., '2021-01-01'

- **date1?**: `string`
  - First selected date, e.g., '2021-01-01'

- **date2?**: `string`
  - Second selected date, e.g., '2021-01-01'

- **minRange?**: `string`
  - Minimum date range, e.g., '2021-01'

- **maxRange?**: `string`
  - Maximum date range, e.g., '2021-01'

- **disallowExpired?**: `boolean`
  - Whether to disallow expired dates

- **disallowFuture?**: `boolean`
  - Whether to disallow future dates

- **monthLabels**: `string[]`
  - Array of month labels

- **dayLabels**: `string[]`
  - Array of day labels

- **onChange**: `(date1: string, date2: string) => void`
  - Callback function when date is selected


# Example

```javascript
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
    );
}

export default App;

```
