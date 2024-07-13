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
}

export const isDateExpired = (date: string): boolean => {
    const now = new Date();
    now.setHours(12, 0, 0, 0);
    const dateObject = new Date(date);
    dateObject.setHours(12, 0, 0, 0);
    return dateObject < now;
}

export const isDateFuture = (date: string): boolean => {
    const now = new Date();
    now.setHours(12, 0, 0, 0);
    const dateObject = new Date(date);
    dateObject.setHours(12, 0, 0, 0);
    return dateObject > now;
}

export const getDateStringFromDate = (date: Date): string => {
    return date.toISOString().slice(0, 10);
}

export const getCurrentMonthDateString = (): string => {
    const now = new Date();
    now.setDate(1);
    now.setHours(12, 0, 0, 0);
    return getDateStringFromDate(now);
}

export const getNextMonthDate = (date: string): string => {
    const dateObject = new Date(date);

    dateObject.setHours(12, 0, 0, 0);
    dateObject.setMonth(dateObject.getMonth() + 1, 1);

    const getDateStringFromDate = (date: Date): string => {
        return date.toISOString().slice(0, 10);
    };

    return getDateStringFromDate(dateObject);
}

export const getPrevMonthDate = (date: string): string => {
    const dateObject = new Date(date);

    dateObject.setHours(12, 0, 0, 0);
    dateObject.setDate(1);
    dateObject.setMonth(dateObject.getMonth() - 1);

    const getDateStringFromDate = (date: Date): string => {
        return date.toISOString().slice(0, 10);
    };

    return getDateStringFromDate(dateObject);
}