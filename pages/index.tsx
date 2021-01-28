import { endpoint, prodEndpoint } from '../config'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { BookInfo, AuthorInfo } from '../components'

const uri = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint

const Home = () => {
  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App</h1>
        <BookInfo />
        <AuthorInfo />
      </div>
    </ApolloProvider>
  )
}

export default Home
