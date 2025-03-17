import * as React from "react";

export const useWorkoutTabs = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return {value, handleChange}
}