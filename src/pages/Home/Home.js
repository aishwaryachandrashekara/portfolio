import React from 'react';
import { Container, Grid2, Box, Typography, Paper } from '@mui/material';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import TableauDashboard from '../../components/TableauDashboard/TableauDashboard';
import homeConfig from '../../assets/configs/homeConfig';
import { FaChartBar, FaBrain, FaDatabase, FaChartLine } from 'react-icons/fa';

const Home = () => {
    const stats = [
        { icon: <FaChartBar size={24} />, label: "Projects Completed", value: "50+" },
        { icon: <FaBrain size={24} />, label: "ML Models Built", value: "30+" },
        { icon: <FaDatabase size={24} />, label: "Datasets Analyzed", value: "100+" },
        { icon: <FaChartLine size={24} />, label: "Accuracy Achieved", value: "95%" }
    ];

    return (
        <section>
            <Container maxWidth="xl" className="home-content" id="home">
                <Grid2 container spacing={4}>
                    {/* Hero Section */}
                    <Grid2 item xs={12}>
                        <Box sx={{ 
                            textAlign: 'center',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'radial-gradient(circle at center, rgba(33, 150, 243, 0.1) 0%, rgba(33, 203, 243, 0.05) 100%)',
                                zIndex: -1,
                            }
                        }}>
                            <Typography 
                                variant="h1" 
                                sx={{ 
                                    fontSize: '3.5em',
                                    fontWeight: 700,
                                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    mb: 3
                                }}
                            >
                                {homeConfig.greeting}
                            </Typography>
                            <Box sx={{ textAlign: 'center', mb: 4 }}>
                                <DynamicTyping titles={homeConfig.titles} />
                            </Box>
                        </Box>
                    </Grid2>


                    {/* About Section */}
                    <Grid2 item xs={12}>
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
                            <About about={homeConfig.about} />
                        </Paper>
                    </Grid2>

                    
                </Grid2>
            </Container>

            {/* Timeline Section */}
            <Container maxWidth="xl" className="resume-content" id="resume" sx={{ mt: 8 }}>
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
                    <Timeline items={homeConfig.workTimeline} />
                </Paper>
            </Container>
        </section>
    );
}

export default Home;
