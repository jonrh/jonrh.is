# jonrh.is
Source code for my personal website [jonrh.is](https://jonrh.is), made with JavaScript, [GatsbyJS](https://www.gatsbyjs.org/) and [React](https://reactjs.org/).

## Deployments
The site is automatically deployed with CircleCI, see the file [`.circleci/config.yml`](./.circleci/config.yml). There are two automatic deployments. When commits are pushed to the `master` branch [jonrh.is](https://jonrh.is) is automatically updated. When the `dev` branch is pushed it will update [dev.jonrh.is](https://dev.jonrh.is). Furthermore when deployments are done on dev.jonrh.is an extra `robots.txt` file is added to signal to search engines that dev.jonrh.is should not be indexed.

## gatsby-starter-default
The default Gatsby starter

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-example-site
```


## Develop

```
gatsby develop
```