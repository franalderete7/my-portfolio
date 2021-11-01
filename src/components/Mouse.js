import React from 'react'
import MouseParticles from 'react-mouse-particles'

export default function Mouse() {
    return (
    <div>
    <MouseParticles g={1} num={1} color="random" cull="stats,image-wrapper" level={6} />
    </div>
    );
}
