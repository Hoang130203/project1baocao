import Home from '../Pages/Home';
import DanhMucThu from '../Pages/DanhMucThu';
import DanhMucThuPhi from '../Pages/DanhSachThuPhi';
import HoKhau from '../Pages/HoKhau';
import NhanKhau from '../Pages/NhanKhau';
import TaoPhieuThu from '../Pages/TaoPhieuThu';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/danhmucthu', component: DanhMucThu },
    { path: '/danhsachthuphi', component: DanhMucThuPhi },
    { path: '/hokhau', component: HoKhau },
    { path: '/nhankhau', component: NhanKhau },
    { path: '/taophieuthu', component: TaoPhieuThu },
];

export { publicRoutes };
