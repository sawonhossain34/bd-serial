import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";


const GenMovieList = () => {
    return (
        <div>
            {
                GenresList.genere.map((singleGen,index) =>index<=4&&(
                    <div className="p-8 px-8 md:px-16">
                        <h2 className="text-3xl text-white font-bold">{singleGen.name}</h2>
                        <MovieList genreId={singleGen.id} index_={index}/>
                    </div>
                ))
            }
        </div>
    );
};

export default GenMovieList;