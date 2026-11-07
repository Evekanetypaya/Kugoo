import "./Sect1.scss"
import {Photo} from "../../../Photo.js"


export default function Sect1() {
    const features = [
        { icon: Photo.iconWallet, text: "Отсутствие демпинга — контроль цен и МРЦ" },
        { icon: Photo.iconBox, text: "Бесплатная доставка до любой ТК" },
        { icon: Photo.iconRefresh, text: "Беспроблемный возврат и замена брака" },
        { icon: Photo.iconMedia, text: "Готовый медиаконтент для вашего сайта и соцсетей" }
    ]

    return (
        <section className="sect8">
            <div className="wholesaleBanner">
                <div className="wholesaleInfo">
                    <h2 className="infoTitle">ПОКУПАЙТЕ ТОВАРЫ KUGOO<br />ПО ОПТОВЫМ ЦЕНАМ<br />ОТ ОФИЦИАЛЬНОГО ДИЛЕРА</h2>
                    <p className="infoSubtitle">Ваша прибыль — до 25% от закупочной стоимости 1 единицы товара</p>
                    
                    <div className="featuresGrid">
                        {features.map((item, index) => (
                            <div className="featureItem" key={index}>
                                <div className="featureIconBox">
                                    <img className="featureIcon" src={item.icon} alt="" />
                                </div>
                                <p className="featureText">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="wholesaleFormBox">
                    <h3 className="formTitle">ПОЛУЧИТЕ ПРАЙС-ЛИСТ<br />С ОПТОВЫМИ ЦЕНАМИ</h3>
                    <p className="formSubtitle">а также рассчитаем вашу прибыль<br />от продажи товаров Kugoo</p>
                    
                    <form className="priceForm">
                        <input className="formInput" type="tel" placeholder="+7 (___) __ - __ - __" />
                        <button className="formBtn" type="button">Скачать прайс-лист</button>
                        
                        <div className="formAgreement">
                            <input className="customCheckbox" type="checkbox" id="agreementCheck" defaultChecked />
                            <label className="agreementLabel" htmlFor="agreementCheck">
                                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="#">политикой конфиденциальности</a>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}