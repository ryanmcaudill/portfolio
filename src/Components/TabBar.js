import React from 'react';
import '../GlobalStyles.css';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const TabBar = () => {
    const [nTabIndex, setTabIndex] = React.useState(0);
    const handleChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };
    const aSections = [
        {
        label: "Home Page",
        icon: <HomeIcon />,
        id: "home",
        contents:<>Home Page</>
        },
        {
        label: "About Me",
        icon: <FavoriteIcon />,
        id: "about",
        contents: <>About Me</>
        }
    ];

    return (
        <>
        <AppBar className="app-bar-wrapper" position="static">
            <Tabs value={nTabIndex} onChange={handleChange} centered TabIndicatorProps={{style: {background: "#9a0007"}}}>
                {aSections.map((tab) => (
                    <Tab icon={tab.icon} label={tab.label} id={tab.id} />
                ))}
            </Tabs>
        </AppBar>
        <Box p={3}>
            <Typography>{aSections[nTabIndex].contents}</Typography>
        </Box>
        </>
    );
}