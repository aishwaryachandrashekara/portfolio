import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { AiFillEye } from 'react-icons/ai';
import CardIcons from '../Cards/CardIcons';

const TableauDashboard = () => {
    const [showDashboard, setShowDashboard] = useState(false);

    useEffect(() => {
        if (showDashboard) {
            const script = document.createElement('script');
            script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [showDashboard]);

    const dashboardItem = {
        title: "Electric Vehicle Data Analysis",
        description: "Features include sales analysis, market penetration, and regional distribution.",
        image: "https://public.tableau.com/static/images/Da/Dataanalysisproject_17428342649160/Dashboard1/1.png",
         target: "_blank",
        links: [
            {
                name: "view",
                url: "https://public.tableau.com/app/profile/aishwarya.chandrashekara/viz/Dataanalysisproject_17428342649160/Dashboard1?publish=yes",
                icon: <AiFillEye/>,
               
            }
        ]
    };

    return (
        <>
            {!showDashboard ? (
                <Card sx={{ 
                    width: 380, 
                    height: 420, 
                    m: 2, 
                    backgroundColor: '#F6F6F6', 
                    boxShadow: 3, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between' 
                }}>
                    <CardMedia
                        component="div"
                        sx={{
                            backgroundImage: `url(${dashboardItem.image})`,
                            height: 220,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        alt={dashboardItem.title}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" component="div" textAlign="center">
                                <strong>{dashboardItem.title}</strong>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" textAlign="center" sx={{ mt: 1 }}>
                                {dashboardItem.description}
                            </Typography>
                        </Box>
                        <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                        <CardIcons item={dashboardItem} sx={{ py: 0.3 }} />
                    </CardContent>
                </Card>
            ) : (
                <Box sx={{ width: '100%', position: 'relative', height: '100vh', backgroundColor: '#F6F6F6', p: 2, borderRadius: 2 }}>
                    <Button 
                        variant="contained"
                        onClick={() => setShowDashboard(false)}
                        sx={{ 
                            position: 'absolute',
                            right: 16,
                            top: 16,
                            zIndex: 1,
                            backgroundColor: '#2196F3',
                            '&:hover': {
                                backgroundColor: '#1976D2'
                            }
                        }}
                    >
                        Close Dashboard
                    </Button>
                    <div 
                        className='tableauPlaceholder' 
                        id='viz1742834326990' 
                        style={{ 
                            position: 'relative',
                            width: '100%',
                            height: 'calc(100vh - 100px)',
                            margin: '0 auto',
                            marginTop: '50px'
                        }}
                    >
                        <object 
                            className='tableauViz' 
                            style={{ display: 'none' }}
                        >
                            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                            <param name='embed_code_version' value='3' />
                            <param name='site_root' value='' />
                            <param name='name' value='Dataanalysisproject_17428342649160/Dashboard1' />
                            <param name='tabs' value='no' />
                            <param name='toolbar' value='yes' />
                            <param name='static_image' value='https://public.tableau.com/static/images/Da/Dataanalysisproject_17428342649160/Dashboard1/1.png' />
                            <param name='animate_transition' value='yes' />
                            <param name='display_static_image' value='yes' />
                            <param name='display_spinner' value='yes' />
                            <param name='display_overlay' value='yes' />
                            <param name='display_count' value='yes' />
                            <param name='language' value='en-US' />
                            <param name='filter' value='publish=yes' />
                        </object>
                    </div>
                </Box>
            )}
        </>
    );
};

export default TableauDashboard; 