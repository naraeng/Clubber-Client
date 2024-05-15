import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuBar from '../components/MenuBar';
import TagScroll from '../components/TagScroll';
import './header.css';

export default function Header() {
    // 모든 페이지에서 공통적으로 나타날 헤더

    return (
        <>
            <div className={'header_top'}>
                <Link to="/">
                    <img src="/CluBBer.png" alt="clubber logo" className="mainLogo" />
                </Link>
                <div className="search_box">
                    <img className="search_icon" src="/main/search.png" alt="search_icon" />
                    <input
                        className="input_search"
                        type="search"
                        placeholder="찾고 싶은 동아리를 검색해보세요!"
                        // value={value}
                        // onChange={onChange}
                    />
                </div>
                <div className="user_container">
                    <Link to="/menu/login" style={{ textDecoration: 'none', color: 'black' }}>
                        <img src="/buttons/user_login_icon.png" alt="user icon" width={39} height={39} />
                        <p className="login_text">로그인</p>
                    </Link>
                </div>
            </div>
            <TagScroll />
            <MenuBar />
        </>
    );
}
