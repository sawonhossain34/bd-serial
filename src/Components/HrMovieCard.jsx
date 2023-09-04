const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({movie}) => {

    return (
        <section className="text-white hover:scale-110 transition-all duration-150 ease-in">
            <img src={IMAGE_BASE_URL+movie.backdrop_path}  className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-500 "/>
            <h2 className="w-[110px] md:w-[200px]">{movie.title}</h2>
        </section>
    );
};

export default HrMovieCard;