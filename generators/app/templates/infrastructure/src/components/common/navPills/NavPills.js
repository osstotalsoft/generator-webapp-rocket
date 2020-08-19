import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Tab, Tabs, Grid, Box, makeStyles } from "@material-ui/core";
import navPillsStyle from "assets/jss/components/common/navPillsStyle.js";

const useStyles = makeStyles(navPillsStyle);

const NavPills = ({ tabs, color, horizontal, alignCenter, active, onChange, actions }) => {
    const classes = useStyles();
    const tabButtons = (
        <Box className={classes.container} >
            <Box className={classes.tabsContainer} >
                <Tabs
                    className={classes.root}
                    TabIndicatorProps={{ className: classes.displayNone }}
                    value={active}
                    onChange={onChange}
                    centered={alignCenter}
                >
                    {tabs.map((prop, key) => {
                        var icon = {};
                        if (prop.tabIcon !== undefined) {
                            icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
                        }
                        const pillsClasses =
                            classes.pills +
                            " " +
                            cx({
                                [classes.horizontalPills]: horizontal !== undefined,
                                [classes.pillsWithIcons]: prop.tabIcon !== undefined
                            });
                        return (
                            <Tab
                                label={prop.tabButton}
                                value={prop.value}
                                key={key}
                                {...icon}
                                classes={{
                                    root: pillsClasses,
                                    selected: classes[color]
                                }}
                            />
                        );
                    })}
                </Tabs>
            </Box>
            {actions.map(
                (action, index) => (
                    <Box key={index} ml={1}>
                        {action}
                    </Box>
                )
            )}
        </Box>
    );

    const tabContent = (
        <div className={classes.contentWrapper}>
            {tabs.map((prop, key) => {
                return (
                    (key === active) && (<div className={classes.tabContent} key={key}>
                        {prop.tabContent}
                    </div>)
                );
            })}
        </div>
    );

    return horizontal !== undefined ? (
        <Grid container className={classes.grid}>
            <Grid item lg={11} className={classes.itemGrid} {...horizontal.tabsGrid}>{tabButtons}</Grid><Grid item lg={1}>{"+++++"}</Grid>
            <Grid item className={classes.itemGrid} {...horizontal.contentGrid}>{tabContent}</Grid>
        </Grid>
    ) : (
            <div>
                {tabButtons}
                {tabContent}
            </div>
        );
}

NavPills.defaultProps = {
    active: 0,
    color: "primary",
    actions: []
};

NavPills.propTypes = {
    // index of the default active pill
    active: PropTypes.number,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabButton: PropTypes.string,
            tabIcon: PropTypes.object,
            tabContent: PropTypes.node
        })
    ).isRequired,
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose"
    ]),
    direction: PropTypes.string,
    horizontal: PropTypes.shape({
        tabsGrid: PropTypes.object,
        contentGrid: PropTypes.object
    }),
    alignCenter: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    actions: PropTypes.array
};

export default NavPills;