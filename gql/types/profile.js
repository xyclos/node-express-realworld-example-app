import { gql } from 'apollo-server'

export default gql`
"""
Represents a user profile
"""
type Profile {
  username: String
  bio: String
  image: String
  following: Boolean
}
`
