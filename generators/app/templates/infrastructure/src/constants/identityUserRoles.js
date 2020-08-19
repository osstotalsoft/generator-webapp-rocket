// Identity SAAS describes the following user roles (available by accessing oidcUser.profile.role property ): 
export default {
    globalAdmin: "tenant_admin",
    user: "tenant_user"<% if (withMultiTenancy) { %>,
    globalAdmin: "global_admin"<% } %>
}