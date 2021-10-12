import styled from 'styled-components';

type BlockContainerProps = {
  padding?: string;
  flexDirection?: 'row' | 'column';
  extraClasses?: string;
};

const BlockContainer = styled.div.attrs<BlockContainerProps>((prop) => ({
  className: prop.extraClasses && prop.extraClasses,
}))<BlockContainerProps>`
  display: flex;
  flex-direction: ${(prop) =>
    prop.flexDirection ? prop.flexDirection : 'row'};
  border: 1px solid ${(props) => props.theme['$block-primary-border']};
  margin-bottom: 10px;
  border-radius: 5px;
  padding: ${(prop) => (prop.padding ? prop.padding : '0px')};
`;

export default BlockContainer;
