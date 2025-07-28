import "./Card.scss";
import quotes from "../../image/sales-fortuna-quotes.svg";

type Props = {
  userId: number;
  logo: string;
  text: string;
  autorImg: string;
  autorName: string;
  autorInfo: string;
};

export const Card: React.FC<Props> = ({
  userId,
  logo,
  text,
  autorImg,
  autorName,
  autorInfo,
}) => {
  return (
    <div className='card'>
      <div className='card__container'>
        <div className='card__logo'>
          <img src={logo} alt='Serene Living' className='card__img' />
        </div>
        <div className='card__main'>
          <p className='card__text'>{text}</p>
        </div>
        <div className='card__quotes'>
          <img src={quotes} alt='quotes' />
        </div>
        <div className='card__autor'>
          <img src={autorImg} alt='Autor' className='card__autor_img' />
          <div className='card__autor_text'>
            <span className='card__autor_name'>{autorName}</span>
            <span className='card__autor_info'>{autorInfo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
