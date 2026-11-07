import { Link } from "react-router-dom";
import "./Sect1.scss";
import { Photo } from "../../../Photo.js";

export default function Sect1() {
    const cities = [
        "Москва и МО", 
        "Санкт-Петербург и Ленобласть", 
        "Краснодар", 
        "Минск", 
        "Пункты выдачи CDEK"
    ];

    return (
        <section className="contactSect1">
            <div className="containerWrapper">
                
                <div className="breadcrumbsRow">
                    <img src={Photo.icon_home} alt="Главная" className="homeIcon" />
                    <Link to="/" className="breadcrumbLink">Главная</Link>
                    <span className="breadcrumbSeparator">/</span>
                    <span className="breadcrumbCurrent">Контакты</span>
                </div>
                <div className="heroBanner">
                    <img src={Photo.contactBannerBg} alt="" className="bannerBg" />
                    <h1 className="heroTitle">КОНТАКТЫ И АДРЕСА</h1>
                </div>
                <div className="cityTabs">
                    {cities.map((city, index) => (
                        <div className={`tabItem ${index === 0 ? 'active' : ''}`} key={index}>
                            {city}
                        </div>
                    ))}
                </div>

                <div className="contentSplit">
                    
                    <div className="infoCol">
                        <h2 className="infoTitle">Адрес магазина и сервисного центра:</h2>
                        
                        <div className="infoCard">
                            <div className="infoRow">
                                <img src={Photo.iconLocationPurple} alt="Адрес" className="infoIcon" />
                                <div className="infoContent">
                                    <div className="addressLine">
                                        <span className="addressText">ул. Ткацкая, 5 стр. 16 (м. Семеновская)</span>
                                        <a href="#" className="routeLink">Как пройти</a>
                                    </div>
                                    <span className="scheduleText">Пн-Вс 10:00 - 20:00 (магазин)</span>
                                    <span className="scheduleText">Пн-Вс 10:00 - 20:00 (сервисный центр)</span>
                                </div>
                            </div>
                            <div className="infoRow">
                                <img src={Photo.iconPhonePurple} alt="Телефон" className="infoIcon" />
                                <div className="infoContent phonesGrid">
                                    <div className="phoneBlock">
                                        <span className="phoneLabel">Магазин</span>
                                        <a href="tel:+74994061579" className="phoneValue">+7 (499) 406-15-79</a>
                                    </div>
                                    <div className="phoneBlock">
                                        <span className="phoneLabel">Сервисный центр</span>
                                        <a href="tel:+74993507692" className="phoneValue">+7 (499) 350-76-92</a>
                                    </div>
                                </div>
                            </div>
                            <div className="infoRow">
                                <div className="infoIcon placeholderIcon"></div>
                                <div className="infoContent">
                                    <p className="plainText">
                                        Бесплатная парковка (для въезда предварительно запросите у менеджера пропуск)
                                    </p>
                                </div>
                            </div>

                            <div className="infoRow">
                                <img src={Photo.iconInfoPurple} alt="Внимание" className="infoIcon smallIcon" />
                                <div className="infoContent">
                                    <p className="plainText">
                                        Перед посещением магазина, пожалуйста, уточняйте наличие рассматриваемой вами модели по телефону у менеджера.
                                    </p>
                                </div>
                            </div>

                            <div className="infoRow">
                                <img src={Photo.iconInfoPurple} alt="Внимание" className="infoIcon smallIcon" />
                                <div className="infoContent">
                                    <p className="plainText">
                                        Возьмите с собой паспорт или другой документ, удостоверяющий личность — он может понадобиться для прохождения через пропускной пункт.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mapCol">
                        <img src={Photo.contactMapImg} alt="Карта проезда" className="mapImg" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}