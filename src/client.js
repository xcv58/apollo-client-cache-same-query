import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { DedupLink } from "apollo-link-dedup"
import { ApolloLink } from 'apollo-link'


const link = ApolloLink.from([
  new DedupLink(),
  new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
    fetchOptions: {
      credentials: 'include'
    }
  })
])

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link, cache
})

export default apolloClient
