import React, { useState } from "react";
import PropTypes from "prop-types";

// material-ui components
import { Accordion as AccordionBase, AccordionSummary, AccordionDetails, makeStyles } from "@material-ui/core";

// material-ui-icons
import ExpandMore from "@material-ui/icons/ExpandMore";
import accordionStyle from "assets/jss/components/common/accordionStyle";
const useStyles = makeStyles(accordionStyle);

const Accordion = ({ collapses, active }) => {

    const [localSctive, setLocalActive] = useState(active)

    const handleChange = panel => (_, expanded) => setLocalActive(expanded ? panel : -1)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {collapses.map((prop, key) => {
                return (
                    <AccordionBase
                        expanded={localSctive === key}
                        onChange={handleChange(key)}
                        key={key}
                        classes={{
                            root: classes.expansionPanel,
                            expanded: classes.expansionPanelExpanded
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            classes={{
                                root: classes.expansionPanelSummary,
                                expanded: classes.expansionPanelSummaryExpaned,
                                content: classes.expansionPanelSummaryContent,
                                expandIcon: classes.expansionPanelSummaryExpandIcon,
                                //expandIconExpanded: classes.expansionPanelSummaryExpandIconExpanded
                            }}
                        >
                            <h4 className={classes.title}>{prop.title}</h4>
                        </AccordionSummary>
                        <AccordionDetails className={classes.expansionPanelDetails}>
                            {prop.content}
                        </AccordionDetails>
                    </AccordionBase>
                );
            })}
        </div>
    );
}

Accordion.defaultProps = {
    active: -1
};

Accordion.propTypes = {
    // index of the default active collapse
    active: PropTypes.number,
    collapses: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.node
        })
    ).isRequired
};

export default Accordion;