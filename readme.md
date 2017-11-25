# jonrh.is
Source code for my personal website [jonrh.is](https://jonrh.is), made with JavaScript, [GatsbyJS](https://www.gatsbyjs.org/) and [React](https://reactjs.org/).

## Coding conventions
All JavaScript code is written in ES2015, ES2016, and so on. Sometimes Stage 4 ECMA features are used (features that have been finalised but not published in the specification).

Generally I favour using string literals:

```javascript
const website = 'jonrh.is'; // Bad
const website = "jonrh.is"; // Okay
const website = `jonrh.is`; // Best
```

The website is formatted with [Prettier](https://github.com/prettier/prettier) with the following parameters:

```
--print-width 100
--trailing-comma all
```

## Deployments
The site is automatically deployed with CircleCI, see the file [`.circleci/config.yml`](./.circleci/config.yml). There are two automatic deployments. When commits are pushed to the `master` branch [jonrh.is](https://jonrh.is) is automatically updated. When the `dev` branch is pushed it will update [dev.jonrh.is](https://dev.jonrh.is). Furthermore when deployments are done on dev.jonrh.is an extra `robots.txt` file is added to signal to search engines that dev.jonrh.is should not be indexed.

## Develop
While developing locally run the following command:

```
npm run develop
```