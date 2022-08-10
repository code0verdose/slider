import {Button} from "./Button";
import {useEffect, useState} from "react";

export function Slider({userOnPage}) {

    const [imagesArr, setImagesArr] = useState([]);
    const {images} = imagesArr;
    const [loading, setLoading] = useState(true);
    const [slideIndex, setSlideIndex] = useState(1)


    useEffect(() => {
        setLoading(true);
        fetch("https://slider.ymatuhin.workers.dev/")
            .then((res) => res.json())
            .then((data) => {
                setImagesArr(data);
                setLoading(false);
            });
    }, []);


    const showClickedSlide = (index) => {
        setSlideIndex(index);
    };

    const nextSlide = () => {
        if (slideIndex !== images.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === images.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(images.length);
        }
    };


    return (
        <div className="carousel slide">
            <div className="carousel-indicators">
                {loading === false &&
                    Array.from({length: images.length}).map((item, index) => {
                        return (
                            <button
                                type="button"
                                className={slideIndex === index + 1 ? "active" : ""}
                                onClick={() => showClickedSlide(index + 1)}
                                data-bs-target
                                key={index}
                            ></button>
                        );
                    })}
            </div>
            <div className="carousel-inner">
                {loading === false &&
                    images.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    slideIndex === index + 1
                                        ? "sliderItem nowActive"
                                        : "sliderItem"
                                }
                            >
                                <img
                                    src={item}
                                    index={index}
                                    className="img d-block w-100"
                                    alt="..."
                                />
                            </div>
                        );
                    })}
            </div>
            <Button direction={"prev"} onClick={prevSlide}/>
            <Button direction={"next"} onClick={nextSlide}/>
        </div>
    );
}
