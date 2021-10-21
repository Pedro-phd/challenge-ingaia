import styled from 'styled-components'

interface Wrapper {
  bg: string
  status: string
}

export const Wrapper = styled.div<Wrapper>`
  display: flex;
  width: 254px;
  height: 223px;
  margin: 12px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(${(props) => (props.status == 'Dead' ? '100%' : '0%')});
  border: none;
  outline: none;
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 0px 0px 3px #c9d636, 0px 0px 5px 4px #c9d636,
      inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);
  }
  &:selected {
    box-shadow: 0px 0px 0px 3px #c9d636, 0px 0px 5px 4px #c9d636,
      inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);
  }
  @media screen and (min-width: 768px) {
    width: 224px;
    height: 224px;
  }
`
export const LabelContainer = styled.div`
  width: 100%;
  height: 54px;
  padding: 7px 0 0 13px;
  margin-top: auto;
  background-color: rgba(0, 0, 0, 0.65);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  position: relative;
  backdrop-filter: blur(4px);
`
export const Name = styled.h1`
  font-size: 20px;
  color: white;
  font-weight: 700;
  max-width: 190px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Type = styled.p`
  font-size: 12px;
  color: white;
  font-weight: 400;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
