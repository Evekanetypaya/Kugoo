import "./Sect5.scss"
import {Photo} from "../../../Photo.js"
import { Link } from "react-router-dom"
export default function Sect5() {
    return(
        <>
        <section className="dealer">
            <div className="dealer_box">
                <div className="dealer_photo">
                    <img className="dealer_img" src={Photo.dealer} alt="" />
                    <div className="drive_card">
                        <p className="drive_title">Тест-драйв в Москве</p>
                        <p className="drive_text">Оцените все преимущества самокатов лично</p>
                    </div>
                    <Link to="/PageTest">
                        <button className="btn_more">Подробнее <span>&#8594;</span></button>
                    </Link>
                </div>
                <div className="dealer_info">
                    <h2 className="text_title">KUGOO-RUSSIA — ПЕРВЫЙ ОФИЦИАЛЬНЫЙ ДИЛЕР KUGOO KIRIN В РОССИИ</h2>
                    <p className="text_desc">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                    <div className="dealer_list">
                        <p className="list_title">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                        <ul>
                            <li>цены от завода-изготовителя Jilong ;</li>
                            <li>бесплатный тест-драйв самокатов;</li>
                            <li>фирменную гарантию 1 год;</li>
                            <li>ремонт и обслуживание от 1 дня в собственном сервисном центре;</li>
                            <li>более 1 000 запчастей и аксессуаров в наличии</li>
                        </ul>
                        <Link to="/PageAbout">
                            <p className="list_link">Смотреть сертификат</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}