import "./Sect1.scss"
import {Photo} from "../../../Photo.js"
import { Link } from "react-router-dom"
export default function Sect1() {
    return(
        <>
        <section className="hero">
            <div className="hero_banner">
                <p className="text_kirin">KIRIN</p>
                <div className="hero_content">
                    <p className="hero_tag">Новинка</p>
                    <h1 className="text_title">ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN<br />ОТ ОФИЦИАЛЬНОГО ДИЛЕРА</h1>
                    <p className="text_desc">с бесплатной доставкой по РФ от 1 дня</p>
                    <Link to="/Tovars2"><button className="btn_white">Перейти в каталог</button></Link>
                    <div className="hero_arrows">
                        <div className="arrow_circle">&#8249;</div>
                        <p className="text_num">1</p>
                        <div className="line_num"></div>
                        <p className="text_num">5</p>
                        <div className="arrow_circle">&#8250;</div>
                    </div>
                </div>
                <div className="hero_drive">
                    <div className="drive_box">
                        <p className="drive_icon">&#9889;</p>
                        <p className="drive_text">Тест-драйв и обучение</p>
                    </div>
                    <p className="drive_free">БЕСПЛАТНО</p>
                    <div className="drive_line"></div>
                    <div className="drive_dot"></div>
                </div>
                <img className="hero_img" src={Photo.scooter} alt="" />
            </div>

            <div className="hero_facts">
                <div className="fact_block">
                    <p className="fact_title">ГАРАНТИЯ 1 ГОД</p>
                    <p className="fact_text">на весь ассортимент</p>
                </div>
                <div className="fact_block">
                    <p className="fact_title">РАССРОЧКА</p>
                    <p className="fact_text">от 6 месяцев</p>
                </div>
                <div className="fact_block">
                    <p className="fact_title">ПОДАРКИ</p>
                    <p className="fact_text">и бонусам к покупкам</p>
                </div>
                <div className="ya_card">
                    <div className="ya_logo">Я</div>
                    <div className="ya_info">
                        <p className="ya_text">Яндекс отзывы</p>
                        <p className="ya_rating"><span>&#9733;</span> 4,9</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}