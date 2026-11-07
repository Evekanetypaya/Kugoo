import "./Sect4.scss"
import {Photo} from "../../../Photo.js"

export default function Sect4() {
    const team = [
        { img: Photo.team_1, name: "Дмитрий Никитенко", role: "Руководитель сервисного центра" },
        { img: Photo.team_2, name: "Анастасия Горина", role: "Заместитель директора" },
        { img: Photo.team_3, name: "Юлия Кортич", role: "Менеджер по продажам" },
        { img: Photo.team_4, name: "Сергей Бойко", role: "Мастер по ремонту самокатов" },
    ]

    return (
        <section className="sect4">
            <div className="delivery_wrapper">
                <div className="delivery_content">
                    <div className="delivery_text">
                        <h2 className="text_title">ЗАБЕРЕМ ВАШ САМОКАТ ДЛЯ<br />РЕМОНТА И ВЕРНЕМ ОБРАТНО</h2>
                        <p className="text_sub">Доставка электросамокатов в/из сервисного центра курьером в Москве.</p>
                        
                        <p className="text_list_title">Стоимость доставки:</p>
                        <div className="price_list">
                            <div className="price_item">
                                <img className="price_icon" src={Photo.icon_check} alt="" />
                                <p className="price_text">600 руб. в одну сторону</p>
                            </div>
                            <div className="price_item">
                                <img className="price_icon" src={Photo.icon_check} alt="" />
                                <p className="price_text">1000 руб. туда-обратно</p>
                            </div>
                        </div>
                        <button className="btn_order">Заказать доставку</button>
                    </div>
                    <div className="delivery_img_box">
                        <img className="drone_img" src={Photo.drone_box} alt="Доставка дроном" />
                    </div>
                </div>
            </div>

            <div className="team_wrapper">
                <h2 className="team_title">КОМАНДА СЕРВИСНОГО ЦЕНТРА</h2>
                
                <div className="info_cards">
                    <div className="card">
                        <img className="card_icon" src={Photo.icon_scooter} alt="" />
                        <p className="card_text">Специалисты сервисного центра подготавливают самокаты к отправке вам, проводят техническое обслуживание, тюнингуют и при необходимости ремонтируют их</p>
                    </div>
                    <div className="card">
                        <img className="card_icon" src={Photo.icon_manager} alt="" />
                        <p className="card_text">Консультант сервисного центра сопровождает вас на протяжении всего времени эксплуатации и помогает решить возникающие вопросы.</p>
                    </div>
                </div>

                <div className="team_slider">
                    <div className="team_grid">
                        {team.map((member, index) => (
                            <div className="member_card" key={index}>
                                <div className="member_img_box">
                                    <img src={member.img} alt={member.name} />
                                </div>
                                <p className="member_name">{member.name}</p>
                                <p className="member_role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                    <button className="slider_next_btn">
                        <span>&#10095;</span>
                    </button>
                </div>
            </div>
        </section>
    )
}