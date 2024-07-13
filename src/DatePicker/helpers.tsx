export const isMonthExpired = (date: string): boolean => {
    const now = new Date();
    const dateObject = new Date(date);
    return dateObject < now;
};

export const isDateToday = (date: string): boolean => {
    const now = new Date();
    now.setHours(12, 0, 0, 0);
    const dateObject = new Date(date);
    dateObject.setHours(12, 0, 0, 0);
    return dateObject.toDateString() === now.toDateString();
};

export const isDateExpired = (date: string): boolean => {
    const now = new Date();
    now.setHours(12, 0, 0, 0);
    const dateObject = new Date(date);
    dateObject.setHours(12, 0, 0, 0);
    return dateObject < now;
};

export const isDateFuture = (date: string): boolean => {
    const now = new Date();
    now.setHours(12, 0, 0, 0);
    const dateObject = new Date(date);
    dateObject.setHours(12, 0, 0, 0);
    return dateObject > now;
};

export const getDateStringFromDate = (date: Date): string => {
    return date.toISOString().slice(0, 10);
};

export const getCurrentMonthDateString = (props: {
    min?: string;
    max?: string;
}): string => {
    const now = new Date();
    now.setDate(1);
    now.setHours(12, 0, 0, 0);

    let minRange: '' | Date = '';
    let maxRange: '' | Date = '';

    if (props.min) {
        minRange = new Date(props.min);
        minRange.setDate(1);
        minRange.setHours(12, 0, 0, 0);
    }

    if (props.max) {
        maxRange = new Date(props.max);
        maxRange.setDate(1);
        maxRange.setHours(12, 0, 0, 0);
    }

    if (minRange && now < minRange) {
        return getDateStringFromDate(minRange);
    }

    if (maxRange && now > maxRange) {
        return getDateStringFromDate(maxRange);
    }

    return getDateStringFromDate(now);
};

export const getNextMonthDate = (date: string): string => {
    const dateObject = new Date(date);

    dateObject.setHours(12, 0, 0, 0);
    dateObject.setMonth(dateObject.getMonth() + 1, 1);

    const getDateStringFromDate = (date: Date): string => {
        return date.toISOString().slice(0, 10);
    };

    return getDateStringFromDate(dateObject);
};

export const getPrevMonthDate = (date: string): string => {
    const dateObject = new Date(date);

    dateObject.setHours(12, 0, 0, 0);
    dateObject.setDate(1);
    dateObject.setMonth(dateObject.getMonth() - 1);

    const getDateStringFromDate = (date: Date): string => {
        return date.toISOString().slice(0, 10);
    };

    return getDateStringFromDate(dateObject);
};

export const sortDates = (
    date1: string,
    date2: string
): { date1: string; date2: string } => {
    const date1Object = new Date(date1);
    const date2Object = new Date(date2);

    if (date1Object < date2Object) {
        return { date1, date2 };
    }

    return { date1: date2, date2: date1 };
};

export const isDateBetween = (
    date1: string,
    date2: string,
    date: string
): boolean => {
    const { date1: startDate, date2: endDate } = sortDates(date1, date2);

    const dateObject = new Date(date);
    const date1Object = new Date(startDate);
    const date2Object = new Date(endDate);

    dateObject.setHours(12, 0, 0, 0);
    date1Object.setHours(12, 0, 0, 0);
    date2Object.setHours(12, 0, 0, 0);

    return dateObject >= date1Object && dateObject <= date2Object;
};
