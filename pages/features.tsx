import React from "react";
import { Box } from "@mui/material";
import data from "../data/feature-page-data.json"
import { useState } from "react";
import TextAndImageContainer from "../components/shared/TextAndImageContainer";
import FeaturesContainer from "../components/shared/FeaturesContainer";
import BetaAnnouncement from "../components/shared/BetaAnnouncement";


//pages/features.tsx


const features = () => {
    const data =
    {
        src: "/assets/images/features/hero.jpg",
        heading: "No Photo Upload Limit",
        description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
        cta: ""

    };

    return (
        <Box>
            <TextAndImageContainer data={data} />
            <FeaturesContainer />
            <BetaAnnouncement />
        </Box>
    );
};

export default features;