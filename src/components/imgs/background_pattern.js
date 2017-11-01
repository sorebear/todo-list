import React from 'react';

const backgroundImages = [
    "cloth",
    "dimension",
    "eight_horns",
    "spiration-light",
    "paisley",
    "pixel_weave",
    "pow-star",
    "regal",
    "seigaiha",
    "small_steps",
    "swirl_pattern",
    "symphony",
    "topography",
    "tree_bark",
    "triangular",
    "wild_flowers"
]

export default (props) => {
    return (
        <div className={`pattern ${backgroundImages[props.index]}`}></div>
    )
}