import "./Sect2.scss"
import {Photo} from "../../../Photo.js"
export default function Sect2() {
    const list = [
        "Узнавайте первыми об акциях и спецпредложениях",
        "Получите доступ к секретным распродажам и полезной информации",
        "Держите наши контакты всегда под рукой",
    ]
    return(
        <>
        <section className="dsa">
            <div className="dsa_banner">
                <img className="dsa_bg" src={Photo.app_bg} alt="" />
                <img className="dsa_phone" src={Photo.app_phone} alt="" />
                <div className="dsa_info">
                    <h2 className="dsa_title">ОТСЛЕЖИВАЙТЕ СВОИ ЗАКАЗЫ<br />В ФИРМЕННОМ ПРИЛОЖЕНИИ<br />KUGOO-RUSSIA</h2>
                    <div className="dsa_list">
                        {list.map((item, index) => (
                            <div className="dsa_item" key={index}>
                                <img className="dsa_check" src={Photo.icon_check_white} alt="" />
                                <p className="dsa_text">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="dsa_stores">
                        <img className="dsa_store" src={Photo.store_googleplay} alt="" />
                        <img className="dsa_store" src={Photo.store_appstore} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="dsq">
            <div className="dsq_box">
                <div className="dsq_woman">
                    <img className="dsq_woman_img" src={Photo.woman_dost} alt="" />
                </div>
                <div className="dsq_info">
                    <h2 className="dsq_title">ОСТАЛИСЬ ВОПРОСЫ?</h2>
                    <p className="dsq_text">Наши консультанты рассчитают сроки и стоимость доставки, ответят на вопросы, касающиеся выбора и приобретения продуктов Kugoo.</p>
                    <div className="dsq_form">
                        <input className="dsq_input" type="tel" placeholder="+7 (___) __ - __ - __" />
                        <button className="dsq_btn">Проконсультироваться</button>
                    </div>
                    <div className="dsq_agree">
                        <img className="dsq_check" src={Photo.icon_check} alt="" />
                        <p className="dsq_agree_text">Нажимая на кнопку, вы соглашаетесь на обработку<br />персональных данных и <span>политикой конфиденциальности</span></p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}