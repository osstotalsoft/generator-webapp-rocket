import React from "react";
import { makeStyles, Card, CardContent, CardHeader } from "@material-ui/core";
import PropTypes from "prop-types";
import cx from "classnames";
import regularCardStyle from "assets/jss/components/common/regularCardStyle";

const useStyles = makeStyles(regularCardStyle);

function RegularCard({ ...props }) {
  const classes = useStyles();
  const {
    plainCard,
    cardTitle,
    cardSubtitle,
    content,
    titleAlign,
    customCardClasses,
    contentAlign,
    subtitleAlign,
    customCardTitleClasses
  } = props;
  const cardClasses =
    classes.card +
    cx({
      [" " + classes.cardPlain]: plainCard,
      [" " + customCardClasses]: customCardClasses !== undefined
    });
  return (
    <Card className={cardClasses}>
      {cardTitle !== undefined || cardSubtitle !== undefined ? (
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle + " " + classes[titleAlign] + " " + customCardTitleClasses,
            subheader: classes.cardSubtitle + " " + classes[subtitleAlign]
          }}
          title={cardTitle}
          subheader={cardSubtitle}
        />
      ) : null}
      <CardContent
        className={classes.cardContent + " " + classes[contentAlign]}
      >
        {content}
      </CardContent>
    </Card>
  );
}

RegularCard.propTypes = {
  customCardClasses: PropTypes.string,
  customCardTitleClasses: PropTypes.string,
  plainCard: PropTypes.bool,
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
  titleAlign: PropTypes.oneOf(["right", "left", "center"]),
  contentAlign: PropTypes.oneOf(["right", "left", "center"]),
  subtitleAlign: PropTypes.oneOf(["right", "left", "center"])
};

export default RegularCard;