import "./Sect7.scss"
import {Photo} from "../../../Photo.js"
export default function Sect7() {
        const row1 = [
        {img: Photo.rev1, w: 214},
        {img: Photo.rev2, w: 213},
        {img: Photo.rev3, w: 378, card: true},
        {img: Photo.rev4, w: 378},
        {img: Photo.rev5, w: 213},
        {img: Photo.rev1, w: 214},
        {img: Photo.rev6, w: 378},
        {img: Photo.rev7, w: 214},
        {img: Photo.rev8, w: 212},
        {img: Photo.rev4, w: 378},
        {img: Photo.rev2, w: 213},
    ]
    const row2 = [
        {img: Photo.rev2, w: 213},
        {img: Photo.rev5, w: 213},
        {img: Photo.rev6, w: 378},
        {img: Photo.rev7, w: 214},
        {img: Photo.rev8, w: 212},
        {img: Photo.rev9, w: 128},
        {img: Photo.rev4, w: 378},
        {img: Photo.rev1, w: 214},
        {img: Photo.rev2, w: 213},
        {img: Photo.rev5, w: 213},
        {img: Photo.rev6, w: 378},
        {img: Photo.rev7, w: 214},
    ]
    const videos = [Photo.video2, Photo.video3, Photo.video1]
    const blog = [Photo.blog1, Photo.blog2, Photo.blog3, Photo.video3]
    return(
        <>
        <section className="reviews">
            <h2 className="text_title text_center">ОТЗЫВЫ И ФОТО РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ</h2>
            <p className="reviews_link">Читать отзывы на Яндекс <span>&#8594;</span></p>

            <div className="rev_rows">
                <div className="rev_row">
                    <div className="rev_track track_1">
                        {row1.map((item, index) => (
                            <div className="rev_item" key={index} style={{width: item.w}}>
                                <img className="rev_img" src={item.img} alt="" />
                                {item.card && (
                                    <div className="rev_card">
                                        <div className="rev_user">
                                            <div className="rev_avatar">И</div>
                                            <div>
                                                <p className="rev_name">Илья М.</p>
                                                <p className="rev_level">Знаток города 2 уровня</p>
                                            </div>
                                        </div>
                                        <p className="rev_stars">&#9733;&#9733;&#9733;&#9733;&#9733; <span>23 сентября 2020</span></p>
                                        <p className="rev_text">Магазин очень понравился, быстро обслужили, персонал хорошо знает свой товар, вежливо и грамотно консультирует, ассортимент внушительный, а ...</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rev_row">
                    <div className="rev_track track_2">
                        {row2.map((item, index) => (
                            <div className="rev_item" key={index} style={{width: item.w}}>
                                <img className="rev_img" src={item.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="videos">
            <div className="block_top">
                <h2 className="text_title">ВИДЕООБЗОРЫ</h2>
                <p className="block_link">Смотреть все видеообзоры <span>&#8594;</span></p>
            </div>
            <p className="block_sub">Узнайте больше о самокатах Kugoo и посмотрите сравнительные<br />обзоры разных моделей на нашем YouTube-канале.</p>

            <div className="videos_row">
                <div className="video_big">
                    <div className="video_cover video_cover_big">
                        <img src={Photo.video1} alt="" />
                        <div className="play_btn play_big"><span>&#9654;</span></div>
                    </div>
                    <p className="video_title_big">Крутой и городской? Обзор Kugoo XS Plus</p>
                </div>
                {videos.slice(0, 3).map((img, index) => (
                    <div className="video_small" key={index}>
                        <div className="video_cover">
                            <img src={img} alt="" />
                            <div className="play_btn"><span>&#9654;</span></div>
                        </div>
                        <p className="video_title">Крутой и городской?<br />Обзор Kugoo XS Plus</p>
                    </div>
                ))}
                <div className="slider_btn slider_videos">&#8250;</div>
            </div>
        </section>

        <section className="blog">
            <h2 className="text_title">НОВЫЕ СТАТЬИ В БЛОГЕ</h2>
            <div className="blog_row">
                {blog.map((img, index) => (
                    <div className="blog_card" key={index}>
                        <img className="blog_img" src={img} alt="" />
                        <div className="blog_body">
                            <p className="blog_title">Как правильно заряжать электросамокат</p>
                            <p className="blog_text">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                            <div className="blog_meta">
                                <p className="meta_item"><span>&#9638;</span> 01.09.2021</p>
                                <p className="meta_item"><span>&#9673;</span> 53</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="slider_btn slider_blog">&#8250;</div>
            </div>
        </section>
        </>
    )
}