import { useState } from 'react';

const useModal = (initialState = false) => {
    // State to store the IDs of hovered links
    const [hoveredLinkIds, setHoveredLinkIds] = useState([]);

    // Function to handle mouse enter event for links
    const handleMouseEnter = (linkId) => {
        // Update the hovered link IDs array with the current link ID
        setHoveredLinkIds([linkId]);
    };

    // Function to handle mouse leave event for links
    const handleMouseLeave = () => {
        setHoveredLinkIds([]);
    };

    // Function to check if a link with the given ID is hovered
    const isLinkHovered = (linkId) => {
        // Check if the hovered link IDs array contains the given link ID
        return hoveredLinkIds.includes(linkId);
    };

    return { handleMouseEnter, handleMouseLeave, isLinkHovered };
};

export default useModal;