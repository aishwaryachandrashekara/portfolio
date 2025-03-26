import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { BsDownload } from 'react-icons/bs';

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
                    <Box sx={{ mb: 3 }}>
                        <Button
                            variant="contained"
                            startIcon={<BsDownload />}
                            href="/Aishwarya_Chandrashekara's_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: '#2196F3',
                                '&:hover': {
                                    backgroundColor: '#1976D2',
                                }
                            }}
                        >
                            Download Resume
                        </Button>
                    </Box>
                    
                    <Box 
                        sx={{ 
                            width: '100%', 
                            height: '800px',
                            border: '1px solid #e0e0e0',
                            borderRadius: 1,
                            overflow: 'hidden'
                        }}
                    >
                        <iframe
                            src="/Aishwarya_Chandrashekara's_resume.pdf"
                            width="100%"
                            height="100%"
                            title="Resume Preview"
                            style={{ border: 'none' }}
                        />
                    </Box>
                </Paper>
            </Box>
        </section>
    );
}

export default Resume; 