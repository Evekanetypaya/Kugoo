import "./Sect2.scss"
import { useState } from 'react'
import {Photo} from "../../../Photo.js"
import { Link } from "react-router-dom";
export default function Sect2() {
    const [tab, setTab] = useState(0)
    const tabs = ["Хиты продаж", "Для города", "Для взрослых", "Для детей"]
    const cards = ["ХИТ", "Новинка", "ХИТ", "Новинка", "ХИТ", "Новинка", "ХИТ", "Новинка"]
    return(
        <>
        <section className="products">
            <div className="products_top">
                <h2 className="text_title">ЭЛЕКТРОСАМОКАТЫ</h2>
                <div className="products_tabs">
                    {tabs.map((item, index) => (
                        <button key={index} className={tab === index ? "tab tab_active" : "tab"} onClick={() => setTab(index)}>{item}</button>
                    ))}
                </div>
            </div>

            <div className="products_grid">
                {cards.map((badge, index) => (
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

            <div className="products_more">
                <Link to="/Tovars2"><button className="btn_all">Смотреть все</button></Link>
            </div>
        </section>
        </>
    )
}