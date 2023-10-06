import classNames from 'classnames/bind';
import styles from './Nhankhau.module.scss';
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function NhanKhau() {
    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tools')}>
                <h1 className={cx('title')}>Danh sách cư dân</h1>
                <Link to="/themcudan">
                    <button className={cx('btn')}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
                        Thêm cư dân
                    </button>
                </Link>

                <h4 className={cx('text')}>Tìm kiếm</h4>
                <div className={cx('search')}>
                    <span className={cx('text')}>Tên</span>
                    <input type="text" className={cx('input')} />

                    <button className={cx('btn-search')}>Tìm kiếm</button>
                </div>
            </div>
            <div className={cx('table')}>
                <table className={cx('tbl')}>
                    <tbody>
                        <tr>
                            <th>Số thứ tự</th>
                            <th>Họ và tên</th>
                            <th>Nơi thường trú</th>
                            <th>Ngày,tháng,năm sinh</th>
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

export default NhanKhau;
