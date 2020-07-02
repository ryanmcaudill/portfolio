import React from 'react';
import "../../GlobalStyles.css";
import { Grid, Tooltip, withStyles } from '@material-ui/core';

export const DiabloPanel = () => {
    const [characterInfo, setCharacterInfo] = React.useState({}),
        [characterItems, setCharacterItems] = React.useState({});

    const mapClassToDescriptor = {
        "demon-hunter": "Demon Hunter"
    }

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
      }))(Tooltip);

    const createMarkup = (innerHTML) => { return {__html: innerHTML}; };

    const buildItemTooltip = (item) => {
        return (
            <>
                Primary:
                {item.attributesHtml.primary.map((attr) => <div dangerouslySetInnerHTML={createMarkup(attr)}/>)}
                Secondary:
                {item.attributesHtml.secondary.map((attr) => <div dangerouslySetInnerHTML={createMarkup(attr)}/>)}
                {item.set ?
                    <div dangerouslySetInnerHTML={createMarkup(item.set.descriptionHtml)}/>
                    :
                    null
                }
            </>
        );
    }

    React.useEffect(() => {
        fetch("https://us.api.blizzard.com/d3/profile/BlooCanary%231263/hero/119309966?locale=en_US&access_token=USsKo17X5FersTFxyANoNIYFx1zIyNPGkh")
            .then(res => res.json())
            .then((result) => {
                setCharacterInfo(result);
            });
        fetch("https://us.api.blizzard.com/d3/profile/BlooCanary%231263/hero/119309966/items?locale=en_US&access_token=USsKo17X5FersTFxyANoNIYFx1zIyNPGkh")
            .then(res => res.json())
            .then((result) => {
                setCharacterItems(result);
            });
    }, []);

    const characterDescription = characterInfo.id ?
        <div className="diablo-header">
                <span></span>
                <span></span>
                <span>{characterInfo.name}</span>
                <span>{mapClassToDescriptor[characterInfo.class]}</span>
                <span>{`Level ${characterInfo.level} (${characterInfo.paragonLevel})`}</span>
                <span></span>
                <span></span>
        </div>
        :
        <div className="diablo-header">Loading...</div>;

    const characterSkills = characterInfo.id ?
        <>
        <Grid container justify="center" direction="row" spacing={2}>
            {characterInfo.skills.active.map((skill) =>
                <Grid item>
                    <Tooltip title={<div dangerouslySetInnerHTML={createMarkup(skill.skill.descriptionHtml)} />}>
                        <img src={`http://media.blizzard.com/d3/icons/skills/64/${skill.skill.icon}.png`} alt="Whoops..."></img>
                    </Tooltip>
                </Grid>
            )}
        </Grid>
        <Grid container justify="center" direction="row" spacing={2}>
            {characterInfo.skills.passive.map((skill) =>
                <Grid item>
                    <Tooltip title={<div dangerouslySetInnerHTML={createMarkup(skill.skill.descriptionHtml)} />}>
                        <img src={`http://media.blizzard.com/d3/icons/skills/64/${skill.skill.icon}.png`} alt="Whoops..."></img>
                    </Tooltip>
                </Grid>
            )}
        </Grid>
        </>
        :
        <div>Loading...</div>;

    const characterItemSheet = characterItems.head ?
        <Grid container alignContents="stretch" direction="row">
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.head)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.head.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.neck)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.neck.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.torso)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.torso.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.shoulders)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.shoulders.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.legs)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.legs.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.waist)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.waist.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.hands)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.hands.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.bracers)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.bracers.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.feet)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.feet.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.leftFinger)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.leftFinger.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.rightFinger)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.rightFinger.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.mainHand)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.mainHand.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title={buildItemTooltip(characterItems.offHand)}>
                    <img src={`http://media.blizzard.com/d3/icons/items/large/${characterItems.offHand.icon}.png`} alt="Whoops..."></img>
                </Tooltip>
            </Grid>
        </Grid>
        :
        <div>Loading...</div>;

    return (
        <div className="diablo-character-display">
            {characterDescription}
            {characterItemSheet}
            {characterSkills}
        </div>
    );
}