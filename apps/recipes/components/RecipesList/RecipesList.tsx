import { FunctionComponent } from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import { RecipeList } from '../../model/Recipes';
import { Columns } from '@bedrock-layout/columns';
import styled from 'styled-components';

type RecipeProps = {
  data: RecipeList;
};

const Container = styled.div`
  margin-top: 10px;
`;
const RecipeItemList: FunctionComponent<RecipeProps> = ({
  data,
}: RecipeProps) => {
  return (
    <>
      <Container>
        <Columns columns={3} gutter={'md'} switchAt="35rem">
          {data.map((item, index) => {
            return <RecipeItem key={index} {...item} type="RecipeList" />;
          })}
        </Columns>
      </Container>
    </>
  );
};

export default RecipeItemList;
