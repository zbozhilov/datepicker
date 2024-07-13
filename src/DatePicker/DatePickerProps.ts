export interface DatePickerProps {
    dual?: boolean; // Whether to show two calendars side by side
    onDateSelect?: (date: string) => void; // ISO 8601 ex. '2021-01-01'
    date1?: string; // ISO 8601 ex. '2021-01-01'
    date2?: string; // ISO 8601 ex. '2021-01-01'
    minRange?: string; // ISO 8601 ex. '2021-01-01'
    maxRange?: string; // ISO 8601 ex. '2021-01-01'
    disallowExpired?: boolean; // Whether to disallow expired dates
    disallowFuture?: boolean; // Whether to disallow future dates
    monthLabels: string[]; // Array of month labels
    dayLabels: string[]; // Array of day labels
}