import "./Sect6.scss"
import {Photo} from "../../../Photo.js"
export default function Sect6() {
    const videos = [Photo.video3, Photo.video2, Photo.video4]
    const blog = [Photo.blog1, Photo.blog2, Photo.blog3, Photo.video3]
    return(
        <>
        <section className="abv">
            <div className="abv_head">
                <h2 className="abv_title">ВИДЕООБЗОРЫ</h2>
                <p className="abv_all">Смотреть все видеообзоры <span>&#8594;</span></p>
            </div>
            <p className="abv_sub">Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.</p>

            <div className="abv_slider">
                <div className="abv_track">
                    <div className="abv_big">
                        <div className="abv_cover abv_cover_big">
                            <img className="abv_img" src={Photo.video1} alt="" />
                            <div className="abv_play abv_play_big"><span>&#9654;</span></div>
                        </div>
                        <p className="abv_name_big">Крутой и городской? Обзор Kugoo XS Plus</p>
                    </div>
                    {videos.map((img, index) => (
                        <div className="abv_small" key={index}>
                            <div className="abv_cover abv_cover_small">
                                <img className="abv_img" src={img} alt="" />
                                <div className="abv_play"><span>&#9654;</span></div>
                            </div>
                            <p className="abv_name">Крутой и городской?<br />Обзор Kugoo XS Plus</p>
                        </div>
                    ))}
                </div>
                <div className="abv_arrow">&#8250;</div>
            </div>
        </section>

        <section className="abb">
            <h2 className="abb_title">НОВЫЕ СТАТЬИ В БЛОГЕ</h2>
            <div className="abb_slider">
                <div className="abb_track">
                    {blog.map((img, index) => (
                        <div className="abb_card" key={index}>
                            <img className="abb_img" src={img} alt="" />
                            <div className="abb_body">
                                <p className="abb_name">Как правильно заряжать электросамокат</p>
                                <p className="abb_text">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className="abb_meta">
                                    <div className="abb_meta_item">
                                        <img className="abb_meta_icon" src={Photo.icon_calendar} alt="" />
                                        <p className="abb_meta_text">01.09.2021</p>
                                    </div>
                                    <div className="abb_meta_item">
                                        <img className="abb_meta_icon" src={Photo.icon_eye} alt="" />
                                        <p className="abb_meta_text">53</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="abb_arrow">&#8250;</div>
            </div>
        </section>
        </>
    )
}