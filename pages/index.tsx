import { RepeatOneSharp } from "@mui/icons-material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import TextAndImageContainer from "../components/shared/TextAndImageContainer";
import { Box } from "@mui/material";
import HomeGalleryContainer from "../components/home/HomeGalleryContainer";
import Feature from "../components/shared/Feature";
import FeaturesContainer from "../components/shared/FeaturesContainer";


const Home: NextPage = () => {
  const [data, setData] = useState([{ src: "", heading: "", description: "", cta: "" }]);

  useEffect(() => {
    fetch("/api/home")
      .then((response) => response.json())
      .then((info) => setData(info));
  }, []);

  console.log(data);


  return (
    <div>
      <Head>
        <title>Daniel Müller</title>
        <meta name="description" content="About me and what I do" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Pasted content from components folder. A box = div */}
      <Box>
        {data.map((info) => {
          return <TextAndImageContainer data={info}
            key={info.src}
          />;
        })}
      </Box>
      <HomeGalleryContainer />
      <FeaturesContainer />

    </div>
  );
};

export default Home;
