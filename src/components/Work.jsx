import React from "react";
import TiltedCard from "./TitledCard";
import moodify from "/img1_.png";

export const Work = () => {
    return (
        <div>
            <h1>Work</h1>
            <TiltedCard
                imageSrc={moodify}
                altText="moodify * 2025"
                captionText="Moodify"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="500px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                circle="MOODIFY*MOODIFY*MOODIFY*"
                desc="Moodify is a web application that allows users to search for songs based on their mood."
                overlayContent={
                    <p className="tilted-card-demo-text">
                    Moodify
                    </p>
                }
                />
        </div>
    );
}