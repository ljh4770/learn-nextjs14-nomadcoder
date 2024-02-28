import { API_MOVIE_LIST } from "../app/about-us/constants";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
    console.log(`Fetching a movie: ${Date.now()}`);
    const res = await fetch(`${API_MOVIE_LIST}/${id}`);
    return res.json();
}


export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img
                className={styles.poster}
                src={movie.poster_path}
                alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(2)}</h3>
                <p>{movie.overview}</p>
                <a
                    href={movie.homepage}
                    target={"_blank"}
                >Homepage &rarr;</a>
            </div>
        </div>
    );
}