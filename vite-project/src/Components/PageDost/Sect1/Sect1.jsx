import "./Sect1.scss"
import { useState } from 'react'
import { Link } from "react-router-dom"
import {Photo} from "../../../Photo.js"
export default function Sect1() {
    const [region, setRegion] = useState(0)
    const regions = ["Москва и МО", "Санкт-Петербург и Ленобласть", "Краснодар", "Регионы России", "Казахстан, РБ, Армения, Киргизия"]
    const pays = [Photo.pay_gpay, Photo.pay_applepay, Photo.pay_visa, Photo.pay_mastercard, Photo.pay_maestro, Photo.pay_webmoney, Photo.pay_qiwi]
    return(
        <>
        <section className="ds">
            <div className="ds_crumbs">
                <img className="ds_crumbs_icon" src={Photo.icon_home} alt="" />
                <Link to="/"><p className="ds_crumbs_text">Главная</p></Link>
                <p className="ds_crumbs_text">/</p>
                <p className="ds_crumbs_text ds_crumbs_now">Доставка и оплата</p>
            </div>

            <div className="ds_banner">
                <img className="ds_banner_img" src={Photo.dost_banner} alt="" />
                <h1 className="ds_banner_title">ОПЛАТА И ДОСТАВКА ЛЮБЫМИ<br />УДОБНЫМИ СПОСОБАМИ</h1>
            </div>

            <div className="ds_content">
                <h2 className="ds_title">ОТПРАВЛЯЕМ ПО РОССИИ В ДЕНЬ ЗАКАЗА</h2>

                <p className="ds_label">Выберите свой регион</p>
                <div className="ds_tabs">
                    {regions.map((item, index) => (
                        <button key={index} className={region === index ? "ds_tab ds_tab_on" : "ds_tab"} onClick={() => setRegion(index)}>{item}</button>
                    ))}
                </div>

                <div className="ds_cols ds_head">
                    <p className="ds_h">Способ доставки</p>
                    <p className="ds_h">Время доставки</p>
                    <p className="ds_h">Стоимость</p>
                </div>

                <div className="ds_cols ds_row1">
                    <p className="ds_t">Курьером</p>
                    <p className="ds_t">В течение дня при заказе до 11:00</p>
                    <div className="ds_free">
                        <p className="ds_free_text">Бесплатная доставка</p>
                        <div className="ds_badge">
                            <img className="ds_badge_icon" src={Photo.icon_fire} alt="" />
                            <p className="ds_badge_text">Акция до 15.09</p>
                        </div>
                    </div>
                </div>

                <div className="ds_line ds_line_1"></div>

                <div className="ds_cols ds_row2">
                    <p className="ds_t">Срочная доставка</p>
                    <div>
                        <p className="ds_t ds_w">За 2-4 часа в день заказа. Заказы на срочную доставку принимаются до 17:00, в пятницу — до 13:00.</p>
                        <p className="ds_t ds_w ds_gap">При заказе дополнительных услуг (гидроизоляция, настройка) время может быть увеличено.</p>
                    </div>
                    <div className="ds_urgent">
                        <p className="ds_t">Стоимость срочной доставки</p>
                        <p className="ds_t ds_link">уточняйте у менеджера</p>
                    </div>
                </div>

                <div className="ds_line ds_line_2"></div>

                <p className="ds_t ds_pick">Самовывоз из магазина <b>ул. Ткацкая, 5 стр. 16.  (Пн - Вс 10:00 - 20:00)</b></p>
                <p className="ds_t ds_pick2">Перед посещением магазина уточняйте  наличие рассматриваемой вами модели по телефону <span className="ds_link">+7 (499) 406-15-79</span></p>

                <div className="ds_line ds_line_3"></div>

                <h3 className="ds_h ds_pay_title">Выбирайте подходящий способ оплаты</h3>

                <div className="ds_cols ds_pay1">
                    <p className="ds_t">Наличными в магазине или курьеру</p>
                    <div>
                        <p className="ds_t">Картой в магазине</p>
                        <div className="ds_pays">
                            {pays.map((item, index) => (
                                <img className="ds_pay_img" src={item} key={index} alt="" />
                            ))}
                        </div>
                    </div>
                    <p className="ds_t">Онлайн на сайте через корзину</p>
                </div>

                <div className="ds_cols ds_pay2">
                    <p className="ds_t ds_w2">Через интернет-банкинг по счету, который вам выставит менеджер</p>
                    <p className="ds_t ds_w3">В рассрочку от Сбербанка, Тинькофф банка  или по карте "Халва" от Совкомбанка</p>
                    <div>
                        <p className="ds_t ds_w4">В рассрочку — только<br />для электросамокатов версии MAX</p>
                        <p className="ds_t ds_link">Узнать подробнее</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}