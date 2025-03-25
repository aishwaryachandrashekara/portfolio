import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Resume = () => {
    return (
        <section id="resume">
            <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h3" component="h1" sx={{ color: '#263238', mb: 4 }}>
                    <strong>Resume</strong>
                </Typography>
                <Paper 
                    elevation={3}
                    sx={{ 
                        p: 4,
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 2
                    }}
                >
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        You can download my resume in PDF format:
                    </Typography>
                    <Box 
                        component="a" 
                        href="/Aishwarya_Chandrashekara's_resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        sx={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            '&:hover': {
                                backgroundColor: '#1976D2',
                            }
                        }}
                    >
                        Download Resume
                    </Box>
                </Paper>
            </Box>
        </section>
    );
}

export default Resume; 