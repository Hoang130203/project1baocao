import styles from './Taokhoanthu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function TaoKhoanThu() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Tạo khoản thu mới</h1>
            <div className={cx('attr')}>
                <div className={cx('text')}> Tên khoản thu</div> <input type="text" className={cx('input')}></input>
            </div>
            <div>
                <button className={cx('btn-confirm')}>Xác nhận</button>
            </div>
        </div>
    );
}

export default TaoKhoanThu;
