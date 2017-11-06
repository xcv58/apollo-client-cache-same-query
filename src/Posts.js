import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`{ allPosts { title id } }`

class Posts extends Component {
  render () {
    const { loading, allPosts } = this.props.data
    if (loading) {
      return 'Loading...'
    }
    const content = allPosts.map(post => (
      <div key={post.id}>{post.title}</div>
    ))
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default graphql(query)(Posts)
