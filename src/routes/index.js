import Home from '../Pages/Home';
import DanhMucThu from '../Pages/DanhMucThu';
import DanhMucThuPhi from '../Pages/DanhSachThuPhi';
import HoKhau from '../Pages/HoKhau';
import NhanKhau from '../Pages/NhanKhau';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/danhmucthu', component: DanhMucThu },
    { path: '/danhsachthuphi', component: DanhMucThuPhi },
    { path: '/hokhau', component: HoKhau },
    { path: '/nhankhau', component: NhanKhau },
];

export { publicRoutes };
