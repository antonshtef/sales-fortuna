import { Card } from "../Card";
import "./Slider.scss";
import { users } from "../../services/users";
import buttonLeft from "../../image/button/button-left.svg";
import buttonRight from "../../image/button/button-right.svg";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import dotDark from "../../image/dots/dot-dark.svg";
import dotLight from "../../image/dots/dot-light.svg";

const dotsFunc = (rest: number) => {
  let arr = [];
  
  for (let i = 0; i < rest; i++) {
    arr.push(i)
  }

  return arr;
}

export const Slider = () => {
  const [transform, setTransform] = useState(0);
  const [widthContent, setWidthContent] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX.current - currentX;
    if (diffX > 50 && currentPosition < dots.length - 1) { // Swipe left
      setTransform(prev => prev + (widthContent + 18));
      setCurrentPosition(prev => prev + 1);
      isDragging.current = false;
    } else if (diffX < -50 && currentPosition > 0) { // Swipe right
      setTransform(prev => prev - (widthContent + 18));
      setCurrentPosition(prev => prev - 1);
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const updateContentWidth = () => {
      if (content.current) {
        setWidthContent(content.current.offsetWidth)
      }
      setCurrentPosition(0);
      setTransform(0);
    }

    updateContentWidth();

    window.addEventListener('resize', updateContentWidth);

    return () => window.removeEventListener('resize', updateContentWidth);
   
  }, []);

  let length = users.length / (Math.floor(widthContent / 380));

  console.log(widthContent)
  let dots: number[] = []

  if (widthContent) {
    dots = dotsFunc(length)
  }

  const content = useRef<HTMLDivElement>(null);

  const handleLeftClick = () => {
    setTransform(prev => prev - (widthContent + 18));
    setCurrentPosition(prev => prev - 1);
  };

  const handleRightClick = () => {
    setTransform(prev => prev + (widthContent + 18));
    setCurrentPosition(prev => prev + 1);
  };

  console.log(dots)

  return (
    <section className='slider'>
      <div className='slider__container'>
        <button
          className={classNames("slider__button", {
            "slider__button--disabled": transform === 0,
          })}
          onClick={handleLeftClick}
        >
          <img src={buttonLeft} alt='right' />
        </button>
        <div 
          className='slider__content'
          ref={content}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <ul
            className='slider__cards'
            style={{ transform: `translateX(-${transform}px)` }}
          >
            {users.map((user) => (
              <li key={user.id} className='slider__cards_item'>
                <Card
                  userId={user.id}
                  logo={user.logo}
                  text={user.text}
                  autorImg={user.autorImg}
                  autorName={user.autorName}
                  autorInfo={user.autorInfo}
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          className={classNames("slider__button", {
            "slider__button--disabled": currentPosition === dots.length - 1 ? true : false,
          })}
          onClick={handleRightClick}
        >
          <img src={buttonRight} alt='left' />
        </button>
      </div>
      <div className='slider__dots'>
        {dots.map(dot => (
          <a 
          key={dot}
          href='#' 
          className='slider__dot'
          onClick={() => {
            setTransform(dot * (widthContent + 18))
            setCurrentPosition(dot)
          }}
        >
          <img 
            src={dot === currentPosition ? dotDark : dotLight} 
            alt='dot-left' 
          />
        </a>
        ))}
      </div>
    </section>
  );
};
