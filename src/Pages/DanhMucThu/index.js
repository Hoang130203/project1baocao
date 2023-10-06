import classNames from 'classnames/bind';
import styles from './Danhmucthu.module.scss';
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function DanhMucThu() {
    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tools')}>
                <h1 className={cx('title')}>Danh mục thu</h1>
                <Link to="/taokhoanthu">
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
                        Tạo khoản thu
                    </button>
                </Link>

                <h4 className={cx('text')}>Tìm kiếm</h4>

                <span className={cx('text')}>Tên khoản thu</span>
                <input type="text" className={cx('input')} />

                <button className={cx('btn-search')}>Tìm kiếm</button>
            </div>
            <div className={cx('table')}>
                <table>
                    <tbody>
                        <tr>
                            <th>Số thứ tự</th>
                            <th>Tên khoản thu</th>
                            <th>Số người đã đóng</th>
                            <th>Tổng số tiền</th>
                            <th></th>
                        </tr>
                        {list.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>

                                    <td>
                                        <Link to="/home">Chi tiết</Link>
                                    </td>
                                </tr>
                            );
                        })}
                        <tr className={cx('total')}>
                            <td>Tổng số</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
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

export default DanhMucThu;
