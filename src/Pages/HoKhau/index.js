import classNames from 'classnames/bind';
import styles from './Hokhau.module.scss';
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function HoKhau() {
    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tools')}>
                <h1 className={cx('title')}>Danh sách hộ dân</h1>
                <Link to="/themhodan">
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
                        Thêm hộ dân
                    </button>
                </Link>

                <h4 className={cx('text')}>Tìm kiếm</h4>
                <div className={cx('search')}>
                    <span className={cx('text')}>Tên chủ hộ</span>
                    <input type="text" className={cx('input')} />
                    <span className={cx('text')}>Nơi thường trú</span>
                    <input type="text" className={cx('input')} />

                    <button className={cx('btn-search')}>Tìm kiếm</button>
                </div>
            </div>
            <div className={cx('table')}>
                <table className={cx('tbl')}>
                    <tbody>
                        <tr>
                            <th>Số thứ tự</th>
                            <th>Tên chủ hộ</th>
                            <th>Nơi thường trú</th>
                            <th>Số nhân khẩu</th>
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

export default HoKhau;
