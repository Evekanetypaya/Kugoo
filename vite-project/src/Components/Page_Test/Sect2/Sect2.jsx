import "./Sect2.scss"
import {Photo} from "../../../Photo.js"

export default function Sect2() {
    const learnList = [
        "Как подготовить самокат к поездке;",
        "Как «завести» самокат;",
        "Как вести себя во время поездки и обезопасить себя и окружающих;",
        "Как складывать и раскладывать электросамокат;",
        "Как ухаживать за своим девайсом."
    ]

    const testScooters = [
        { badge: "ХИТ", badgeType: "hit", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: true },
        { badge: "Новинка", badgeType: "new", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { badge: "ХИТ", badgeType: "hit", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false },
        { badge: "Новинка", badgeType: "new", name: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", newPrice: "29 900 ₽", showArrows: false }
    ]

    return (
        <section className="sect2Test">
            <div className="learningBlock">
                <div className="learningImageCol">
                    <img className="learningImg" src={Photo.learningImg} alt="Обучение езде" />
                </div>
                
                <div className="learningTextCol">
                    <h2 className="learningTitle">
                        НАУЧИМ ПРАВИЛЬНОЙ<br />
                        И БЕЗОПАСНОЙ ЕЗДЕ В ГОРОДЕ<br />
                        ВАС ИЛИ ВАШЕГО РЕБЕНКА
                    </h2>
                    <p className="learningSubtitle">На обучении специалист расскажет:</p>
                    
                    <div className="learningList">
                        {learnList.map((text, index) => (
                            <div className="learningItem" key={index}>
                                <img className="checkIcon" src={Photo.iconCheckCircle} alt="" />
                                <p className="learningText">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="modelsBlock">
                <h2 className="modelsTitle">
                    СЕЙЧАС ДЛЯ ТЕСТ-ДРАЙВА И ОБУЧЕНИЯ<br />
                    ДОСТУПНЫ СЛЕДУЮЩИЕ МОДЕЛИ
                </h2>
                
                <div className="modelsGrid">
                    {testScooters.map((item, index) => (
                        <div className="productCard" key={index}>
                            <div className="cardImageArea">
                                <div className={`cardBadge ${item.badgeType === 'hit' ? 'badgeHit' : 'badgeNew'}`}>
                                    {item.badge}
                                </div>
                                <img className="compareIcon" src={Photo.iconCompare} alt="Сравнить" />
                                
                                {item.showArrows && (
                                    <>
                                        <div className="sliderArrow arrowLeft">
                                            <img src={Photo.iconArrowLeft} alt="Влево" />
                                        </div>
                                        <div className="sliderArrow arrowRight">
                                            <img src={Photo.iconArrowRight} alt="Вправо" />
                                        </div>
                                    </>
                                )}
                                
                                <img className="productMainImg" src={Photo.scooterM4} alt={item.name} />
                            </div>

                            <div className="cardContentArea">
                                <h3 className="productTitle">{item.name}</h3>
                                
                                <div className="specsGrid">
                                    <div className="specItem">
                                        <img className="specIcon" src={Photo.iconBattery} alt="" />
                                        <span className="specText">{item.battery}</span>
                                    </div>
                                    <div className="specItem">
                                        <img className="specIcon" src={Photo.iconPower} alt="" />
                                        <span className="specText">{item.power}</span>
                                    </div>
                                    <div className="specItem">
                                        <img className="specIcon" src={Photo.iconSpeed} alt="" />
                                        <span className="specText">{item.speed}</span>
                                    </div>
                                    <div className="specItem">
                                        <img className="specIcon" src={Photo.iconTimer} alt="" />
                                        <span className="specText">{item.time}</span>
                                    </div>
                                </div>

                                <div className="purchaseRow">
                                    <div className="priceBlock">
                                        <p className="priceOld">{item.oldPrice}</p>
                                        <p className="priceNew">{item.newPrice}</p>
                                    </div>
                                    <div className="actionButtons">
                                        <div className="circleBtn">
                                            <img src={Photo.iconCart} alt="В корзину" />
                                        </div>
                                        <div className="circleBtn">
                                            <img src={Photo.iconHeart} alt="В избранное" />
                                        </div>
                                    </div>
                                </div>

                                <button className="testDriveButton">Записаться на тест-драйв</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}