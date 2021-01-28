# Next.js Apollo App

![Next.js Apollo App Logo caption="Logo courtesy of medium.com"](https://miro.medium.com/max/1400/1*RsOU9o4Q4FopzMICdLEZ8w.png "Logo from medium.com")

---
<div style='text-align: center;'>
  <strong>about me</strong>
  <p style='font-style: italic;'>
    joél hawkins
  </p>
  <ul style="list-style-type: none; font-style: italic; margin: 0; padding: 0; font-size: 0.8rem;">
    <li><strong>www</strong>/ <a href="https://joel.fm/" target="_blank">joel.fm</a></li>
    <li> <strong>in</strong>/ <a href="https://linkedin.com/in/hwknsj" target="_blank">@hwknsj</a></li>
  </ul>
</div>

## Introduction

This example project demonstrates a simple implementation of [Apollo](https://www.apollographql.com/) with [GraphQL](https://graphql.org/) & [Next.js](https://nextjs.org/).

I forked this project from [bengrunfeld/nextjs-apollo-app](https://github.com/bengrunfeld/nextjs-apollo-app) to solve [this unresolved issue](https://github.com/bengrunfeld/nextjs-apollo-app/issues/1) regarding deployment on a remote server.

---
## Changelog

* Created `/config.js` in root directory to define and export local (development) and production endpoints. Which is used is determined by `process.env.NODE_ENV`.
* Migrated to [Apollo Client v3](https://www.apollographql.com/docs/react/) using package `@apollo/client` which has deprecated the use of `@apollo/react-hooks`, `apollo-boost`, or `graphql-tag`.
* Added additional info to `package.json`
* Applied my own (opinionated) JS/TS formatting using [prettier](https://github.com/prettier/prettier)

---
## Resources

Check out [@bengrunfeld](https://github.com/bengrunfeld)'s article series *Server-Side GraphQL with Apollo & NextJS* on **Medium** for a step-by-step guide to build [his final code](https://github.com/bengrunfeld/nextjs-apollo-app):

[Part 1](https://medium.com/swlh/server-side-graphql-with-apollo-nextjs-part-1-setup-2615410c4966) ·
[Part 2](https://medium.com/@binyamin/full-stack-graphql-with-apollo-nextjs-part-2-1bea637ff007) ·
[Part 3](https://medium.com/swlh/full-stack-graphql-with-apollo-nextjs-part-3-server-side-1c7b86b3847c)

### Other useful links

* [GraphQL tools](https://graphql.org/code/) – definitely check this out!
* [Next.js deployment guide](https://nextjs.org/docs/deployment) using  [Vercel](https://vercel.com/)
* [Apollo Client 3.0 Docs: Migration Guide](https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/)
* [Apollo Client 3.0 Docs: Server-side-rendering](https://www.apollographql.com/docs/react/performance/server-side-rendering/)
* [Apollo Server: `apollo-server-micro` on Github](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-micro)