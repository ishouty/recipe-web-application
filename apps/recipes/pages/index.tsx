import { ReactElement, useState, FunctionComponent } from 'react';
import RecipeList from '../components/RecipesList/RecipesList';
import { getRecipes } from '../services/recipes';
import { PageContainer } from '../components/Common/StyleComponents/PageContainer';
import AddRecipe from '../components/Modal/AddRecipe/AddRecipe';
import CarouselRecipe from '../components/CarouselRecipe/CarouselRecipe';
import { isSSR } from '../helpers/ssr';
import { getClientRecipes } from '../services/localStorage';
import Header from '../components/Header/Header';
import TEXT from '../constants/text';

type IndexProps = {
  title?: string;
  data: any;
};

export const Index: FunctionComponent<IndexProps> = ({
  data,
  title,
}: IndexProps): ReactElement => {
  const allRecipes = !isSSR() ? [...getClientRecipes(), ...data] : data;
  const [recipes, setRecipes] = useState(allRecipes || []);
  const [show, setShow] = useState(false);
  return (
    <PageContainer>
      <Header title={title || TEXT.DEFAULT_TITLE} setShow={setShow} />
      <CarouselRecipe recipes={recipes} />
      <AddRecipe
        setRecipes={setRecipes}
        recipes={recipes}
        show={show}
        setShow={setShow}
      />
      <RecipeList data={recipes} />
    </PageContainer>
  );
};

export async function getServerSideProps(): Promise<{ props: IndexProps }> {
  const recipeResponse = (await getRecipes()) || [];
  return {
    props: {
      data: recipeResponse,
    },
  };
}

export default Index;
