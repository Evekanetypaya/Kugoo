import "./Sect1.scss"
import { useState } from 'react'
import { Link } from "react-router-dom"
import {Photo} from "../../../Photo.js"
export default function Sect1() {
    const [page, setPage] = useState(1)
    const pages = [1, 2, 3, 4]
    const cards = ["gift", "bag", "bag", "gift"]
    return(
        <>
        <section className="az">
            <div className="az_crumbs">
                <img className="az_crumbs_icon" src={Photo.icon_home} alt="" />
                <Link to="/"><p className="az_crumbs_text">Главная</p></Link>
                <p className="az_crumbs_text">/</p>
                <p className="az_crumbs_text az_crumbs_now">Акции</p>
            </div>

            <div className="az_banner">
                <img className="az_banner_img" src={Photo.catalog_banner} alt="" />
                <div className="az_tags">
                    <p className="az_tag az_red">До 01.09</p>
                    <p className="az_tag az_green">+ 2 подарка</p>
                </div>
                <h1 className="az_banner_title">ВЫГОДА 2880 RUB ПРИ ПОКУПКЕ<br />KUGOO KIRIN M4 PRO 13 AH</h1>
            </div>

            <div className="az_grid">
                {cards.map((type, index) => (
                    <div className="az_card" key={index}>
                        {type === "gift" ? (
                            <div className="az_media">
                                <img className="az_girl" src={Photo.promo_girl} alt="" />
                                <img className="az_badge" src={Photo.promo_badge} alt="" />
                                <div className="az_badge_text">
                                    <p className="az_badge_num">4</p>
                                    <p className="az_badge_word">подарка</p>
                                </div>
                            </div>
                        ) : (
                            <div className="az_media az_media_white">
                                <img className="az_bag" src={Photo.promo_bag} alt="" />
                            </div>
                        )}
                        <div className="az_info">
                            <p className="az_date">Срок проведения: 15.08 - 01.09</p>
                            {type === "gift" ? (
                                <>
                                <h3 className="az_title">До 01.09 выгода<br />2880 RUB при покупке<br />Kugoo Kirin M4 Pro 13</h3>
                                <p className="az_text">+ 4 подарка к покупке</p>
                                </>
                            ) : (
                                <>
                                <h3 className="az_title">05.09 розыгрыш<br />набора аксессуаров</h3>
                                <p className="az_text">Купите любой электросамокат с гидроизоляцией или комплексом с 15.07 по 15.08 и становитесь участником розыгрыша!</p>
                                </>
                            )}
                            <button className="az_btn">Принять участие в акции</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="az_pages">
                <div className="az_page az_page_arrow">&#8249;</div>
                {pages.map((item) => (
                    <div key={item} className={page === item ? "az_page az_page_on" : "az_page"} onClick={() => setPage(item)}>{item}</div>
                ))}
                <div className="az_page">&#8250;</div>
            </div>
        </section>
        </>
    )
}