import React from "react";
import { Box } from "@mui/material";
import data from "../data/feature-page-data.json"
import { useState } from "react";
import TextAndImageContainer from "../components/shared/TextAndImageContainer";
import PricingContainer from "../components/pricing/PricingContainer";
import BetaAnnouncement from "../components/shared/BetaAnnouncement";


const pricing = () => {
    const data = {
        src: "/assets/images/features/hero.jpg",
        heading: "FEATURES",
        description: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
        cta: "",
    };


    return (
        <Box>
            <TextAndImageContainer data={data} />
            <PricingContainer />
            <BetaAnnouncement />
        </Box>
    );
};

export default pricing;