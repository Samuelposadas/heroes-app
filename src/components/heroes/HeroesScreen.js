import { Redirect, useParams } from "react-router";
import getHeroesById from "../../selectors/getHeroesById";
import { useMemo } from "react";

const HeroesScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__backInDown"
        />
      </div>
      <div className="col-md-8">
        <h3 className="card-title">{superhero}</h3>
        <ul className="list-gruop list-group-flush">
          <li className="list-group-item">
            <b>alter ego : {alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>publisher: {publisher}</b>
          </li>
          <li className="list-group-item">
            <b>first appearence : {first_appearance}</b>
          </li>
        </ul>

        <h5>characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          return
        </button>
      </div>
    </div>
  );
};

export default HeroesScreen;
