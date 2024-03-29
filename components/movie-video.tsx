import { API_MOVIE_LIST } from "../app/about-us/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
    console.log(`Fetching videos: ${Date.now()}`);
    // throw new Error("Something broke...");
    const res = await fetch(`${API_MOVIE_LIST}/${id}/videos`);
    return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map(video => (
                <iframe
                    key={video.id}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                />
            ))}
        </div>
    );
}