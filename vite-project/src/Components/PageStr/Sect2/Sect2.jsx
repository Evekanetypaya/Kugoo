import "./Sect2.scss"
import {Photo} from "../../../Photo.js"

export default function Sect2() {
    const tabs = ["О товаре", "Характеристики", "Доставка и оплата", "Гарантии", "Версия MAX"];
    
    const complectItems = [
        { name: "Инструкция", desc: "Посмотреть", icon: Photo.iconInstruction },
        { name: "Зарядное устройство", icon: Photo.iconCharger },
        { name: "Чехол", icon: Photo.iconCover },
        { name: "Гарантийный талон", icon: Photo.iconWarranty }
    ];

    const features = ["Для города", "Быстрый", "Комфортный", "Легкий"];

    return (
        <section className="pageStrSect2">
            <div className="containerWrapper">
                
                <div className="tabsNav">
                    {tabs.map((tab, index) => (
                        <div className={`tabItem ${index === 0 ? 'active' : ''}`} key={index}>
                            {tab}
                        </div>
                    ))}
                </div>

                <div className="infoBlock">
                    <div className="infoLeft">
                        <h2 className="infoTitle">
                            ЭЛЕКТРОСАМОКАТ KUGOO KIRIN M4<br/>
                            С МОЩНЫМИ ХАРАКТЕРИСТИКАМИ<br/>
                            И СТИЛЬНЫМ ДИЗАЙНОМ
                        </h2>
                        <p className="infoText">
                            Приобретая самокат Kugoo Kirin M4, вы получите множество положительных
                            эмоций и сможете беспрепятственно передвигаться по городу.
                        </p>
                        <p className="infoText">
                            Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу
                            и батарее. Удобный дисплей позволяет с легкостью отслеживать и переключать
                            скорости передвижения, контролировать заряд аккумулятора, а также пройденный 
                            путь за все время и за текущую поездку в километрах.
                        </p>
                    </div>

                    <div className="infoRight">
                        <div className="complectBlock">
                            <h3 className="blockTitle">Что в комплекте</h3>
                            <div className="complectGrid">
                                {complectItems.map((item, index) => (
                                    <div className="complectItem" key={index}>
                                        <img src={item.icon} alt="" className="itemIcon" />
                                        <div className="itemTextCol">
                                            <span className="itemName">{item.name}</span>
                                            {item.desc && <a href="#" className="itemDesc">{item.desc}</a>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="featuresBlock">
                            <h3 className="blockTitle">Ключевые особенности Kugoo Kirin M4</h3>
                            <div className="featuresList">
                                {features.map((feature, index) => (
                                    <div className="featureTag" key={index}>{feature}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testDriveBanner">
                    <div className="bannerImageCol">
                        <img src={Photo.testDriveBannerImg} alt="Тест-драйв" className="bannerImg" />
                    </div>
                    
                    <div className="bannerFormCol">
                        <div className="bannerTextWrapper">
                            <h2 className="bannerTitle">
                                ЗАПИШИТЕСЬ НА<br/>
                                БЕСПЛАТНЫЙ ТЕСТ-ДРАЙВ<br/>
                                KUGOO KIRIN M4 В МОСКВЕ
                            </h2>
                            <p className="bannerSubtitle">
                                Оставьте свой номер, менеджер свяжется с вами в течение<br/>
                                5 минут, чтобы уточнить дату и время
                            </p>
                        </div>
                        
                        <form className="bannerForm">
                            <div className="inputRow">
                                <input type="tel" className="phoneInput" placeholder="+7 (___) __ - __ - __" />
                                <button type="button" className="submitBtn">Оставить заявку на тест-драйв</button>
                            </div>
                            <div className="agreementRow">
                                <img src={Photo.iconCheckPurple} alt="" className="checkIcon" />
                                <p className="agreementText">
                                    Нажимая на кнопку, вы соглашаетесь на обработку<br/>
                                    персональных данных и <a href="#">политикой конфиденциальности</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}