import React, { Component, Fragment } from 'react';
import './sideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div class="vertical-menu">
                <a href="#"><pre><i class="fas fa-home"></i> Домашние задания</pre></a>
                <a href="#">Успеваемость</a>
                <a href="#">Учебные материалы</a>
                <a href="#">Новости</a>
                <a href="#">Расписание</a>
                <a href="#">Отзывы</a>
                <a href="#">Контакты</a>
                <a href="#">Профиль</a>
                <a href="#">Вопрос ответ</a>
            </div>
        )
    }
}

export default SideBar;