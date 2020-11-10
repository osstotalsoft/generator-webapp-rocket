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

const TenantSelector = ({ tenant, changeTenant, tenants, miniActive }) => {
    const classes = useStyles();
    const handleChange = useCallback(({ target: { value } }) => {
        const newTenant = tenants.find(t => t.externalId.toUpperCase() === value.toUpperCase())
        changeTenant(newTenant)
    }, [changeTenant, tenants])

    const iconComponent = miniActive ? { IconComponent: EmptyElement } : {}

    return (
        <div className={classes.tenantSelectorContainer}>
            <Select className={classes.tenantSelector}
                classes={{ selectMenu: classes.tenantSelectMenu }}
                value={tenant?.externalId}
                onChange={handleChange}
                {...iconComponent}>
                {
                    tenants.map(t =>
                        (<ListItem button value={t.externalId} className={classes.tenantSelectorItem} key={t.externalId}>
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
    miniActive: PropTypes.bool.isRequired
}

export default TenantSelector;