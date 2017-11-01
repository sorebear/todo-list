import React from 'react';

const backgroundImages = [
    "cloth",
    "cloudy-day",
    "congruent_pentagon",
    "dimension",
    "eight_horns",
    "ep_naturalwhite",
    "paisley",
    "pixel_weave",
    "pow-star",
    "regal",
    "restaurant",
    "sakura",
    "seigaiha",
    "skulls",
    "small_steps",
    "swirl_pattern",
    "symphony",
    "topography",
    "tree_bark",
    "triangular",
    "upfeathers",
    "wild_flowers"
]

export default (props) => {
    return (
        <div className={`pattern ${backgroundImages[props.index]}`}></div>
    )
}