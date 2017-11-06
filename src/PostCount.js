import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`{ allPosts { title id } }`

class PostCount extends Component {
  render () {
    const { loading, allPosts } = this.props.data
    if (loading) {
      return 'Loading...'
    }
    return (
      <div>
        Total posts: {allPosts.length}
      </div>
    )
  }
}

export default graphql(query)(PostCount)
