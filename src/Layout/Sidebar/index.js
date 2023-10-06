import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import ButtonMenu from './ButtonMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPenToSquare,
    faRestroom,
    faCarSide,
    faUser,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    const [user, setUser] = useState('hoang');
    return (
        <nav>
            <div className={cx('sidebar')}>
                <div className={cx('title')}>
                    <h1>Phần mềm</h1>
                    <h1>quản lý chung cư</h1>
                </div>
                <div className={cx('menu')}>
                    <ButtonMenu
                        iconLeft={<FontAwesomeIcon icon={faPenToSquare} size="lg" />}
                        title="Thu phí"
                        iconRight=""
                    >
                        <NavLink
                            to="/danhsachthuphi"
                            className={(nav) => {
                                cx({ active: nav.isActive });
                            }}
                        >
                            <button className={cx('btn')}>Quản lý thu</button>
                        </NavLink>
                        <NavLink
                            to="/danhmucthu"
                            className={(nav) => {
                                cx({ active: nav.isActive });
                            }}
                        >
                            <button className={cx('btn')}>Danh mục thu</button>
                        </NavLink>
                    </ButtonMenu>
                    <ButtonMenu iconLeft={<FontAwesomeIcon icon={faRestroom} />} title="Cư dân" iconRight="">
                        <NavLink
                            to="/hokhau"
                            className={(nav) => {
                                cx({ active: nav.isActive });
                            }}
                        >
                            <button className={cx('btn')}>Hộ khẩu</button>
                        </NavLink>
                        <NavLink
                            to="/nhankhau"
                            className={(nav) => {
                                cx({ active: nav.isActive });
                            }}
                        >
                            <button className={cx('btn')}>Nhân khẩu</button>
                        </NavLink>
                    </ButtonMenu>
                    <ButtonMenu iconLeft={<FontAwesomeIcon icon={faCarSide} />} title="Phương tiện"></ButtonMenu>
                </div>
                <div className={cx('hr')}></div>
                <div className={cx('user')}>
                    <button className={cx('info')}>
                        <FontAwesomeIcon icon={faUser} className={cx('infoIcon')}></FontAwesomeIcon>
                        Hồ sơ
                    </button>

                    {user ? (
                        <button
                            className={cx('login-out')}
                            onClick={() => {
                                setUser('');
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faArrowRightFromBracket}
                                rotation={180}
                                className={cx('login-out-icon')}
                            />
                            Đăng xuất
                        </button>
                    ) : (
                        <button className={cx('login-out')}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className={cx('login-out-icon')} />
                            Đăng nhập
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
