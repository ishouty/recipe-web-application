import styled from 'styled-components';

type BodyTextProp = {
  ellipsis?: boolean;
};

export const BodyText = styled.div<BodyTextProp>`
  ${(prop) => prop.ellipsis && 'white-space: nowrap'};
  overflow: hidden;
  ${(prop) => prop.ellipsis && 'text-overflow: ellipsis'};
  max-width: 90%;
`;
