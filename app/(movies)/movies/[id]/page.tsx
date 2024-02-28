import { Suspense } from "react";

import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    // 병렬적으로 API 요청
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    // 컴포넌트로 분리하여 API 요청후 Render -> React의 Suspense 사용
    return (<div>
        <h3>Movie detail page</h3>
        {/* fallback: API 요청중(Loading) 중 사용자에게 보여줄 내용 */}
        <Suspense fallback={<h1>Loading Movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Videos</h1>}>
            <MovieVideos id={id} />
        </Suspense>

    </div>);
}