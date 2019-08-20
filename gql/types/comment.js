import { gql } from 'apollo-server'

export default gql`
"""
Represents a single comment
"""
type Comment {
  id: Int
  createdAt: Date
  updatedAt: Date
  body: String
  author: Profile
}

"""
Represents a list of multiple comments
"""
type Comments {
  collection: [Comment]
}
`
