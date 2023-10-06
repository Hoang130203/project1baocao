import styles from './Themcudan.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function ThemCuDan() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Thêm mới cư dân</h1>
            <div className={cx('attr')}>
                <div className={cx('text')}> Họ và tên</div> <input type="text" className={cx('input')}></input>
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Giới tính</div>
                <input type="radio" value="Nam" name="gender" className={cx('radio')}></input>Nam
                <input type="radio" value="Nữ" name="gender" className={cx('radio')}></input>Nữ
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Ngày, tháng, năm sinh </div>{' '}
                <input type="date" className={cx('input2')}></input>
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Quê quán</div>{' '}
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Tỉnh (Thành phố) </div> <select className={cx('select1')}></select>
                <div className={cx('text')}> Huyện (Quận) </div> <select className={cx('select2')}></select>
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Xã (Phường) </div> <select className={cx('select2')}></select>
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> CCCD </div> <input type="text" className={cx('input')}></input>
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Số điiện thoại </div> <input type="text" className={cx('input')}></input>
            </div>

            <div>
                <button className={cx('btn-confirm')}>Xác nhận</button>
                <button className={cx('btn-cancel')}>Xóa</button>
            </div>
        </div>
    );
}

export default ThemCuDan;
