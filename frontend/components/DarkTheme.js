import { useEffect, useState } from 'react';
import { Switch } from 'react-native';

const DarkTheme = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "light";

        if (currentTheme === "light") {
            targetTheme = "dark";
        }

        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);

        setIsEnabled(previousState => !previousState);
    }

    useEffect(() => {
        setIsEnabled(true);
        var currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "dark") {
            setIsEnabled(true);
        }
    }, [])


    if (props.shown) 
        return (
            <Switch
                trackColor={'var(--search-box-color)'}
                thumbColor={'var(--primary-app-color)'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        );
    return (<></>)
}


export default DarkTheme;