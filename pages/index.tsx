import { endpoint, prodEndpoint } from '../config'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import { BookInfo, AuthorInfo } from '../components'

const uri = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint

const Home = () => {
  const client = new ApolloClient({
    uri
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
