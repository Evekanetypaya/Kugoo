import "./Sect1.scss"
import {Photo} from "../../../Photo.js"
export default function Sect1() {
    const left = [
        {title: "РЕМОНТ ОТ 1 ДНЯ", text: "Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее."},
        {title: "РЕМОНТИРУЕМ ТОЛЬКО ТО, ЧТО СЛОМАЛОСЬ", text: "Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта."},
        {title: "ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ", text: "Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта."},
    ]
    const right = [
        {title: "ГАРАНТИЯ", text: "14 дней на ремонт"},
        {title: "БЕСПЛАТНЫЙ РЕМОНТ", text: "в течение 1 года после покупки"},
        {title: "РАСШИРЕННАЯ ГАРАНТИЯ", text: "до 36 месяцев"},
    ]
    return(
        <>
        <section className="service">
            <div className="service_banner">
                <img className="banner_bg" src={Photo.service_bg} alt="" />
                <img className="banner_woman" src={Photo.service_woman} alt="" />
                <div className="banner_content">
                    <h1 className="text_title">РЕМОНТ И ОБСЛУЖИВАНИЕ<br />ТОВАРОВ KUGOO KIRIN</h1>
                    <p className="text_sub">в фирменных сервисых центрах</p>
                    <div className="banner_feats">
                        <div className="feat">
                            <div className="feat_icon"><img src={Photo.icon_pin} alt="" /></div>
                            <p className="feat_text">Сервисные центры в Москве,<br />Санкт-Петербурге и Краснодаре</p>
                        </div>
                        <div className="feat">
                            <div className="feat_icon"><img src={Photo.icon_shield} alt="" /></div>
                            <p className="feat_text">Гарантия 14 дней<br />на ремонт</p>
                        </div>
                        <div className="feat">
                            <div className="feat_icon"><img src={Photo.icon_gear} alt="" /></div>
                            <p className="feat_text">Всегда в наличии оригинальные<br />запчасти от производителя</p>
                        </div>
                    </div>
                    <button className="btn_white">Записаться</button>
                </div>
            </div>

            <h2 className="text_diag">ПРОВЕДЕМ ДИАГНОСТИКУ<br />И ОТРЕМОНТИРУЕМ ЛЮБУЮ НЕИСПРАВНОСТЬ</h2>

            <div className="diag">
                <div className="diag_col diag_left">
                    {left.map((item, index) => (
                        <div className="diag_item" key={index}>
                            <p className="diag_title">{item.title}</p>
                            <p className="diag_text">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="diag_circle">
                    <div className="circle_ring">
                        <div className="circle_in">
                            <img className="circle_img" src={Photo.service_repair} alt="" />
                            <div className="play_btn"><span>&#9654;</span></div>
                        </div>
                    </div>
                </div>
                <div className="diag_col diag_right">
                    {right.map((item, index) => (
                        <div className="diag_item" key={index}>
                            <p className="diag_title">{item.title}</p>
                            <p className="diag_text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}