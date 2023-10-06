import styles from './Themhodan.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function ThemHoDan() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Thêm hộ dân mới</h1>
            <div className={cx('attr')}>
                <div className={cx('text')}> Tên chủ hộ</div> <input type="text" className={cx('input')}></input>
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Nơi thường trú </div> <input type="text" className={cx('input')}></input>
            </div>

            <h3 className={cx('text2')}>Danh sách nhân khẩu</h3>
            <table className={cx('tbl')}>
                <tbody>
                    <tr>
                        <th>Stt</th>
                        <th>Họ và tên</th>
                        <th>Ngày,tháng,năm sinh</th>
                        <th>Số CMT/CCCD</th>
                        <th>Quan hệ với chủ hộ</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className={cx('detail')}>Chi tiết</button>|
                            <button className={cx('delete')}>Xóa</button>
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className={cx('detail')}>Chi tiết</button>|
                            <button className={cx('delete')}>Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className={cx('add')}>Thêm</button>

            <div>
                <button className={cx('btn-confirm')}>Xác nhận</button>
                <button className={cx('btn-cancel')}>Xóa</button>
            </div>
        </div>
    );
}

export default ThemHoDan;
