import { Link } from "react-router-dom";
import "./Sect1.scss";
import { Photo } from "../../../Photo.js";

export default function Sect1() {
    const categories = ["Все", "Видео", "Советы", "Сравнения", "Топ"];
    
    const blogPosts = [
        { id: 1, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg1 },
        { id: 2, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg2 },
        { id: 3, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg3 },
        { id: 4, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg4 },
        { id: 5, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg5 },
        { id: 6, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg6 },
        { id: 7, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg7 },
        { id: 8, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg8 },
        { id: 9, title: "Как правильно заряжать электросамокат", desc: "Один из первых вопросов, который волнует после покупки электросамоката.", date: "01.09.2021", views: "53", image: Photo.blogImg9 }
    ];

    return (
        <section className="blogSect1">
            <div className="containerWrapper">
                <div className="heroBlock">
                    <h1 className="heroTitle">БЛОГ KUGOO</h1>
                    
                    <div className="heroImages">
                        <img src={Photo.blogImg7} alt="" className="heroImg frontImg" />
                        <img src={Photo.blogImg2} alt="" className="heroImg backImg" />
                    </div>
                </div>

                <div className="filterBar">
                    <div className="categoryList">
                        {categories.map((cat, index) => (
                            <div className={`categoryItem ${index === 0 ? 'active' : ''}`} key={index}>
                                {cat}
                            </div>
                        ))}
                    </div>
                    
                    <div className="socialList">
                        <div className="socialItem"><img src={Photo.iconVk} alt="VK" /></div>
                        <div className="socialItem"><img src={Photo.iconInsta} alt="Instagram" /></div>
                        <div className="socialItem"><img src={Photo.iconYoutube} alt="YouTube" /></div>
                        <div className="socialItem"><img src={Photo.iconTelegram} alt="Telegram" /></div>
                    </div>
                </div>
                <div className="blogGrid">
                    {blogPosts.map((post) => (
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

                <div className="paginationRow">
                    <div className="pageBtn prevBtn">&lt;</div>
                    <div className="pageBtn active">1</div>
                    <div className="pageBtn">2</div>
                    <div className="pageBtn">3</div>
                    <div className="pageBtn">4</div>
                    <div className="pageBtn">5</div>
                    <div className="pageDots">...</div>
                    <div className="pageBtn">50</div>
                    <div className="pageBtn nextBtn">&gt;</div>
                </div>

            </div>
        </section>
    );
}