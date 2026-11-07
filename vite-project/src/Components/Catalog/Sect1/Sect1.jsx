import "./Sect1.scss"
import {Photo} from "../../../Photo.js"
import { Link } from "react-router-dom"
export default function Sect1() {
    const cats = [
        {name: "Робот-пылесосы", img: Photo.robot},
        {name: "Электровелосипеды", img: Photo.velo},
        {name: "Весы", img: Photo.vesy},
        {name: "Робот-пылесосы", img: Photo.robot},
        {name: "Весы", img: Photo.vesy},
        {name: "Робот-пылесосы", img: Photo.robot},
        {name: "Электровелосипеды", img: Photo.velo},
        {name: "Весы", img: Photo.vesy},
    ]
    return(
        <>
        <section className="tv_top">
            <div className="tv_crumbs">
                <img className="tv_crumbs_icon" src={Photo.icon_home} alt="" />
                <Link to="/Catalog"><p className="tv_crumbs_text">Главная / Каталог</p></Link>
            </div>
            <div className="tv_banner">
                <img className="tv_banner_img" src={Photo.catalog_banner} alt="" />
                
                <Link to="/Catalog"><h1 className="tv_banner_title">КАТАЛОГ ТОВАРОВ</h1></Link>
                
            </div>
        </section>

        <section className="tv_cats">
            <div className="tv_grid">
                {cats.map((item, index) => (
                    <div className="tv_card" key={index}>
                        <img className="tv_card_img" src={item.img} alt="" />
                        <div className="tv_card_label">
                            <p className="tv_card_name">{item.name}</p>
                            <p className="tv_card_price">от 29 900 ₽</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="tv_dealer">
            <div className="tv_dealer_box">
                <div className="tv_dealer_photo">
                    <img className="tv_dealer_img" src={Photo.dealer} alt="" />
                    <div className="tv_drive">
                        <p className="tv_drive_title">Тест-драйв в Москве</p>
                        <p className="tv_drive_text">Оцените все преимущества самокатов лично</p>
                    </div>
                    <Link to="/PageTest">
                        <button className="tv_drive_btn">Подробнее <span>&#8594;</span></button>
                    </Link>
                </div>
                <div className="tv_dealer_info">
                    <h2 className="tv_dealer_title">KUGOOKIRIN.RU — ПЕРВЫЙ ОФИЦИАЛЬНЫЙ ДИЛЕР KUGOO KIRIN В РОССИИ</h2>
                    <p className="tv_dealer_desc">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                    <div className="tv_dealer_list">
                        <p className="tv_list_title">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                        <ul>
                            <li>цены от завода-изготовителя Jilong ;</li>
                            <li>бесплатный тест-драйв самокатов;</li>
                            <li>фирменную гарантию 1 год;</li>
                            <li>ремонт и обслуживание от 1 дня в собственном сервисном центре;</li>
                            <li>более 1 000 запчастей и аксессуаров в наличии</li>
                        </ul>
                        <Link to="/PageAbout">
                            <p className="tv_list_link">Смотреть сертификат</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}