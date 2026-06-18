// ../useContext/context.jsx
import { createContext, useState } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState('dashboard');

    function handleSelect(item) {
        setSelectedItem(item);
        console.log('Selected:', item);
        // REMOVED: alert(item);  <-- THIS WAS CAUSING THE POPUP
    }

    function handleNavClick(el) {
        console.log(el);
    }

    return (
        <ContentContext.Provider value={{ handleSelect, selectedItem, handleNavClick }}>
            {children}
        </ContentContext.Provider>
    );
};