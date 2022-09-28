import { styled, Select as MuiSelect, ListItem as MuiListItem, Typography as MuiTypography } from '@mui/material'
import styles from 'assets/jss/styles'

export const TenantContainer = styled('div')(({ theme }) => ({
    ...theme.palette.sideMenu,
    padding: "0px",
    width: "100%",
    verticalAlign: "middle"
}))

export const Select = styled(MuiSelect)(() => ({
    color: "inherit",
    width: "100%",
    verticalAlign: "middle",
    "&:before,&:after": {
      display: "none !important"
    }
}))

export const ListItem = styled(MuiListItem)(() => ({
    padding: "2px 16px"
}))

export const CollapseItem = styled('span')(({ theme }) => ({
    ...styles(theme)?.defaultFont,
    color: "inherit",
    textTransform: "uppercase",
    width: "30px",
    marginRight: "15px",
    textAlign: "center",
    letterSpacing: "1px",
    position: "relative",
    float: "left",
    display: "inherit",
    transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
}))

export const Typography = styled(MuiTypography)(({ theme }) => ({
    ...styled(theme)?.defaultFont,
    margin: "0",
    position: "relative",
    transform: "translateX(0px)",
    color: "inherit",
    opacity: "1",
    whiteSpace: "nowrap",
    display: "inline-block",
    transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "30px",
}))