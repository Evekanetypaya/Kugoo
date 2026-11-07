import "./Sect8.scss"
import { useState } from 'react'
import {Photo} from "../../../Photo.js"
import { Link } from "react-router-dom";
export default function Sect8() {
    const [open, setOpen] = useState(2)
    const faq = [
        {
            q: "Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?",
            a: []
        },
        {
            q: "У меня в городе самокаты Kugoo дешевле. Почему?",
            a: []
        },
        {
            q: "Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?",
            a: [
                "При покупке электросамоката у нас, вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание на законодательном уровне.",
                "Наши сервисные центры находятся в Москве, Санкт-Петербурге и Краснодаре. В случае поломки вы можете обратиться туда.",
                "Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.",
                "В соответствии со ст. 20 ФЗ «О защите прав потребителей» на ремонт по гарантии дается не более 45 дней. В городах, где есть наш сервисный центр ремонт проводится за 3-7 дней."
            ]
        },
        {
            q: "Где находятся пункты самовывоза в моем городе?",
            a: []
        },
    ]
    const badges = ["ХИТ", "Новинка", "ХИТ", "Новинка"]
    return(
        <>
        <section className="faq">
            <h2 className="text_title">ОТВЕЧАЕМ НА ВОПРОСЫ<br />ПОКУПАТЕЛЕЙ</h2>
            <div className="faq_list">
                {faq.map((item, index) => (
                    <div className="faq_item" key={index}>
                        <div className="faq_question" onClick={() => setOpen(open === index ? -1 : index)}>
                            <p className="faq_q_text">{item.q}</p>
                            <p className="faq_icon">{open === index ? "\u00D7" : "+"}</p>
                        </div>
                        {open === index && item.a.length > 0 && (
                            <div className="faq_answer">
                                {item.a.map((text, i) => (
                                    <p className="faq_a_text" key={i}>{text}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>

        <section className="popular">
            <h2 className="text_title">ЧАСТО ПОКУПАЮТ</h2>
            <div className="popular_grid">
                {badges.map((badge, index) => (
                    <div className="card" key={index}>
                        <div className="card_img_wrap">
                            <p className={badge === "ХИТ" ? "card_badge badge_red" : "card_badge badge_green"}>{badge}</p>
                            <img className="card_compare" src={Photo.compare} alt="" />
                            {index === 0 && <div className="card_arrow arrow_left">&#8249;</div>}
                            {index === 0 && <div className="card_arrow arrow_right">&#8250;</div>}
                            <img className="card_img" src={Photo.kirinm4} alt="" />
                        </div>
                        <div className="card_body">
                            <p className="card_name">Kugoo Kirin M4</p>
                            <div className="card_specs">
                                <p className="spec"><span className="spec_icon">&#9646;</span>2000 mAh</p>
                                <p className="spec"><span className="spec_icon">&#9889;</span>1,2 л.с.</p>
                                <p className="spec"><span className="spec_icon">&#9684;</span>60 км/ч</p>
                                <p className="spec"><span className="spec_icon">&#9719;</span>5 часов</p>
                            </div>
                            <div className="card_price_row">
                                <div className="card_prices">
                                    <p className="price_old">39 900 ₽</p>
                                    <p className="price_new">29 900 ₽</p>
                                </div>
                                <div className="card_icons">
                                    <div className="icon_circle"><img src={Photo.cart} alt="" /></div>
                                    <div className="icon_circle"><img src={Photo.heart} alt="" /></div>
                                </div>
                            </div>
                            <Link to="/PageStr"><button className="btn_buy">Купить в 1 клик</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}