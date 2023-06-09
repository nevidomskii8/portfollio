import './main-layout.scss';

import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Outlet} from 'react-router-dom';

import Header from '@components/header/Header';
import Menu from '@components/menu/Menu';

const MainLayout = () => {
    const [active, setActive] = useState(false);
    const {i18n} = useTranslation();

    // TODO: move state to redux
    const onChangeLanguage = async (lang: string) => {
        await i18n.changeLanguage(lang);
    };

    return (
        <div className={`container ${active ? 'active' : ''}`}>
            <Header
                active={active}
                setActive={setActive}
                onChangeLanguage={onChangeLanguage}
            />
            <div className='main-container'>
                <div className='main'>
                    <div className='content'>
                        <div className='overlay'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Menu active={active} setActive={setActive} />
            <ul className='box-area'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default MainLayout;
