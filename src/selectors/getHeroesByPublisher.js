import { heroes } from "../data/heroes";

const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`publisher "${publisher}" no es correcto`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};

export default getHeroesByPublisher;
