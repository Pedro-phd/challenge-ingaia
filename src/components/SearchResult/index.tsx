import * as S from './styles'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_CHARACTERS } from '../../graphql/queries'
import { ICharacter, IInfoApi } from '../../types/index'
import Character from '../Character/index'
import Loading from 'components/Loading'

const SearchResult = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 }
  })

  const [characters, setCharacters] = useState<Array<ICharacter>>([])
  const [info, setInfo] = useState<IInfoApi>()

  useEffect(() => {
    if (data != undefined) {
      setCharacters(data?.characters?.results)
      setInfo(data?.characters?.info)
    }
    console.log(data, error, info)
  }, [data, loading, error, info])

  return (
    <S.Wrapper>
      <Loading visible={loading} />
      {characters.length > 0 &&
        characters.map((character) => {
          return <Character key={character.id} {...character} />
        })}
    </S.Wrapper>
  )
}

export default SearchResult
