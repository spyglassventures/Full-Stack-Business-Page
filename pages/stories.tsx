import React from "react";
import { Box } from "@mui/material";
import StoriesHero from "../components/stories/StoriesHero";
import StoriesGalleryContainer from "../components/stories/StoriesGalleryContainer";

const stories = () => {
    return (
        <Box>
            <StoriesHero />
            <StoriesGalleryContainer />

        </Box>
    );
};

export default stories;