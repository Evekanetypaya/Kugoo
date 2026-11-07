import "./Sect2.scss"
import {Photo} from "../../../Photo.js"
import { Link } from "react-router-dom"

export default function Sect2() {
    const videos = [Photo.video3, Photo.video2, Photo.video4]
    const blog = [Photo.blog1, Photo.blog2, Photo.blog3, Photo.video3]
    return(
        <>
        <section className="vid">
            <div className="vid_head">
                <h2 className="vid_title">ВИДЕООБЗОРЫ</h2>
                <p className="vid_all">Смотреть все видеообзоры <span>&#8594;</span></p>
            </div>
            <p className="vid_sub">Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.</p>

            <div className="vid_slider">
                <div className="vid_track">
                    <div className="vid_big">
                        <div className="vid_cover vid_cover_big">
                            <img className="vid_img" src={Photo.video1} alt="" />
                            <div className="vid_play vid_play_big"><span>&#9654;</span></div>
                        </div>
                        <p className="vid_name_big">Крутой и городской? Обзор Kugoo XS Plus</p>
                    </div>
                    {videos.map((img, index) => (
                        <div className="vid_small" key={index}>
                            <div className="vid_cover vid_cover_small">
                                <img className="vid_img" src={img} alt="" />
                                <div className="vid_play"><span>&#9654;</span></div>
                            </div>
                            <p className="vid_name">Крутой и городской?<br />Обзор Kugoo XS Plus</p>
                        </div>
                    ))}
                </div>
                <div className="vid_arrow">&#8250;</div>
            </div>
        </section>

        <section className="tv_blog">
            <h2 className="tv_blog_title">НОВЫЕ СТАТЬИ В БЛОГЕ</h2>
            <div className="tv_blog_slider">
                <div className="tv_blog_track">
                    {blog.map((img, index) => (
                        <div className="tv_blog_card" key={index}>
                            <img className="tv_blog_img" src={img} alt="" />
                            <div className="tv_blog_body">
                                <p className="tv_blog_name">Как правильно заряжать электросамокат</p>
                                <p className="tv_blog_text">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                                <div className="tv_blog_meta">
                                    <div className="tv_meta_item">
                                        <img className="tv_meta_icon" src={Photo.icon_calendar} alt="" />
                                        <p className="tv_meta_text">01.09.2021</p>
                                    </div>
                                    <div className="tv_meta_item">
                                        <img className="tv_meta_icon" src={Photo.icon_eye} alt="" />
                                        <p className="tv_meta_text">53</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tv_blog_arrow">&#8250;</div>
            </div>
        </section>
        </>
    )
}