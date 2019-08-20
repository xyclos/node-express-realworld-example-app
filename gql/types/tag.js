import { gql } from 'apollo-server'

export default gql`
"""
Represents a single tag
"""
scalar Tag

"""
Represents a list of multiple tags
"""
type Tags {
  collection: [Tag]
}
`
