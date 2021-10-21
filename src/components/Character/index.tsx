import * as C from './styles'
import { ICharacter } from '../../types/index'
const Character = ({ name, status, type, image }: ICharacter) => (
  <C.Wrapper bg={image} status={status}>
    <C.LabelContainer>
      <C.Name>{name}</C.Name>
      <C.Type>{type}</C.Type>
    </C.LabelContainer>
  </C.Wrapper>
)

export default Character
