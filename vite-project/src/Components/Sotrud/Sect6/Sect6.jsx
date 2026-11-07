import "./Sect6.scss"
import {Photo} from "../../../Photo.js"

export default function Sect6() {
    const planBenefits = [
        "индивидуальный прайс-лист",
        "расчет прогнозируемой прибыли и сроков окупаемости",
        "бренд-зону Kugoo",
        "разработку сайта",
        "и еще +15 услуг под ключ"
    ]

    return (
        <section className="sect12">
            <div className="promoBannerWrapper">
                <div className="promoContent">
                    <div className="badgeFree">Бесплатно</div>
                    <h2 className="promoTitle">
                        ПОЛУЧИТЕ ГОТОВЫЙ ПЛАН<br />
                        РАЗВИТИЯ БИЗНЕСА<br />
                        ПО ПРОДАЖЕ ТОВАРОВ KUGOO
                    </h2>
                    <p className="promoSubtitle">
                        Подготовим для вас бизнес-план, который включает:
                    </p>
                    
                    <div className="benefitsList">
                        {planBenefits.map((text, index) => (
                            <div className="benefitItem" key={index}>
                                <img className="checkIcon" src={Photo.iconCheckWhite} alt="" />
                                <p className="benefitText">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="promoFormBox">
                    <h3 className="formTitle">ПОЛУЧИТЕ ПРАЙС-ЛИСТ<br />С ОПТОВЫМИ ЦЕНАМИ</h3>
                    <p className="formSubtitle">а также рассчитаем вашу прибыль<br />от продажи товаров Kugoo</p>
                    
                    <form className="priceForm">
                        <input className="formInput" type="tel" placeholder="+7 (___) __ - __ - __" />
                        <button className="formBtn" type="button">Скачать прайс-лист</button>
                        
                        <div className="formAgreement">
                            <input className="customCheckbox" type="checkbox" id="planAgreement" defaultChecked />
                            <label className="agreementLabel" htmlFor="planAgreement">
                                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="#">политикой конфиденциальности</a>
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            <div className="statsWrapper">
                <div className="statsTextCol">
                    <h2 className="statsTitle">
                        KUGOO — САМЫЙ<br />
                        ПОПУЛЯРНЫЙ БРЕНД<br />
                        ЭЛЕКТРОТРАНСПОРТА<br />
                        В РОССИИ
                    </h2>
                    <p className="statsDesc">
                        Количество поисковых запросов от потенциальных клиентов в 2020 г. по сравнению с 2019 г. выросло в 2 раза согласно сервису оценки спроса и популярности.
                    </p>
                    <p className="statsDesc">
                        Kugoo имеет лидирующие позиции среди конкурирующих брендов: спрос на продукцию от завода Jilong выше в несколько раз.
                    </p>
                </div>
                
                <div className="statsImageCol">
                    <img className="analyticsImg" src={Photo.analyticsImg} alt="Статистика запросов" />
                </div>
            </div>
        </section>
    )
}