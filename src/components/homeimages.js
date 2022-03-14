import React from 'react';
import Card from './Card';
import { Wrapper } from './homeimages.styles';
import { FaRegHeart } from "react-icons/fa";

import img1 from "../img/company1.png";
import img2 from "../img/company2.png";
import img3 from "../img/company3.png";
import img4 from "../img/company4.png";
import img5 from "../img/company5.png";
import img6 from "../img/company6.png";

import video1 from "../video/video1.mp4";
import video2 from "../video/video2.mp4";
import video3 from "../video/video3.mp4";
import video4 from "../video/video4.mp4";
import video5 from "../video/video5.mp4";
import video6 from "../video/video6.mp4";

function Home(){
    return (
        <Wrapper>
            <Card logo={img1} video={video1}/>
            <Card logo={img2} video={video2}/>
            <Card logo={img3} video={video3}/>
            <Card logo={img4} video={video4}/>
            <Card logo={img5} video={video5}/>
            <Card logo={img6} video={video6}/>
        </Wrapper>
        
    );
}
export default Home;