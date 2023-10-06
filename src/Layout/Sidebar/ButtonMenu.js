import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styles from './ButtonMenu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const ButtonMenu = ({ iconLeft, iconRight, children, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cx('menu')}>
            <button onClick={() => setIsOpen(!isOpen)} className={cx('button', isOpen ? 'isclick' : '')}>
                <span className={cx('left-title')}>
                    <span className={cx('btn-left')}>{iconLeft}</span>
                    {title}
                </span>
                {iconRight == null ? (
                    iconRight
                ) : isOpen ? (
                    <FontAwesomeIcon icon={faChevronUp} className={cx('btn-right')} size="xs" />
                ) : (
                    <FontAwesomeIcon icon={faChevronDown} className={cx('btn-right')} size="xs" />
                )}
            </button>
            {isOpen && children}
        </div>
    );
};

export default ButtonMenu;
