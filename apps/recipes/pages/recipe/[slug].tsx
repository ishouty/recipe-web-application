/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, FunctionComponent, useState } from 'react';
import PageContainer from '../../components/Common/StyleComponents/PageContainer';
import { getRecipe } from '../../services/recipes';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import Header from '../../components/Header/Header';
import { TEXT } from '../../constants/text';
import { isSSR } from '../../helpers/ssr';
import { getClientRecipes } from '../../services/localStorage';
import AddRecipe from '../../components/Modal/AddRecipe/AddRecipe';
import { Recipe } from '../../model/Recipes';
import { ErrorResponse } from '../../model/Error';
import { GetStaticPropsResult } from 'next';
import { useEffect } from 'react';

type RecipePostProps = {
  data: (Recipe & ErrorResponse) | ErrorResponse;
  id: string;
};

const RecipePost: FunctionComponent<RecipePostProps> = ({
  data,
  id,
}: RecipePostProps): ReactElement => {
  const [show, setShow] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allRecipes = !isSSR() ? [...getClientRecipes()] : [];
  const [recipes, setRecipes] = useState(allRecipes || []);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    if (!isSSR() && data?.code === 'not-found') {
      const clientRecipe = allRecipes.filter((recipe) => {
        return recipe.id === parseInt(id);
      });
      setRecipe(clientRecipe[0]);
    } else {
      setRecipe(data);
    }
  }, [allRecipes, data, id]);

  return (
    <>
      <PageContainer>
        <Header title={data.title || TEXT.DEFAULT_TITLE} setShow={setShow} />
        <AddRecipe
          setRecipes={setRecipes}
          recipes={recipes}
          show={show}
          setShow={setShow}
        />
        <RecipeItem {...recipe} type="Recipe" />
      </PageContainer>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps = async ({
  params,
}): Promise<GetStaticPropsResult<RecipePostProps>> => {
  const recipeResponse: Recipe | ErrorResponse = await getRecipe(
    parseInt(params.slug)
  );
  return {
    props: {
      data: recipeResponse,
      id: params.slug,
    },
  };
};

export default RecipePost;
