
import { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId)
            .then((res) => {
                setMovieList(res.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const sliderRight = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft += window.innerWidth - 110;
        }
    };

    const sliderLeft = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft -= window.innerWidth - 110;
        }
    };

    return (
        <div className="relative">
            <IoChevronBackOutline onClick={() => sliderLeft(elementRef.current)}
                className="hidden md:block text-white text-[30px] absolute bottom-0 left-0  mt-[-10px] z-10 cursor-pointer"
            />

            <div
                ref={elementRef}
                className="flex overflow-x-auto gap-3 scrollbar-none scroll-smooth pt-5 px-3 pb-10"
            >
                {movieList.map((item, index) => (
                    <>
                        {index_%3==0? <HrMovieCard movie={item} />:<MovieCard movie={item} />}
                    </>
                ))}
            </div>
            <IoChevronForwardOutline onClick={() => sliderRight(elementRef.current)}
                className="hidden md:block text-white text-[30px] z-10 absolute  cursor-pointer  bottom-0 right-0"
            />
        </div>
    );
};

export default MovieList;
