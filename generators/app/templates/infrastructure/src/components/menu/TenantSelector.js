import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Select, ListItem, makeStyles } from "@material-ui/core";
import { Typography } from '@bit/totalsoft_oss.react-mui.kit.core';
import tenantSelectorStyle from 'assets/jss/components/tenantSelectorStyle'
import { PersonOutline } from '@material-ui/icons';
import { gql } from '@apollo/client';

export const MY_TENANTS_QUERY = gql`
query {
    myTenants {
        externalId
        name
        code
        tier
        isActive
        tenant {
            id
            name
            code
        }
    }
}
`
const useStyles = makeStyles(tenantSelectorStyle);

function EmptyElement() {
    return <span></span>
}

const TenantSelector = ({ tenant, changeTenant, tenants, drawerOpen }) => {
    const classes = useStyles();
    const handleChange = useCallback(({ target: { value } }) => {
        const newTenant = tenants.find(t => t.code.toUpperCase() === value.toUpperCase())
        changeTenant(newTenant)
    }, [changeTenant, tenants])

    const iconComponent = !drawerOpen ? { IconComponent: EmptyElement } : {}

    return (
        <div className={classes.tenantSelectorContainer}>
            <Select className={classes.tenantSelector}
                classes={{ selectMenu: classes.tenantSelectMenu }}
                value={tenant?.code}
                onChange={handleChange}
                {...iconComponent}>
                {
                    tenants.map(t =>
                    (<ListItem button value={t.code} className={classes.tenantSelectorItem} key={t.externalId}>
                        <span className={classes.collapseItemMini}>
                            <PersonOutline />
                        </span>
                        <Typography className={classes.tenantSelectorText}>{t.name}</Typography>
                    </ListItem>))
                }
            </Select>
        </div >
    )
}

TenantSelector.propTypes = {
    changeTenant: PropTypes.func.isRequired,
    tenant: PropTypes.object,
    tenants: PropTypes.array.isRequired,
    drawerOpen: PropTypes.bool.isRequired
}

export default TenantSelector;