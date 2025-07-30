import React from 'react';
import { Box } from '@mui/material';

const BackgroundVideo = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden',
            }}
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                <source 
                    src="/background-video.mp4" 
                    type="video/mp4" 
                />
                Your browser does not support the video tag.
            </video>
            
            {/* Dark Overlay for Content Readability */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7) 100%)',
                    zIndex: 1,
                }}
            />
        </Box>
    );
};

export default BackgroundVideo; 