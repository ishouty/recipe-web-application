/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import BlockContainer from '../Common/StyleComponents/BlockContainer';
import { Page } from '../../model/Recipes';
import { Recipe } from '../../model/Recipes';
import { TEXT } from '../../constants/text';
import AHref from '../Common/StyleComponents/AHref';

const BodyContainer = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const RecipeItem: FunctionComponent<any> = ({
  id,
  duration,
  title,
  type,
  instructions,
  image_768px_768px,
  image_1000px_400px,
}: Recipe & Page): ReactElement => {
  const isPageList: boolean = type === 'RecipeList';

  return (
    <>
      {isPageList && (
        <Link href={`/recipe/${id}`} passHref>
          <AHref>
            <BlockContainer
              padding="10px"
              extraClasses="block-container-item"
              flexDirection="column"
            >
              <ImageContainer>
                {image_768px_768px && (
                  <Image
                    src={image_768px_768px as any}
                    alt={title}
                    width="768"
                    height="768"
                  />
                )}
              </ImageContainer>
              <BodyContainer>
                <h3>{title}</h3>
                <h4>
                  {TEXT.DURATION}: {duration} {TEXT.MINUTES}
                </h4>

                <h4> {!isPageList && instructions}</h4>
              </BodyContainer>
            </BlockContainer>
          </AHref>
        </Link>
      )}

      {!isPageList && (
        <BlockContainer
          padding="10px"
          extraClasses="block-container-item"
          flexDirection="column"
        >
          <ImageContainer>
            {image_1000px_400px && (
              <Image
                src={image_1000px_400px as any}
                alt={title}
                width="1000"
                height="400"
              />
            )}
          </ImageContainer>
          <BodyContainer>
            <h3>{title}</h3>
            <h4>
              {TEXT.DURATION}: {duration} {TEXT.MINUTES}
            </h4>
            <h4> {!isPageList && instructions}</h4>
          </BodyContainer>
        </BlockContainer>
      )}
    </>
  );
};

export default RecipeItem;
