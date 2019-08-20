import { gql } from 'apollo-server'

export default gql`
"""
Represents the User object (used for authentication)
"""
type User {
  email: String
  token: String
  username: String
  bio: String
  image: String
}
`
