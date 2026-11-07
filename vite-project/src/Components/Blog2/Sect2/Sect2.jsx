import { Link } from "react-router-dom";
import "./Sect2.scss";
import { Photo } from "../../../Photo.js";

export default function Sect2() {
    // Массив для похожих статей (можно использовать те же картинки, что и в блоге)
    const relatedPosts = [
        { id: 1, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg1 },
        { id: 2, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg2 },
        { id: 3, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg3 },
        { id: 4, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg4 }
    ];

    return (
        <section className="articleSect2">
            <div className="containerWrapper">
                
                {/* Слайдер с фото */}
                <div className="articleSlider">
                    <button className="sliderBtn prevBtn">
                        <img src={Photo.iconArrowLeft} alt="Назад" />
                    </button>
                    <img src={Photo.articleSliderImg} alt="Фото интерьера" className="sliderImg" />
                    <button className="sliderBtn nextBtn">
                        <img src={Photo.iconArrowRight} alt="Вперед" />
                    </button>
                </div>

                {/* Продолжение текста */}
                <div className="articleBody">
                    <h2 className="articleSubheading">Как мы за 1000 евро обустроили арендную<br/>квартиру</h2>
                    
                    <p className="articleParagraph">
                        История. Как мы за 1000 евро обустроили арендную квартиру мебелью, купленной за 2000 евро, на эти деньги купили пылесос, а на оставшиеся две тысячи купили продуктов на месяц. И у нас еще остались деньги на дорогу домой в Москву.
                    </p>

                    <button className="catalogBtn">Перейти в каталог</button>

                    <p className="articleParagraph">
                        История. Как мы за 1000 евро обустроили арендную квартиру мебелью, купленной за 2000 евро, на эти деньги купили пылесос, а на оставшиеся две тысячи купили продуктов на месяц. И у нас еще остались деньги на дорогу домой в Москву. У вас же не было выбора, вы приехали и работали за еду, иначе бы не выжили бы. Не нужно было бы <a href="#" className="textLink">покупать мебель</a>, если бы вы поехали домой! Вы правы, я приехал в Украину работать не имея даже регистрации и был вынужден жить с женщиной которая меня не видела ни разу в жизни. И то я купил машину за 100 000 руб.
                    </p>

                    <p className="articleParagraph">
                        История. Как мы за 1000 евро обустроили арендную квартиру мебелью, купленной за 2000 евро, на эти деньги купили пылесос, а на оставшиеся две тысячи купили продуктов на месяц.
                    </p>
                </div>

                {/* Блок подписки на соцсети */}
                <div className="subscribeBlock">
                    <div className="subscribeTextCol">
                        <h2 className="subscribeTitle">ПОДПИСЫВАЙТЕСЬ И ПЕРВЫМИ<br/>УЗНАВАЙТЕ О НОВЫХ СКИДКАХ,<br/>АКЦИЯХ И РОЗЫГРЫШАХ ПОДАРКОВ</h2>
                        <p className="subscribeSubtext">Станьте частью сообщества Kugoo-Russia</p>
                    </div>

                    <div className="subscribeSocialsCard">
                        <a href="#" className="socialRowBtn vkBtn">
                            <div className="socialIconName">
                                <img src={Photo.iconVk} alt="Вконтакте" />
                                <span>Вконтакте</span>
                            </div>
                            <span className="socialCount">3 300</span>
                        </a>
                        
                        <a href="#" className="socialRowBtn instaBtn">
                            <div className="socialIconName">
                                <img src={Photo.iconInsta} alt="Instagram" />
                                <span>Instagram</span>
                            </div>
                            <span className="socialCount">10 602</span>
                        </a>

                        <a href="#" className="socialRowBtn youtubeBtn">
                            <div className="socialIconName">
                                <img src={Photo.iconYoutube} alt="YouTube" />
                                <span>YouTube</span>
                            </div>
                            <span className="socialCount">3 603</span>
                        </a>

                        <a href="#" className="socialRowBtn telegramBtn">
                            <div className="socialIconName">
                                <img src={Photo.iconTelegram} alt="Telegram" />
                                <span>Telegram</span>
                            </div>
                            <span className="socialCount">432</span>
                        </a>
                    </div>
                </div>

                {/* Блок "Вам также может быть интересно" */}
                <div className="relatedPostsBlock">
                    <h2 className="relatedTitle">ВАМ ТАКЖЕ МОЖЕТ БЫТЬ ИНТЕРЕСНО</h2>
                    
                    <div className="sliderContainer">
                        <div className="cardsRow">
                            {relatedPosts.map((post) => (
                                <Link to={`/Blog2/${post.id}`} className="blogCard" key={post.id}>
                                    <div className="cardImgWrapper">
                                        <img src={post.image} alt={post.title} className="cardImg" />
                                    </div>
                                    
                                    <div className="cardContent">
                                        <h3 className="cardTitle">{post.title}</h3>
                                        <p className="cardDesc">{post.desc}</p>
                                        
                                        <div className="cardMeta">
                                            <div className="metaItem">
                                                <img src={Photo.iconCalendar} alt="Дата" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="metaItem">
                                                <img src={Photo.iconEye} alt="Просмотры" />
                                                <span>{post.views}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        <div className="sliderNextBtn">
                            <img src={Photo.iconArrowRight} alt="Далее" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}