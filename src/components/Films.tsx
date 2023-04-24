import React, { useEffect } from 'react';
import { getAllFilms, filmsSelector } from '../features/films/FilmSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import Grid from './ag-grid/Grid';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './loading-spinner/LoadingSinner';

const Films = () => {
    const dispatch = useAppDispatch();
    const { films, loading } = useAppSelector(filmsSelector);
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getAllFilms());
    }, [dispatch]);

    const columnDefs = [
        {
            headerName: "Title",
            field: "title",
            width: 200,
            sortable: true
        },
        {
            headerName: "Episode",
            field: "episode_id",
            width: 100,
            sortable: true
        },
        {
            headerName: "Summary",
            field: "opening_crawl",
            width: 355,
            sortable: true,
            autoHeight: true,
            tooltipField: 'opening_crawl'
        },
        {
            headerName: "Director",
            field: "director",
            width: 150,
            sortable: true,
            tooltipField: 'director'
        },
        {
            headerName: "Producer",
            field: "producer",
            width: 150,
            sortable: true,
            tooltipField: 'producer'
        },
        {
            headerName: "Release Date",
            field: "release_date",
            width: 150,
            sortable: true
        }
    ];
    const onRowClicked = (event: any) => {
        navigate(`film/${event?.data?.title}`, {
            state: {
                film: event?.data
            }
        }); 
    }

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <h1 className="display-4 my-3 text-center">Star Wars Movies</h1>
            <Grid rowData={films}
                columnDefs={columnDefs}
                onRowClicked={onRowClicked}
            />
        </>
    )
};

export default Films;
