

# Recipe Web Application

## Overview

The application consists of Frontend Next JS to utilize Server Side Rendering, Client Side and React Framework, Routing Framework etc..

### Front End 
Index page, slug page is build on run time. Ideally this could be changed too static generation if we had a running service to generate the files, however only ideal for pages we know and defined and is not too dynamic. 

## Frameworks and Tools 

- [NX Workspace](https://nx.dev) for Mono Repo Management 

  * Generate and build skeletons of applications and frameworks required e.g NextJS  
  * Build and deploy commands 
  * Configuration setup for apps 
  * Building shared libraries which can be used for both applications
  * Linting & Tests will be automatically run as part of the build process but can also be run independently.
#### Languages
- [Typescript](https://www.typescriptlang.org/) 
- [Javascript](https://www.javascript.com/) 

### Mock Data 

[Mockaroo](https://www.mockaroo.com) - Mock generator and schema creation 

### Tests

[Jest](https://jestjs.io/) - Unit tests
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - js dom selector

### Front End

- [React](https://reactjs.org/) - UI components
- [NextJS](https://nextjs.org/) - For static server side generation framework for SSR and static generation

- [Styled-components](https://styled-components.com/docs/api) - creating components with styles 

- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Hook Form](https://react-hook-form.com/)

### Note: Naming Conventions on React Components 
- All of the React components are camel case, this is something developers can agree on the conventions etc.. 

- TODO: styling, tests, integration tests, error handling on front end
#### Language 
- [Typescript](https://www.typescriptlang.org/) 
- [Javascript](https://www.javascript.com/) 

### Tests

[Jest](https://jestjs.io/) - Unit tests , helpers etc..

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testings pages and components 

## Running Applications in Development 

```
npm install
```
```
npm run start 
```

Open your browser and type 

```
http://localhost:4200
```

## Running Applications in Build 

```
npm run build 
```

## Running Unit Tests

Note: Running integration tests for api service would need the service to be running

```
npm run test
```
## Running Linting

```
npm run lint 
```
