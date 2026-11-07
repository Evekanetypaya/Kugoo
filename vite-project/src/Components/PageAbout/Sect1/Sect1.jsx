import "./Sect1.scss"
import { Link } from "react-router-dom"
import {Photo} from "../../../Photo.js"
export default function Sect1() {
    const list = [
        {bold: "Цены", text: " от завода-изготовителя Jilong ;"},
        {bold: "Бесплатный тест-драйв", text: " самокатов;"},
        {bold: "Фирменную гарантию 1 год", text: ";"},
        {bold: "Ремонт и обслуживание", text: " от 1 дня в собственном сервисном центре;"},
        {bold: "Более 1 000 запчастей", text: " и аксессуаров в наличии."},
    ]
    return(
        <>
        <section className="ab_top">
            <div className="ab_crumbs">
                <img className="ab_crumbs_icon" src={Photo.icon_home} alt="" />
                <Link to="/"><p className="ab_crumbs_text">Главная</p></Link>
                <p className="ab_crumbs_text">/</p>
                <p className="ab_crumbs_text ab_crumbs_now">О магазине</p>
            </div>

            <div className="ab_banner">
                <img className="ab_banner_img" src={Photo.about_banner} alt="" />
                <h1 className="ab_banner_title">KUGOO-RUSSIA — ПЕРВЫЙ<br />ОФИЦИАЛЬНЫЙ ДИЛЕР<br />KUGOO KIRIN В РОССИИ</h1>
                <div className="ab_stats">
                    <div className="ab_stat">
                        <p className="ab_stat_label">Работаем с</p>
                        <p className="ab_stat_value">2017 г</p>
                    </div>
                    <div className="ab_stat">
                        <p className="ab_stat_label">Специалистов<br />в штате</p>
                        <p className="ab_stat_value">35</p>
                    </div>
                    <div className="ab_stat">
                        <p className="ab_stat_label">Клиентов по России<br />и странам СНГ</p>
                        <p className="ab_stat_value">2 000</p>
                    </div>
                </div>
                <div className="ab_play">
                    <div className="ab_play_btn"><span>&#9654;</span></div>
                    <p className="ab_play_text">Посмотрите<br />видео-знакомство 2 мин</p>
                </div>
            </div>
        </section>

        <section className="ab_about">
            <div className="ab_about_left">
                <h2 className="ab_about_title">С 2017 Г. РАЗВИВАЕМ ТЕМУ ЭЛЕКТРОТРАНСПОРТА И ОСВЕЩАЕМ ЕГО ЦЕННОСТЬ В СОВРЕМЕННОМ МИРЕ</h2>
                <p className="ab_goal_title">Наша цель</p>
                <p className="ab_goal_text">Предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                <p className="ab_list_title">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                <div className="ab_list">
                    {list.map((item, index) => (
                        <div className="ab_list_item" key={index}>
                            <img className="ab_list_icon" src={Photo.icon_check} alt="" />
                            <p className="ab_list_text"><b>{item.bold}</b>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ab_cert">
                <img className="ab_cert_img" src={Photo.about_certificate} alt="" />
                <div className="ab_cert_arrow ab_cert_left">&#8249;</div>
                <div className="ab_cert_arrow ab_cert_right">&#8250;</div>
            </div>
        </section>
        </>
    )
}