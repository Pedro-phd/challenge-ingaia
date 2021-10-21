/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        type
        image
      }
    }
  }
`
