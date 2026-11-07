import "./Sect3.scss"
import {Photo} from "../../../Photo.js"
export default function Sect3() {
    const water = [
        "Возможность выезжать в дождь или после дождя",
        "Можно ездить в любое время года",
        "Защита от влаги, пыли и грязи продлит срок беспроблемного использования.",
    ]
    const setup = [
        "Регулировка натяжения тормозного троса",
        "Регулировка положения тормозной ручки",
        "Регулировка тормозных механизмов",
        "Протяжка всех соединений",
        "И еще более 35 работ.",
    ]
    return(
        <>
        <section className="extra">
            <div className="extra_row row_water">
                <div className="video_box">
                    <img className="video_img" src={Photo.service_repair} alt="" />
                    <div className="play_btn"><span>&#9654;</span></div>
                </div>
                <div className="extra_text">
                    <h2 className="text_title">СДЕЛАЕМ ГИДРОИЗОЛЯЦИЮ<br />ЭЛЕКТРОСАМОКАТА</h2>
                    <p className="text_sub">которая позволит вам кататься в любую погоду</p>
                    <p className="text_desc">Гидроизоляция – это защита от проникновения воды. Электросамокат изнутри покрывается специальным веществом, которое предотвращает попадание любой влаги.</p>
                    <p className="text_list_title">Что дает гидроизоляция:</p>
                    <div className="check_list">
                        {water.map((item, index) => (
                            <div className="check_item" key={index}>
                                <img className="check_icon" src={Photo.icon_check} alt="" />
                                <p className="check_text">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text_more">Подробнее про гидроизоляцию прочитайте в <span>нашей статье</span></p>
                </div>
            </div>

            <div className="extra_row row_setup">
                <div className="extra_text">
                    <h2 className="text_title">ПРОДЛИМ СРОК СЛУЖБЫ<br />ВАШЕГО САМОКАТА В 2 РАЗА</h2>
                    <p className="text_sub">благодаря настройкам от специалистов<br />с опытом 7+ лет</p>
                    <p className="text_desc">Перед продажей каждый покупатель может заказать у нас дополнительную услугу – настройка самоката. Для разных моделей Kugoo настройка может отличаться.</p>
                    <p className="text_list_title">Что входит в настройку:</p>
                    <div className="check_list">
                        {setup.map((item, index) => (
                            <div className="check_item" key={index}>
                                <img className="check_icon" src={Photo.icon_check} alt="" />
                                <p className="check_text">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text_more">Подробнее про настройку прочитайте в <span>нашей статье</span></p>
                </div>
                <div className="scooter_box">
                    <img className="scooter_img" src={Photo.kirinm4} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}