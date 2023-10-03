import { IAPIrequest } from '../interfaces/interfaces';

const APIrequest = async (word: string): Promise<IAPIrequest | null> => {
  try {
    const responce: Response = await fetch(
      `https://api.unsplash.com/search/photos?query=${word}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`
    );

    return await responce.json();
  } catch (error) {
    return null;
  }
};

export default APIrequest;
