import "./Sect1.scss"
import { Link } from "react-router-dom"
import {Photo} from "../../../Photo.js"
export default function Sect1() {
    return(
        <>
        <section className="sc_top">
            <div className="sc_crumbs">
                <img className="sc_crumbs_icon" src={Photo.icon_home} alt="" />
                <Link to="/"><p className="sc_crumbs_text">Главная</p></Link>
                <p className="sc_crumbs_text">/</p>
                <Link to="/Catalog"><p className="sc_crumbs_text">Каталог</p></Link>
                <p className="sc_crumbs_text">/</p>
                <p className="sc_crumbs_text sc_crumbs_now">Электросамокаты</p>
            </div>

            <div className="sc_banner">
                <img className="sc_banner_img" src={Photo.scooters_banner} alt="" />
                <h1 className="sc_banner_title">ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN</h1>
            </div>

            <div className="sc_promo">
                <img className="sc_promo_bg" src={Photo.promo_dark_bg} alt="" />
                <img className="sc_promo_drone" src={Photo.drone} alt="" />
                <div className="sc_promo_info">
                    <p className="sc_promo_tag">Акция</p>
                    <h2 className="sc_promo_title">ДО 01.09 БЕСПЛАТНАЯ<br />ДОСТАВКА САМОКАТОВ<br />ПО ВСЕЙ РОССИИ</h2>
                    <button className="sc_promo_btn">Подробнее</button>
                </div>
            </div>
        </section>
        </>
    )
}