import styled from 'styled-components'
interface ILoading {
  visible: boolean
}
export const Wrapper = styled.main<ILoading>`
  width: ${(props) => (props.visible ? '100vw' : 0)};
  height: ${(props) => (props.visible ? '100vh' : 0)};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`
export const IconLoading = styled.img`
  width: 187px;
  height: 187px;
  border: 2px solid #606060;
  border-radius: 8px;
`
export const Text = styled.p`
  font-size: 18px;
  margin-top: 15px;
  font-weight: 400;
  color: white;
`
