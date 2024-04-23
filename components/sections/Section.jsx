"use client"
import React, { useState } from 'react';
import ContentContainer from './ContentContainer.jsx';
import { GiRefinery } from "react-icons/gi";
import { IconContext } from "react-icons";

import './section.css';

// Define your tabs and their respective video content

const Icons = ({props}) => {
    return (
      <IconContext.Provider value={{ color: "#74C0FC", size: "1.5em" }}>
        {props}
      </IconContext.Provider>
    );
  }

const tabContent = {
  Datasets: {
    videoSrc: 'path_to_datasets_video.mp4',
    heading : "",
    line1 : { icon : null, value : "Effortlessly manage visual data from diverse sources" },
    line2 : { icon : null, value : "Track multiple dataset versions for experimentation" },
    line3 : { icon : <Icons props={<GiRefinery/>} />, value : "Refine data using metadata, segmentation, and preprocessing" },
    line4 : { icon : null, value : "Access images and videos via API in over 40 formats" },
    line5 : { icon : null, value : "Utilize semantic search and CLIP vectors for insights" }
  },
  Labeling: {
    videoSrc: 'path_to_labeling_video.mp4',
    heading : "",
    line1 : { icon : null, value : "Swift browser-based labeling" },
    line2 : { icon : null, value : "Automate batch labeling with Auto-annotate API" },
    line3 : { icon : null, value : "Speed up workflows with AI-assisted labeling" },
    line4 : { icon : null, value : "Apply labels instantly with pre-trained models and SAM" },
    line5 : { icon : null, value : "Track image changes with detailed history logs" }
  },
  Models: {
    videoSrc: 'path_to_models_video.mp4',
    heading : "",
    line1 : { icon : null, value : "Swift browser-based labeling" },
    line2 : { icon : null, value : "Automate batch labeling with Auto-annotate API" },
    line3 : { icon : null, value : "Speed up workflows with AI-assisted labeling" },
    line4 : { icon : null, value : "Apply labels instantly with pre-trained models and SAM" },
    line5 : { icon : null, value : "Track image changes with detailed history logs" }
  },
  Deployment: {
    videoSrc: 'path_to_deployment_video.mp4',
    heading : "",
    line1 : { icon : null, value : "Streamline model development and management" },
    line2 : { icon : null, value : "Optimize models for specific data and latency needs" },
    line3 : { icon : null, value : "Train custom models efficiently on hosted GPUs" },
    line4 : { icon : null, value : "Leverage pre-trained models or your own" },
  },
  Collaboration: {
    videoSrc: 'path_to_collaboration_video.mp4',
    heading : "",
    line1 : { icon : null, value : "Effortlessly manage visual data from diverse sources" },
    line2 : { icon : null, value : "Track multiple dataset versions for experimentation" },
    line3 : { icon : null, value : "Refine data using metadata, segmentation, and preprocessing" },
    line4 : { icon : null, value : "Access images and videos via API in over 40 formats" },
    line5 : { icon : null, value : "Utilize semantic search and CLIP vectors for insights" }
  }
};

export default function Section() {
  const [activeTab, setActiveTab] = useState('Datasets');

  const handleVideoEnd = () => {
    // Get the names of the tabs as an array
    const tabNames = Object.keys(tabContent);
    // Find the index of the current tab
    const currentIndex = tabNames.indexOf(activeTab);
    // Calculate the next tab index
    const nextTabIndex = (currentIndex + 1) % tabNames.length;
    // Set the next tab as active
    setActiveTab(tabNames[nextTabIndex]);
  };

  return (
    <div className="app-container">
      <div className="tab-bar">
        {Object.keys(tabContent).map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'active' : ''}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="video-container">
        <video
          key={activeTab}
          onEnded={handleVideoEnd}
          controls
          autoPlay
          className="custom-video-player"
        >
          <source src={tabContent[activeTab].videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ContentContainer activeTab={activeTab} tabContent={tabContent} />
      </div>
    </div>
  );
};

