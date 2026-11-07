import "./Footer.scss"
import { Link } from "react-router-dom"
import {Photo} from "../../Photo.js"
export default function Footer() {
    const catalog = ["Электросамокаты", "Электроскутеры", "Электровелосипеды", "Электровелосипеды"]
    const buyers1 = ["Сервисный центр", "Доставка и оплата", "Рассрочка", "Тест-драйв"]
    const buyers2 = ["Блог", "Сотрудничество", "Контакты", "Акции"]
    const socials = [
        {name: "Вконтакте", count: "3 300", icon: Photo.soc_vk},
        {name: "Instagram", count: "10 602", icon: Photo.soc_instagram},
        {name: "YouTube", count: "3 603", icon: Photo.soc_youtube},
        {name: "Telegram", count: "432", icon: Photo.soc_telegram},
    ]
    const pays = [Photo.pay_gpay, Photo.pay_applepay, Photo.pay_visa, Photo.pay_mastercard, Photo.pay_maestro, Photo.pay_webmoney, Photo.pay_qiwi]
    return(
        <>
        <footer>
            <div className="footer_sub">
                <div className="footer_sub_container">
                    <p className="sub_title">ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ,<br />КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ САМОКАТЫ</p>
                    <input className="sub_input" type="email" placeholder="Введите Ваш email" />
                    <button className="sub_btn">Подписаться</button>
                </div>
            </div>

            <div className="footer_main">
                <div className="footer_container">
                    <div className="footer_cols">
                        <div className="col_catalog">
                                <Link to="/Tovars2"><p className="col_title">Каталог товаров</p></Link>
                            {catalog.map((item, index) => (
                                <p className="col_link" key={index}>{item}</p>
                            ))}
                        </div>
                        <div className="col_buyers">
                            <p className="col_title">Покупателям</p>
                            <div className="buyers_lists">
                                <div>
                                    {buyers1.map((item, index) => (
                                        <p className="col_link" key={index}>{item}</p>
                                    ))}
                                </div>
                                <div>
                                    {buyers2.map((item, index) => (
                                        <p className="col_link" key={index}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col_contacts">
                            <div className="contacts_top">
                                <p className="col_title">Контакты</p>
                                <p className="call_link">Заказать звонок</p>
                            </div>
                            <div className="contacts_grid">
                                <div className="contact_block">
                                    <p className="contact_label">Call-центр</p>
                                    <p className="contact_phone">+7 (800) 505-54-61</p>
                                    <p className="contact_time">Пн-Вс 10:00 - 20:00</p>
                                </div>
                                <div className="contact_block">
                                    <p className="contact_label">Сервисный центр</p>
                                    <p className="contact_phone">+7 (499) 350-76-92</p>
                                    <p className="contact_time">Пн-Вс 10:00 - 20:00</p>
                                </div>
                                <div className="contact_block"></div>
                                <div className="contact_block">
                                    <p className="shop_name">Магазин в Москве</p>
                                    <p className="shop_addr">ул. Ткацкая, 5 стр. 16</p>
                                    <p className="contact_time">+7 (499) 406 15 87</p>
                                </div>
                                <div className="contact_block">
                                    <p className="shop_name">Магазин в Санкт-Петербурге</p>
                                    <p className="shop_addr">ул. Фрунзе, 2</p>
                                    <p className="contact_time">+7 (499) 406 15 87</p>
                                </div>
                                <div className="contact_block">
                                    <p className="shop_name">Магазин в Краснодаре</p>
                                    <p className="shop_addr">ул. Восточно-Круглиководская, 86</p>
                                    <p className="contact_time">+ 7 (800) 505 54 61</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_line"></div>

                    <div className="footer_mid">
                        <div className="mid_left">
                            <Link to="/"><img className="footer_logo" src={Photo.logo} alt="" /></Link>
                            <img className="store_img" src={Photo.store_googleplay} alt="" />
                            <img className="store_img" src={Photo.store_appstore} alt="" />
                        </div>
                        <div className="mid_right">
                            {socials.map((item, index) => (
                                <div className="social_card" key={index}>
                                    <img className="social_icon" src={item.icon} alt="" />
                                    <div>
                                        <p className="social_name">{item.name}</p>
                                        <p className="social_count">{item.count}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="footer_line"></div>

                    <div className="footer_bottom">
                        <div className="bottom_left">
                            <p className="bottom_link">Реквизиты</p>
                            <p className="bottom_link">Политика конфиденциальности</p>
                        </div>
                        <div className="bottom_right">
                            <div className="pay_list">
                                {pays.map((item, index) => (
                                    <img className="pay_img" src={item} key={index} alt="" />
                                ))}
                            </div>
                            <div className="chat_box">
                                <p className="chat_text">Online чат:</p>
                                <img className="chat_icon" src={Photo.viber} alt="" />
                                <img className="chat_icon" src={Photo.whatsapp} alt="" />
                                <img className="chat_icon" src={Photo.telegram} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}