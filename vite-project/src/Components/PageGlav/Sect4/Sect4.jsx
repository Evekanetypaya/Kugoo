import "./Sect4.scss"
import { Photo } from "../../../Photo.js"
import { Link } from "react-router-dom"

export default function Sect4() {
    return (
        <section className="categories">
            <div className="categories_top">
                <h2 className="text_title">ПОПУЛЯРНЫЕ КАТЕГОРИИ</h2>
            </div>
            
            <div className="categories_grid">
                <div className="category_card">
                    <img className="category_img" src={Photo.cat1} alt="Робот-пылесосы" />
                    <div className="category_overlay">
                        <h3 className="category_name">Робот-пылесосы</h3>
                        <p className="category_price">от 29 900 ₽</p>
                    </div>
                </div>
                <div className="category_card">
                    <img className="category_img" src={Photo.cat2} alt="Электровелосипеды" />
                    <div className="category_overlay">
                        <h3 className="category_name">Электровелосипеды</h3>
                        <p className="category_price">от 29 900 ₽</p>
                    </div>
                </div>
                <div className="category_card">
                    <img className="category_img" src={Photo.cat3} alt="Весы" />
                    <div className="category_overlay">
                        <h3 className="category_name">Весы</h3>
                        <p className="category_price">от 29 900 ₽</p>
                    </div>
                </div>
                <div className="category_card">
                    <img className="category_img" src={Photo.cat1} alt="Робот-пылесосы" />
                    <div className="category_overlay">
                        <h3 className="category_name">Робот-пылесосы</h3>
                        <p className="category_price">от 29 900 ₽</p>
                    </div>
                </div>
            </div>
            <div className="categories_grid">
                <div className="category_card">
                    <img className="category_img" src={Photo.cat1} alt="Робот-пылесосы" />
                    <div className="category_overlay">
                        <h3 className="category_name">Робот-пылесосы</h3>
                        <p className="category_price">от 29 900 ₽</p>
                    </div>
                </div>
                <div className="category_card">
                    <img className="category_img" src={Photo.cat2} alt="Электровелосипеды" />
                    <div className="category_overlay">
                        <h3 className="category_name">Электровелосипеды</h3>
                        <p className="category_price">от 29 900 ₽</p>
                    </div>
                </div>
                <div className="category_card">
                    <img className="category_img" src={Photo.cat3} alt="Весы" />
                    <div className="category_overlay">
                        <h3 className="category_name">Весы</h3>
                        <p className="category_price">от 29 900 ₽</p>
                    </div>
                </div>
                <div className="category_card">
                    <img className="category_img" src={Photo.cat1} alt="Робот-пылесосы" />
                    <div className="category_overlay">
                        <h3 className="category_name">Робот-пылесосы</h3>
                        <p className="category_price">от 29 900 ₽</p>
                    </div>
                </div>
            </div>
            <div className="categories_more">
                <Link to="/Catalog"><button className="btn_all">Смотреть все</button></Link>
            </div>
        </section>
    )
}