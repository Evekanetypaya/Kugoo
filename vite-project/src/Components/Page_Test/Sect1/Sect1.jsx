import "./Sect1.scss"
import {Photo} from "../../../Photo.js"

export default function Sect1() {
    const features = [
        { icon: Photo.iconRoute, text: "Поймете, какая\nмодель вам подходит" },
        { icon: Photo.iconLightning, text: "Проверите лучшие\nсамокаты в деле" }
    ]

    const benefits = [
        "Понять подходит ли вам конкретная модель;",
        "Испытать самокат в «реальной жизни»;",
        "Оценить удобство хранения и эксплуатации;",
        "Узнать реальные характеристики и возможности модели."
    ]

    return (
        <section className="sect1">
            <div className="containerWrapper">
                <div className="breadcrumbsRow">
                    <span className="breadcrumbLink">Главная</span>
                    <span className="breadcrumbSeparator">/</span>
                    <span className="breadcrumbCurrent">Тест-драйв</span>
                </div>

                <div className="heroBanner" style={{ backgroundImage: `url(${Photo.bgTestDrive})` }}>
                    <div className="heroContent">
                        <div className="locationRow">
                            <img className="locationIcon" src={Photo.icon_pin} alt="" />
                            <p className="locationText">Восточно-Кругликовская улица, 86 <span>Вт - Сб 10:00 - 20:00</span></p>
                        </div>
                        
                        <h1 className="heroTitle">
                            ЗАПИШИТЕСЬ НА БЕСПЛАТНЫЙ<br />
                            ТЕСТ-ДРАЙВ ЭЛЕКТРОСАМОКАТОВ
                        </h1>
                        <p className="heroSubtitle">в Москве без ограничения по времени</p>
                        
                        <div className="featuresRow">
                            {features.map((item, index) => (
                                <div className="featureItem" key={index}>
                                    <div className="featureIconBox">
                                        <img className="featureIcon" src={item.icon} alt="" />
                                    </div>
                                    <p className="featureText">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        
                        <button className="heroBtn" type="button">Записаться</button>
                    </div>
                </div>

                <div className="benefitsBlock">
                    <div className="benefitsTextCol">
                        <h2 className="benefitsTitle">
                            ОПРЕДЕЛИТЕ МАКСИМАЛЬНО<br />
                            ПОДХОДЯЩУЮ ВАМ МОДЕЛЬ<br />
                            НЕ ТЕОРЕТИЧЕСКИ, А НА ПРАКТИКЕ
                        </h2>
                        
                        <div className="benefitsListWrapper">
                            <p className="listTitle">Тест-драйв поможет:</p>
                            <div className="listItems">
                                {benefits.map((text, index) => (
                                    <div className="listItem" key={index}>
                                        <img className="checkIcon" src={Photo.iconCheckCircle} alt="" />
                                        <p className="listText">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="benefitsImageCol">
                        <img className="benefitsImg" src={Photo.scootersParked} alt="Самокаты на тест-драйве" />
                    </div>
                </div>
            </div>
        </section>
    )
}