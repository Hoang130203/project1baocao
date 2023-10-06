import classNames from 'classnames/bind';
import styles from './Danhsachthuphi.module.scss';
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function DanhSachThu() {
    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tools')}>
                <h1 className={cx('title')}>Danh sách thu phí</h1>
                <Link to="/taophieuthu">
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
                        Tạo phiếu thu
                    </button>
                </Link>

                <h4 className={cx('text')}>Tìm kiếm</h4>
                <div className={cx('search')}>
                    <span className={cx('text')}>Tên</span>
                    <input type="text" className={cx('input')} />
                    <span className={cx('text')}>Số nhà</span>
                    <input type="text" className={cx('input')} />
                    <span className={cx('text')}>Thời gian</span>
                    <span>từ</span>
                    <input type="date" className={cx('input2')} />
                    <span>đến</span>
                    <input type="date" className={cx('input2')} />
                </div>
                <button className={cx('btn-search')}>Tìm kiếm</button>
            </div>
            <div className={cx('table')}>
                <table>
                    <tbody>
                        <tr>
                            <th>Số thứ tự</th>
                            <th>Họ và tên</th>
                            <th>Số nhà</th>
                            <th>Tổng số tiền</th>
                            <th>Thời gian</th>
                            <th></th>
                        </tr>
                        {list.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <Link to="/home">Chi tiết</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className={cx('page')}>
                    <span>Trang 1/1</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronRight} style={{ paddingLeft: '10px', cursor: 'pointer' }} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DanhSachThu;
