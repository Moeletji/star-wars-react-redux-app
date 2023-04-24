import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { filmSelector, getFilm } from '../features/films/FilmSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import Characters from './Characters';
import DisplayFilmInfo from './DisplayFilmInfo';
import ErrorPage from './ErrorPage';
import LoadingSpinner from './loading-spinner/LoadingSinner';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';

const Film: React.FC = (props: any) => {

    const dispatch = useAppDispatch();
    const { loading, errors } = useAppSelector(filmSelector);
    const location = useLocation();
    const navigate = useNavigate();
    const errorCode = 404;

    useEffect(() => {
        dispatch(getFilm(location.state?.film?.url));
    }, [dispatch, location.state?.film?.url]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (location.state?.film === undefined || location.state?.film === null) {
        return <ErrorPage errorCode={errorCode} />;
      }

    return (
        <Container>
            <DisplayFilmInfo title={location.state?.film?.title}
                            episode_id={location.state?.film?.episode_id}
                            opening_crawl={location.state?.film?.opening_crawl}
                            director={location.state?.film?.director}
                            producer={location.state?.film?.producer}
                            release_date={location.state?.film?.release_date}
                            species={location.state?.film?.species}
                            starships={location.state?.film?.starships}
                            vehicles={location.state?.film?.vehicles}
                            characters={location.state?.film?.characters}
                            url={location.state?.film?.url}
                            planets={location.state?.film?.planets}
                            created={location.state?.film?.created}
                            edited={location.state?.film?.edited}
            />
            <br />
            <Characters characters={location.state?.film?.characters} />
            <Planets planets={location.state?.film?.planets} />
            <Species species={location.state?.film?.species} />
            <Starships starships={location.state?.film?.starships} />
            <Vehicles vehicles={location.state?.film?.vehicles} />
            <br />
            <Button onClick={() => navigate(-1)}>Back</Button>
        </Container>
    )
}

export default Film;
