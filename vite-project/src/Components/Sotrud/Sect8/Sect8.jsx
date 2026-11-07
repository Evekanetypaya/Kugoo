import "./Sect8.scss"
import {Photo} from "../../../Photo.js"

export default function Sect8() {
    const questions = [
        "Когда происходит отправка заказа?",
        "Есть ли гарантия на товары?",
        "Сколько стоит доставка товара до клиента?",
        "Проверяется ли товар перед отправкой?",
        "Какими ТК вы отправляете заказы?"
    ]

    const offerBenefits = [
        "Ознакомитесь с актуальным каталогом;",
        "Узнаете, какие категории товаров пользуются наибольшим спросом;",
        "Получите доступ к выгодным ценам на закупку оптом."
    ]

    return (
        <section className="sect14">
            <div className="faqContainer">
                <h2 className="faqTitle">ОТВЕЧАЕМ НА ЧАСТЫЕ ВОПРОСЫ</h2>
                
                <div className="faqList">
                    {questions.map((item, index) => (
                        <div className="faqItem" key={index}>
                            <p className="faqQuestion">{item}</p>
                            <img className="faqIcon" src={Photo.iconPlus} alt="Раскрыть" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="offerBanner">
                <div className="offerContent">
                    <h2 className="offerTitle">
                        ОБСУДИТЕ ИНДИВИДУАЛЬНОЕ<br />
                        КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ<br />
                        С ЛИЧНЫМ МЕНЕДЖЕРОМ
                    </h2>
                    
                    <div className="offerList">
                        {offerBenefits.map((text, index) => (
                            <div className="offerListItem" key={index}>
                                <img className="checkIcon" src={Photo.iconCheckCircle} alt="" />
                                <p className="offerListText">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="offerFormBox">
                    <h3 className="formTitle">ПОЛУЧИТЕ ПЕРСОНАЛЬНОЕ<br />КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h3>
                    <p className="formSubtitle">с учетом ваших условий работы</p>
                    
                    <form className="priceForm">
                        <input className="formInput" type="tel" placeholder="+7 (___) __ - __ - __" />
                        <button className="formBtn" type="button">Скачать прайс-лист</button>
                        
                        <div className="formAgreement">
                            <input className="customCheckbox" type="checkbox" id="offerAgreement" defaultChecked />
                            <label className="agreementLabel" htmlFor="offerAgreement">
                                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="#">политикой конфиденциальности</a>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}