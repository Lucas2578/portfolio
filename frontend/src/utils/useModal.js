import { useState } from 'react';

const useModal = (initialState = false) => {
    // State to store the ID of hovered item (skill or GitHub)
    const [hoveredItemId, setHoveredItemId] = useState(null);

    // Function to handle mouse enter event for skills or GitHub link
    const handleMouseEnter = (itemId) => {
        // Update the hovered item ID
        setHoveredItemId(itemId);
    };

    // Function to handle mouse leave event for skills or GitHub link
    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    // Function to check if a skill with the given ID is hovered
    const isItemHovered = (itemId) => {
        // Check if the given item ID matches the hovered item ID
        return String(hoveredItemId) === String(itemId);
    };

    return { handleMouseEnter, handleMouseLeave, isItemHovered };
};

export default useModal;