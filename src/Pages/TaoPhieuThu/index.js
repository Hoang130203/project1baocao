import styles from './TaoPhieu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function TaoPhieuThu() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Tạo phiếu thu mới</h1>
            <div className={cx('attr')}>
                <div className={cx('text')}> Họ và tên</div> <input type="text" className={cx('input')}></input>
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Địa chỉ </div> <input type="text" className={cx('input')}></input>
            </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Thời gian</div> <input type="date" className={cx('date')}></input>
            </div>
            <h3 className={cx('text2')}>Danh sách khoản thu</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Số thứ tự</th>
                        <th>Tên khoản thu</th>
                        <th>Số tiền</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <select>
                                <option>Phí bảo trì</option>
                                <option>Phí vệ sinh</option>
                                <option>Phí quản lý</option>
                            </select>
                        </td>
                        <td></td>
                        <td>
                            <button className={cx('delete')}>Xóa</button>
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className={cx('delete')}>Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className={cx('add')}>Thêm</button>
            <div className={cx('text2')}>Tổng số tiền: </div>
            <div className={cx('attr')}>
                <div className={cx('text')}> Ghi chú</div> <input type="text" className={cx('input')}></input>
            </div>
            <div>
                <button className={cx('btn-confirm')}>Xác nhận</button>
                <button className={cx('btn-cancel')}>Xóa</button>
            </div>
        </div>
    );
}

export default TaoPhieuThu;
