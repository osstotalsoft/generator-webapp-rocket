import React from 'react';
import { Card } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Typography from 'components/common/inputs/Typography';

function Forbidden() {
    const { t } = useTranslation();
    return (
        <Card style={{ backgroundColor: "#f44336", padding: "6px 16px", textAlign: "center", marginTop: '50px' }}>
            <Typography align={"center"} style={{ color: "#fff" }} variant={"h6"}>{t('Forbidden')}</Typography>
        </Card>
    )
}

Forbidden.propTypes = {
}

export default Forbidden;