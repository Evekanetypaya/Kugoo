import "./Sect3.scss"
import { useState } from 'react'
import { Link } from "react-router-dom"
import {Photo} from "../../../Photo.js"
export default function Sect3() {
    const [fav, setFav] = useState([])
    const cards = ["ХИТ", "Новинка", "ХИТ", "Новинка"]
    const toggle = (index) => {
        if (fav.includes(index)) {
            setFav(fav.filter((item) => item !== index))
        } else {
            setFav([...fav, index])
        }
    }
    return(
        <>
        <section className="tv_pop">
            <h2 className="tv_pop_title">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
            <div className="tv_pop_grid">
                {cards.map((badge, index) => (
                    <div className="tv_pop_card" key={index}>
                        <div className="tv_pop_photo">
                            <p className={badge === "ХИТ" ? "tv_pop_badge tv_red" : "tv_pop_badge tv_green"}>{badge}</p>
                            <img className="tv_pop_compare" src={Photo.compare} alt="" />
                            {index === 0 && <div className="tv_pop_arrow tv_left">&#8249;</div>}
                            {index === 0 && <div className="tv_pop_arrow tv_right">&#8250;</div>}
                            <img className="tv_pop_img" src={Photo.kirinm4} alt="" />
                        </div>
                        <div className="tv_pop_body">
                            <p className="tv_pop_name">Kugoo Kirin M4</p>
                            <div className="tv_pop_specs">
                                <div className="tv_spec"><img className="tv_spec_icon" src={Photo.spec_battery} alt="" /><p className="tv_spec_text">2000 mAh</p></div>
                                <div className="tv_spec"><img className="tv_spec_icon" src={Photo.spec_power} alt="" /><p className="tv_spec_text">1,2 л.с.</p></div>
                                <div className="tv_spec"><img className="tv_spec_icon" src={Photo.spec_speed} alt="" /><p className="tv_spec_text">60 км/ч</p></div>
                                <div className="tv_spec"><img className="tv_spec_icon" src={Photo.spec_timer} alt="" /><p className="tv_spec_text">5 часов</p></div>
                            </div>
                            <div className="tv_pop_row">
                                <div className="tv_pop_prices">
                                    <p className="tv_price_old">39 900 ₽</p>
                                    <p className="tv_price_new">29 900 ₽</p>
                                </div>
                                <div className="tv_pop_icons">
                                    <div className="tv_icon_circle"><img src={Photo.cart} alt="" /></div>
                                    <div className={fav.includes(index) ? "tv_icon_circle tv_icon_on" : "tv_icon_circle"} onClick={() => toggle(index)}><img src={Photo.heart} alt="" /></div>
                                </div>
                            </div>
                            <Link to="/PageStr"><button className="tv_pop_btn">Купить в 1 клик</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}