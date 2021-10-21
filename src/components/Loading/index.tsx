import * as S from './styles'

interface ILoading {
  visible: boolean
}

const Loading = ({ visible }: ILoading) => (
  <S.Wrapper visible={visible}>
    <S.IconLoading src="https://i.imgur.com/uzn593q.png" />
    <S.Text>Loading</S.Text>
  </S.Wrapper>
)

export default Loading
