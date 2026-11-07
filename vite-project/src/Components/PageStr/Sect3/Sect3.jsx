import "./Sect3.scss"
import {Photo} from "../../../Photo.js"

export default function Sect3() {
    const reviews = [
        Photo.rev1, Photo.rev2, Photo.rev3, Photo.rev4,
        Photo.rev5, Photo.rev6, Photo.rev7, Photo.rev8
    ];

    return (
        <section className="pageStrSect3">
            <div className="containerWrapper">
                
                <div className="reviewsBlock">
                    <div className="reviewsHeader">
                        <h2 className="reviewsTitle">ОТЗЫВЫ И ФОТО РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ</h2>
                        <a href="#" className="reviewsLink">Читать отзывы на Яндекс &rarr;</a>
                    </div>
                    
                    <div className="reviewsGrid">
                        {reviews.map((img, index) => (
                            <div className="reviewImgWrapper" key={index}>
                                <img src={img} alt={`Отзыв ${index + 1}`} className="reviewImg" />
                            </div>
                        ))}
                    </div>
                </div>


                <div className="promoBannersRow">
                    
                    <div className="promoBanner">
                        <div className="bannerContent">
                            <h3 className="bannerTitle">
                                ХОТИТЕ ПРОВЕРИТЬ<br/>
                                ТОВАР ПЕРЕД<br/>
                                ПОКУПКОЙ?
                            </h3>
                            <p className="bannerText">
                                Продемонстрируем нужный товар<br/>
                                онлайн или в магазине
                            </p>
                            <a href="#" className="bannerLink">Подробнее &rarr;</a>
                        </div>
                        
                        <div className="bannerGraphics handlebarSide">
                            <div className="purpleCircle"></div>
                            <img src={Photo.promoHandlebar} alt="Руль самоката" className="bannerPhoto handlebarImg" />
                        </div>
                    </div>

                    <div className="promoBanner">
                        <div className="bannerContent">
                            <h3 className="bannerTitle">
                                НАШЛИ KUGOO<br/>
                                JILONG ДЕШЕВЛЕ?
                            </h3>
                            <p className="bannerText">
                                Сообщите нам в каком магазине<br/>
                                цена ниже, а мы сделаем вам крутое<br/>
                                спецпредложение!
                            </p>
                            <a href="#" className="bannerLink">Да, нашли дешевле &rarr;</a>
                        </div>
                        
                        <div className="bannerGraphics girlSide">
                            <div className="purpleBackdrop"></div>
                            <img src={Photo.promoGirlPhone} alt="Девушка с телефоном" className="bannerPhoto girlImg" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}