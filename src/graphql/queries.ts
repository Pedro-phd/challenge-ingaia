/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
  query ($page: Int) {
    characters(page: $page) {
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
        # origin {
        #   name
        #   residents {
        #     name
        #   }
        # }
        # location {
        #   name
        #   residents {
        #     name
        #   }
        # }
      }
    }
  }
`
