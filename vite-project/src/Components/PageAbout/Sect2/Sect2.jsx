import "./Sect2.scss"
import { useState } from 'react'
import {Photo} from "../../../Photo.js"
export default function Sect2() {
    const [tab, setTab] = useState(0)
    const tabs = ["Интернет-магазин", "Сервисный центр"]
    const cards = [
        {icon: Photo.adv1, title: "Х товаров в каталоге", text: "Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении."},
        {icon: Photo.adv2, title: "5 способов оплаты", text: "Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка»."},
        {icon: Photo.adv3, title: "Полная документация и гарантия 1 год", text: "При покупке вам выдается кассовый чек, товарный чек и гарантийный талон — эти документы дают право на гарантийное обслуживание."},
        {icon: Photo.adv4, title: "Отправка заказа день в день", text: "Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре"},
        {icon: Photo.adv5, title: "Рассрочка без переплат", text: "В нашем магазине можно приобрести любой товар в рассрочку.", link: "Подробнее про условия рассрочки"},
    ]
    return(
        <>
        <section className="abp">
            <h2 className="abp_title">ПРЕДЛАГАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ<br />НА ПРОДУКТЫ KUGOO ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК</h2>
            <p className="abp_sub">и заботимся об удобстве покупателей</p>

            <div className="abp_tabs">
                {tabs.map((item, index) => (
                    <button key={index} className={tab === index ? "abp_tab abp_tab_on" : "abp_tab"} onClick={() => setTab(index)}>{item}</button>
                ))}
            </div>

            <div className="abp_grid">
                {cards.map((item, index) => (
                    <div className="abp_card" key={index}>
                        <img className="abp_icon" src={item.icon} alt="" />
                        <p className="abp_card_title">{item.title}</p>
                        <p className="abp_card_text">{item.text}</p>
                        {item.link && <p className="abp_card_link">{item.link}</p>}
                    </div>
                ))}
                <div className="abp_card abp_more">
                    <div className="abp_more_info">
                        <p className="abp_card_title">Больше в каталоге</p>
                        <p className="abp_more_link">Перейти <span>&#8594;</span></p>
                    </div>
                    <img className="abp_more_img" src={Photo.scooter} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}