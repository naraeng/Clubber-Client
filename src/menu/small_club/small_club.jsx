import React, { useEffect, useState } from 'react';
import styles from './small_club.module.css';
import { Link } from 'react-router-dom';

function SmallClub() {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <h2 className={styles.header_title}>단과대</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.rectangle}>
                    <h3 className={styles.title}>IT대학</h3>
                    <h5 className={styles.text}>컴퓨터학부</h5>
                    <h5 className={styles.text}>글로벌미디어학부</h5>
                    <h5 className={styles.text}>AI융합학부</h5>
                    <h5 className={styles.text}>전자정보공학부</h5>
                    <h5 className={styles.text}>소프트웨어학부</h5>
                </div>
                <div className={styles.rectangle}>
                    <h3 className={styles.title}>경영대학</h3>
                    <div className={styles.scrollBar}>
                        <h5 className={styles.text}>회계학과</h5>
                        <h5 className={styles.text}>벤처경영학과</h5>
                        <h5 className={styles.text}>복지경영학과</h5>
                        <h5 className={styles.text}>벤처중소기업학과</h5>
                        <h5 className={styles.text}>금융학부</h5>
                        <h5 className={styles.text}>혁신경영학과</h5>
                    </div>
                </div>
                <div className={styles.rectangle}>
                    <h3 className={styles.title}>경제통상대학</h3>
                    <h5 className={styles.text}>경제학과</h5>
                    <h5 className={styles.text}>금융경제학과</h5>
                    <h5 className={styles.text}>글로벌통상학과</h5>
                    <h5 className={styles.text}>국제무역학과</h5>
                </div>
                <div className={styles.rectangle}>
                    <h3 className={styles.title}>공과대학</h3>
                    <div className={styles.scrollBar}>
                        <h5 className={styles.text}>화학공학과</h5>
                        <h5 className={styles.text}>전기공학부</h5>
                        <h5 className={styles.text}>건축학부</h5>
                        <h5 className={styles.text}>산업.정보시스템공학과</h5>
                        <h5 className={styles.text}>기계공학부</h5>
                        <h5 className={styles.text}>신소재공학과</h5>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.rectangle}>
                    <h3 className={styles.title}>법과대학</h3>
                    <h5 className={styles.text}>법학과</h5>
                    <h5 className={styles.text}>국제법무학과</h5>
                </div>

                <div className={styles.rectangle}>
                    <h3 className={styles.title}>사회과학대학</h3>
                    <div className={styles.scrollBar}>
                        <h5 className={styles.text}>사회복지학부</h5>
                        <h5 className={styles.text}>정치외교학과</h5>
                        <h5 className={styles.text}>언론홍보학과</h5>
                        <h5 className={styles.text}>행정학부</h5>
                        <h5 className={styles.text}>정보사회학과</h5>
                        <h5 className={styles.text}>평생교육학과</h5>
                    </div>
                </div>
                <div className={styles.rectangle}>
                    <h3 className={styles.title}>인문대학</h3>
                    <div className={styles.scrollBar}>
                        <h5 className={styles.text}>기독교학과</h5>
                        <h5 className={styles.text}>국어국문학과</h5>
                        <h5 className={styles.text}>영어영문학과</h5>
                        <h5 className={styles.text}>불어불문학과</h5>
                        <h5 className={styles.text}>중어중문학과</h5>
                        <h5 className={styles.text}>일어일문학과</h5>
                        <h5 className={styles.text}>철학과</h5>
                        <h5 className={styles.text}>사회과</h5>
                        <h5 className={styles.text}>예술창작학부</h5>
                        <h5 className={styles.text}>스포츠학부</h5>
                    </div>
                </div>
                <div className={styles.rectangle}>
                    <h3 className={styles.title}>자연과학대학</h3>
                    <div className={styles.scrollBar}>
                        <h5 className={styles.text}>수학과</h5>
                        <h5 className={styles.text}>물리학과</h5>
                        <h5 className={styles.text}>화학과</h5>
                        <h5 className={styles.text}>정보통계.보험수리학과</h5>
                        <h5 className={styles.text}>의생명시스템학부</h5>
                    </div>
                </div>
                <div className={styles.rectangle}>
                    <h3 className={styles.title}>자유전공</h3>
                    <div>
                        <h5 className={styles.text}>
                            융합특성화
                            <br /> 자유전공학부
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SmallClub;
