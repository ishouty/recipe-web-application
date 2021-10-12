import styled from 'styled-components';
import {
  ReactElement,
  FunctionComponent,
  SetStateAction,
  Dispatch,
} from 'react';
import { Columns } from '@bedrock-layout/columns';
import TEXT from '../../../recipes/constants/text';

const HeaderBlock = styled.header`
  ${(props) => `
  width: 100%;
  text-align: center;
  font-size: 2em;
  background-color: ${props.theme['$brand-primary-color']};
  color: ${props.theme['$btn-primary-color']};
  padding: 10px;
  outline: 0px;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 15%);
  margin-bottom: 10px;
`};
`;

type HeaderProps = {
  title: string;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const Header: FunctionComponent<HeaderProps> = ({
  title,
  setShow,
}: HeaderProps): ReactElement => {
  return (
    <HeaderBlock>
      <Columns column={1} gutter="md">
        {title}
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          {TEXT.ADD_RECIPE}
        </button>
      </Columns>
    </HeaderBlock>
  );
};

export default Header;
