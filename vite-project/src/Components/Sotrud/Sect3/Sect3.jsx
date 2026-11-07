import "./Sect3.scss"
import {Photo} from "../../../Photo.js"


export default function Sect3() {
    const benefits = [
        "Гарантию на товары 1 месяц и возможность приобрести годовую гарантию",
        "Медиаконтент, который можно разместить на своем сайте и соцсетях",
        "Удобные способы оплаты — наличный и безналичный расчет",
        "Отсутствие демпинга на рынке за счет контролируемой МРЦ"
    ]

    const stats = [
        {
            prefix: "До",
            value: "25%",
            desc: "ваша прибыль с продажи единицы товара Kugoo"
        },
        {
            prefix: "от",
            value: "3 ШТ.",
            desc: "минимальная оптовая партия"
        }
    ]

    return (
        <section className="sect9">
            <div className="dealerContainer">
                <div className="topContentRow">
                    <div className="leftInfoBlock">
                        <h2 className="mainTitle">ВЫБИРАЙТЕ ПОПУЛЯРНЫЕ ТОВАРЫ<br />БЕЗ НАЦЕНОК ПОСРЕДНИКОВ</h2>
                        <p className="subTitle">являясь официальным дилером Kugoo в России</p>
                        
                        <p className="listTitle">Сотрудничая с нами, вы получите:</p>
                        
                        <div className="benefitsList">
                            {benefits.map((text, index) => (
                                <div className="benefitItem" key={index}>
                                    <img className="checkIcon" src={Photo.iconCheckBlue} alt="" />
                                    <p className="benefitText">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="statsRow">
                            {stats.map((stat, index) => (
                                <div className="statCard" key={index}>
                                    <p className="statValue">
                                        <span className="statPrefix">{stat.prefix}</span> {stat.value}
                                    </p>
                                    <p className="statDesc">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rightMediaBlock">
                        <div className="partnerBadge">
                            <p className="badgePercent">93%</p>
                            <p className="badgeText">партнеров становятся<br />постоянными, благодаря<br />нашему подходу</p>
                        </div>
                        
                        <div className="certificateSlider">
                            <div className="sliderArrow leftArrow">
                                <span>&#10094;</span>
                            </div>
                            <img className="certificateImg" src={Photo.certificateImg} alt="Сертификат" />
                            <div className="sliderArrow rightArrow">
                                <span>&#10095;</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomFormBanner">
                    <p className="bannerText">ДАВАЙТЕ ОБСУДИМ УСЛОВИЯ СОТРУДНИЧЕСТВА,<br />КОТОРЫЕ ПОДХОДЯТ ИМЕННО ДЛЯ ВАШЕЙ КОМПАНИИ</p>
                    <form className="inlineForm">
                        <input className="formInput" type="tel" placeholder="+7 (___) __ - __ - __" />
                        <button className="formBtn" type="button">Скачать прайс-лист</button>
                    </form>
                </div>
            </div>
        </section>
    )
}