import { gql } from 'apollo-server'

export default gql`
"""
Represents a single article
"""
type Article {
  slug: String
  title: String
  description: String
  body: String
  tagList: [String]
  createdAt: Date
  updatedAt: Date
  favorited: Boolean
  favoritesCount: Int
  author: Profile
}

"""
Represents a list of multiple articles
"""
type Articles {
  collection: [Article]
  articlesCount: Int
}
`
