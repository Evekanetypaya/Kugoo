import "./Sect3.scss"
import {Photo} from "../../../Photo.js"
export default function Sect3() {
    const team = [
        {img: Photo.team_1, name: "Дмитрий Никитенко", role: "Руководитель сервисного центра", h: 318},
        {img: Photo.team_2, name: "Анастасия Горина", role: "Заместитель директора", h: 340},
        {img: Photo.team_3, name: "Юлия Кортич", role: "Менеджер по продажам", h: 372},
        {img: Photo.team_4, name: "Сергей Бойко", role: "Мастер по ремонту самокатов", h: 307},
        {img: Photo.team_5, name: "Дмитрий Никитенко", role: "Руководитель сервисного центра", h: 351},
    ]
    return(
        <>
        <section className="abt">
            <h2 className="abt_title">В ШТАТЕ Х СПЕЦИАЛИСТОВ,<br />ГОТОВЫХ ПРИЙТИ НА ПОМОЩЬ</h2>
            <div className="abt_info">
                <div className="abt_info_card">
                    <img className="abt_info_icon" src={Photo.iconScooterDrop} alt="" />
                    <p className="abt_info_text">Специалисты сервисного центра <b>подготавливают самокаты</b> к отправке вам, <b>проводят техническое обслуживание,</b> <b>тюнингуют</b> и при необходимости <b>ремонтируют</b> их</p>
                </div>
                <div className="abt_info_card">
                    <img className="abt_info_icon" src={Photo.iconSeller} alt="" />
                    <p className="abt_info_text">Консультант сервисного центра <b>сопровождает вас</b> на протяжении всего времени эксплуатации и <b>помогает решить возникающие вопросы.</b></p>
                </div>
            </div>

            <div className="abt_slider">
                <div className="abt_track">
                    {team.map((item, index) => (
                        <div className="abt_card" key={index}>
                            <div className="abt_photo">
                                <img className="abt_img" src={item.img} style={{height: item.h}} alt="" />
                            </div>
                            <p className="abt_name">{item.name}</p>
                            <p className="abt_role">{item.role}</p>
                        </div>
                    ))}
                </div>
                <div className="abt_arrow">&#8250;</div>
            </div>
        </section>
        </>
    )
}