import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata: Metadata = {
    title: "Home"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    console.log("Fetching Movies..."); // 서버 컴포넌트임을 확인
    const res = await fetch(API_URL);
    const json = await res.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
                    {movies.map(movie => (
                        <Movie 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                        />
                    ))}
            {/* <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li> */}
        </div>);
}


/* Client에서 API를 통해 데이터 fetch
"use client";

import { useState, useEffect } from "react";

export default function Tomato() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const json = await res.json();
        setMovies(json);
        setIsLoading(false);
    };


    useEffect(() => {
         getMovies();
    } ,[]);

    return <div>
        {isLoading ? "Loading..." : JSON.stringify(movies)}
    </div>
}
*/