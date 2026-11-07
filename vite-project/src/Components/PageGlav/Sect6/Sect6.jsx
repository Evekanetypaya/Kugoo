import "./Sect6.scss"
import { useState } from 'react'
import { Link } from "react-router-dom"
import {Photo} from "../../../Photo.js"
export default function Sect6() {
    const [tab, setTab] = useState(0)
    const tabs = ["Интернет-магазин", "Сервисный центр"]
    const cards = [
        {icon: "\u25A3", title: "Х товаров в каталоге", text: "Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении."},
        {icon: "\u25A4", title: "5 способов оплаты", text: "Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка»."},
        {icon: "\u2714", title: "Полная документация и гарантия 1 год", text: "При покупке вам выдается кассовый чек, товарный чек и гарантийный талон — эти документы дают право на гарантийное обслуживание."},
        {icon: "\u27A4", title: "Отправка заказа день в день", text: "Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре"},
        {icon: "%", title: "Рассрочка без переплат", text: "В нашем магазине можно приобрести любой товар в рассрочку.", link: "Подробнее про условия рассрочки"},
    ]
    return(
        <>
        <section className="adv">
            <h2 className="text_title">ПРЕДЛАГАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ<br />НА ПРОДУКТЫ KUGOO ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК</h2>
            <p className="text_sub">и заботимся об удобстве покупателей</p>

            <div className="adv_tabs">
                {tabs.map((item, index) => (
                    <button key={index} className={tab === index ? "tab tab_active" : "tab"} onClick={() => setTab(index)}>{item}</button>
                ))}
            </div>

            <div className="adv_grid">
                {cards.map((item, index) => (
                    <div className="adv_card" key={index}>
                        <p className="adv_icon">{item.icon}</p>
                        <p className="adv_title">{item.title}</p>
                        <p className="adv_text">{item.text}</p>
                        {item.link && <p className="adv_link">{item.link}</p>}
                    </div>
                ))}
                <div className="adv_card adv_catalog">
                    <div className="catalog_info">
                        <p className="adv_title">Больше в каталоге</p>
                        <Link to="/Catalog">
                            <p className="catalog_link">Перейти <span>&#8594;</span></p>
                        </Link>
                    </div>
                    <img className="catalog_img" src={Photo.scooter} alt="" />
                </div>
            </div>

            <div className="video_box">
                <img className="video_img" src={Photo.video} alt="" />
                <div className="video_play"><span>&#9654;</span></div>
            </div>
        </section>
        </>
    )
}