export interface DatePickerProps {
    className?: string;                               // Custom class name
    dual?: boolean;                                   // Whether to show two calendars side by side
    onDateSelect?: (date: string) => void;            // ISO 8601 ex. '2021-01-01'
    date1?: string;                                   // ISO 8601 ex. '2021-01-01'
    date2?: string;                                   // ISO 8601 ex. '2021-01-01'
    minRange?: string;                                // YYYY-MM ex. '2021-01'
    maxRange?: string;                                // YYYY-MM ex. '2021-01'
    disallowExpired?: boolean;                        // Whether to disallow expired dates
    disallowFuture?: boolean;                         // Whether to disallow future dates
    monthLabels: string[];                            // Array of month labels
    dayLabels: string[];                              // Array of day labels
    onChange: (date1: string, date2: string) => void; // Callback function when date is selected
}