# webapp-rocket [![NPM version][npm-image]][npm-url]
> React web application sample with GraphQL, Apollo Client and AxaGuilDEv Oidc Client integration.

![Building blocks](assets/img/appicon.png)
## Installation

First, install [Yeoman](http://yeoman.io) and @totalsoft/generator-webapp-rocket using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g @totalsoft/generator-webapp-rocket
```

Then generate your new project:

```bash
yo @totalsoft/webapp-rocket
```

You will be prompted to introduce the following information:
 1. The project name. This will also be the name of the new folder in which the new application will live.
 2. Project description. This will be visible in the browser tab and link details.
 3. GraphQL address. By default it would be set to `localhost:4000`
 4. Application theme. There is a list of available themes you can choose from.
 5. Whether to generate default helm files or not.
 6. Identity client name, configured in Identity SaaS for your new application.
 7. Identity scopes.
 8. Identity authority.
 9. Use rights. By default is set to false. This will also generate a `GET_USER_DATA` query that loads the users rights. (see the query below)
 10. Include multi-tenancy. By default is set to false.
 11. What package manager you wish to use to install the application dependencies. (npm, yarn or bower).
 
If you would like to start the application, simply run ``npm start`` in the newly created folder, otherwise you can begin editing and writing your application!

## What is a Generator?
A Yeoman generator is a scaffolding tool. You can use Yeoman to install applications based on templates. This repository is an example of a template - an application with a build, code structure, and dependencies installed and organized for you!

Using a generator accelerates application development. You don't have to worry about best practices for foundational elements, because we've incorporated them. Our template generates a fully functional web application foundation that becomes the infrastructure of your new project. Before this miracle generator existed, this code would probably took you a few days to write, oh well... now this will be done in only 30 seconds!

We have included integrations with essential libraries, as well as pages, routes, and components that are both useful in most react web applications (like forbidden pages).

Included latest versions of the following libraries and technologies: <b>React, GraphQL,  [Apollo Client](https://github.com/apollographql/apollo-client), [AxaGuilDEv/react-oidc](https://github.com/AxaGuilDEv/react-oidc), [@totalsoft/jsbb](https://github.com/osstotalsoft/jsbb), Material-UI, </b> and many more, see generators/app/templates/infrastructure/package.json file.

## Authentication 
By default, the application uses <b>Identity SaaS</b>. See [AxaGuilDEv/react-oidc](https://github.com/AxaGuilDEv/react-oidc).
The authentication is executed using a secure token which will also contain information about the logged user like: user data and roles. 

A user can have one or more roles from the following list:
- admin (tenant_admin)
- user (tenant_user)
- global_admin (only with multi-tenancy)

If you want to use another authentication service, the following files must be modified:
- `src/index.js`
- `src/utils/auth`
- `src/providers/AuthenticationProvider.js`
- `src/components/routing/PrivateRoute.js`

## Authorization
When building a web application it is crucial to make it secure, besides token based authentication, there might be the need to limit access to certain areas or even whole pages. We can help you do this too. 

If you answered with `true` to the "use rights" question prompted at the beginning, there will be an example of permission checking included in this sample. In addition, there will be some custom hooks to help you (`useUserData` and `useRights`) and the following query will be generated, and it assumes that you have the code implemented in you GraphQL server and database:
```
const GET_USER_DATA = gql`
    query userData($externalId: ID!){
        userData(externalId: $externalId){
            id
            userName
            rights
        }
    }
`
```

There are 3 "areas" in your new application where you might want to limit the access: 
- Routes: see `src/routes/app` file. Use `roles` and/or `rights` properties to limit the access to a route.
- Side menu: see `src/constants/menuConfig.js` file. Here you will also find the `roles` and`rights` properties that you could use to limit the access to a certain menu item.
- Small parts of your react components or even an element: here you can use the `useRights` custom hook explained bellow.

To define a new role, assuming it was already added in the database, you should export it from `src/constants/permissions` file.

## Notifications
This project uses [react-toastify](https://fkhadra.github.io/react-toastify/introduction) to display friendly, smart and colorful toasts.
Read further to see some use cases.

## Custom hooks
- `useQueryWithErrorHandling` - runs the query and automatically displays an error toast in case of some error occurs.
- `useClientQueryWithErrorHandling` - runs the query using Apollo Client instance and display an error toast in case of an error.
- `useError` - displays an error toast with a friendly message.
- `useToast` - allows you to display a custom toast
- `useApolloLocalStorage` - retrieves a getter and a seetter pair for a certain key from Apollo client cache (used to handle local storage).
- (Optional) `useUserData` - executes a default query to load the current user information (including a list of rights)
- (Optional) `useRights`- verifies if the current logged user has a specific right.

## Internationalization
Internationalization (commonly known as i18n) is a core part of many web applications. We have integrated the sample application with the common i18n tool, called react-i18next, which is a React plugin for the popular i18next plugin.

Our language and translation files are added as JSON files stored in the application. You can find the files in the installed application, under the public/locales folder.
Here you will find a folder per supported language, with a translation.json file inside. 

## Multi-tenancy
If you need to handle multi-tenancy in your new application, you can just reply with `yes` when you are being prompted about this topic at the beginning and voilà! Everything will be done for you.

This feature include a `TenantSelector` component, which allows a user to navigate to multiple tenants. This uses a `MY_TENANTS_QUERY` GraphQL query, which retrieves the same information exposed by <b>Identity SAAS</b>. This will have to be implemented in your GraphQL server.
```
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
```
In addition, the default `AuthenticationProvider` will be replace with a specialized one who manages the multi-tenancy logic. 

## Deployment
When you are ready you can deploy you application on any platform. This template also includes a pre-configured Dockerfile and optional Helm files.

## Getting To Know Yeoman
 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT

[npm-image]: https://badge.fury.io/js/%40totalsoft%2Fgenerator-webapp-rocket.svg
[npm-url]: https://www.npmjs.com/package/@totalsoft/generator-webapp-rocket
