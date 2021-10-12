import { FunctionComponent, useState, ReactElement } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import AHref from '../Common/StyleComponents/AHref';
import TEXT from '../../../recipes/constants/text';
import { RecipeList } from '../../../recipes/model/Recipes';

type CarouselRecipeProps = {
  recipes: RecipeList;
};

const CarouselRecipe: FunctionComponent<CarouselRecipeProps> = ({
  recipes,
}): ReactElement => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={4000}
      nextLabel=""
      prevLabel=""
    >
      {recipes.map((recipe, index) => {
        return (
          <Carousel.Item key={index}>
            <Link href={`/recipe/${recipe.id}`} passHref>
              <AHref>
                <Carousel.Caption>
                  <h3>{recipe.title}</h3>
                  <p>
                    {recipe.duration} {TEXT.MINUTES}
                  </p>
                </Carousel.Caption>
                {recipe.image_1000px_400px && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={recipe.image_1000px_400px}
                    alt={recipe.title}
                    style={{ width: '100%' }}
                  />
                )}
              </AHref>
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselRecipe;
