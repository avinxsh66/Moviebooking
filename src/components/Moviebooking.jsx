import React, { useState } from 'react';

const SCREENS = [
    {
        id: 1,
        time: "10:00am",
        seats: [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    },
    {
        id: 2,
        time: "02:00pm",
        seats: [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    },
    {
        id: 3,
        time: "06:00pm",
        seats: [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    },
];

const MOVIES = [
    {
        id: 1,
        title: "Leo",
        image: "https://m.media-amazon.com/images/M/MV5BNDhhMjU3ZTktNWE5OS00NmY1LTlkMGMtYzczMjljNjUzMjdjXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
    },
    {
        id: 2,
        title: "Jailer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3By4VzPDGKqaSYnBH-VGOL6mo_3wsZpqy0Q&usqp=CAU",
    },
    {
        id: 3,
        title: "Vikram",
        image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/6241/1296241-v-757c5ceacbfa",
    },
];

export default function MovieBooking() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedScreen, setSelectedScreen] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelect = (index, screen) => {
        if (screen.id !== selectedScreen?.id) {
            setSelectedSeats([index]);
            setSelectedScreen(screen);
            return;
        }

        setSelectedScreen(screen);

        if (selectedSeats.includes(index)) {
            setSelectedSeats(selectedSeats.filter((i) => i !== index));
        } else {
            setSelectedSeats((seats) => [...seats, index]);
        }
    };

    return (
        <div>
            <h1>Movie booking</h1>
            <h2>Choose your movie:</h2>
            <div className="movie-selection">
                {MOVIES.map((movie) => (
                    <div className="movie" key={movie.id} onClick={() => setSelectedMovie(movie)}>
                        <img className="movie-poster" src={movie.image} alt={movie.title} />
                        <div className="movie-title">{movie.title}</div>
                    </div>
                ))}
            </div>
            {selectedMovie && (
                <div>
                    <h2>Choose your screen</h2>
                    <div className="screen-selection">
                        {SCREENS.map((screen) => (
                            <div
                                key={screen.id}
                                className={`screen ${screen.id === selectedScreen?.id ? "selected" : ""} ${screen.seats.includes(1) ? "available" : ""}`}
                                onClick={() => setSelectedScreen(screen)}
                            >
                                <div className="screen-number">Screen {screen.id}</div>
                                <div className="screen-time">{screen.time}</div>
                                <div className="movie-title">{selectedMovie.title}</div>
                                <div className="seats">
                                    {screen.seats.map((seat, index) => (
                                        <div
                                            key={index}
                                            className={`seat ${seat ? "available" : "unavailable"} ${selectedSeats.includes(index) && selectedScreen?.id === screen.id ? "selected" : ""} ${selectedSeats.includes(index) ? "booked" : ""}`}
                                            onClick={() => {
                                                if (seat) {
                                                    handleSeatSelect(index, screen);
                                                }
                                            }}
                                        >
                                            <div className="seat-number">{index + 1}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
