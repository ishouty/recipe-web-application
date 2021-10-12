import { Recipe, RecipeList } from '../../../model/Recipes';
import {
  ReactElement,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from 'react';
import Modal from 'react-bootstrap/Modal';
import TEXT from '../../../constants/text';
import { isSSR } from '../../../helpers/ssr';
import {
  getClientRecipes,
  setClientRecipes,
} from '../../../services/localStorage';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Columns } from '@bedrock-layout/columns';

type RecipeFormInput = {
  title: string;
  duration: number;
  instructions: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

type AddRecipeProps = {
  setRecipes: (recipes) => void;
  recipes: RecipeList;
  show: boolean;
  setShow: (bool) => void;
};

const AddRecipe: FunctionComponent<AddRecipeProps> = ({
  setRecipes,
  recipes,
  show,
  setShow,
}): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeFormInput>();

  const onSubmit: SubmitHandler<RecipeFormInput> = (data) => {
    const localStorageRecipes = getClientRecipes();

    const existingRecipes: RecipeList = [...localStorageRecipes, ...recipes];

    const newRecipe: Recipe = {
      id: existingRecipes.length + 1,
      title: data.title,
      duration: data.duration,
      instructions: data.instructions,
      image_768px_768px: 'http://dummyimage.com/768x768.png/dddddd/000000',
      image_320px_320px: 'http://dummyimage.com/320x320.png/dddddd/000000',
      image_1000px_400px: 'http://dummyimage.com/1000x400.png/dddddd/000000',
    };

    setShow(false);

    setRecipes([newRecipe, ...localStorageRecipes, ...recipes]);
    if (!isSSR()) {
      setClientRecipes(
        'recipes',
        JSON.stringify([newRecipe, ...localStorageRecipes])
      );
    }
  };

  const AddRecipeForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Columns columns={1} gutter={'md'} switchAt="35rem">
            <label>{TEXT.FORM.ADD.TITLE}</label>
            <input
              type="input"
              name="title"
              aria-label="title-input"
              placeholder={TEXT.FORM.PLACEHOLDERS.TITLE}
              {...register('title', {
                required: true,
                maxLength: 20,
              })}
            />
            {errors?.title?.type === 'required' && (
              <p>{TEXT.VALIDATION.ERRORS.REQUIRED}</p>
            )}
            {errors?.title?.type === 'maxLength' && (
              <p>{TEXT.VALIDATION.ERRORS.MAX_20_LENGTH}</p>
            )}
            {errors?.title?.type === 'pattern' && (
              <p>{TEXT.VALIDATION.ERRORS.ALPHABET_ONLY}</p>
            )}

            <label>{TEXT.FORM.ADD.INSTRUCTIONS}</label>
            <textarea {...register('instructions', { required: true })} />
            {errors?.instructions?.type === 'required' && (
              <p>{TEXT.VALIDATION.ERRORS.REQUIRED}</p>
            )}

            <label>{TEXT.FORM.ADD.DURATION}</label>
            <input
              type="input"
              {...register('duration', {
                pattern: /^[0-9]+$/i,
                required: true,
                min: 1,
                max: 1000,
              })}
            />
            {errors.duration && <p>{TEXT.VALIDATION.ERRORS.DURATION_NUMBER}</p>}

            <button aria-label="button-add-new">
              {TEXT.BUTTONS.ADD_RECIPE}
            </button>
          </Columns>
        </form>
      </>
    );
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby={TEXT.ADD_RECIPE}
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{TEXT.ADD_RECIPE}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{AddRecipeForm()}</Modal.Body>
      </Modal>
    </>
  );
};

export default AddRecipe;
