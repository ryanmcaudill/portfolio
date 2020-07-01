import React from 'react';
import profileIcon from "./profile-icon.jpg";
import { TabBar } from "./Components/TabBar";
import Typography from '@material-ui/core/Typography';

export const Portfolio = () => {
	return (
		<>
			<div className="header">
				<img src={profileIcon} className="profile-icon" alt="Whoops..." />
				<div>
					<Typography variant="h3">Ryan Caudill</Typography>
					<Typography>I am a full-stack software developer at Reynolds and Reynolds.</Typography>
				</div>
			</div>
			<TabBar />
		</>
	);
}

