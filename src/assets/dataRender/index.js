import { PlaylistImgs } from '../img/avatar';
import imgMV from '../img/mv';
import singers from '../img/singer';
import {
    faBroadcastTower,
    faChartLine,
    faCompactDisc,
    faListAlt,
    faMusic,
    faPhotoVideo,
} from '@fortawesome/free-solid-svg-icons';
import { faCirclePause, faHourglass, faStar } from '@fortawesome/free-regular-svg-icons';

import configs from '~/configs';

export const silebarLeft1 = [
    {
        icon: faCirclePause,
        title: 'cá nhân',
        config: configs.routes.home,
        isNofi: '',
    },
    {
        icon: faCompactDisc,
        title: 'khám phá',
        config: configs.routes.home,
        isNofi: '',
    },
    {
        icon: faChartLine,
        title: 'zingchart',
        config: configs.routes.zingchart,
        isNofi: '',
    },
    {
        icon: faBroadcastTower,
        title: 'radio',
        config: configs.routes.home,
        isNofi: 'live',
    },
    {
        icon: faListAlt,
        title: 'theo dõi',
        config: configs.routes.home,
        isNofi: '',
    },
];

export const silebarLeft2 = [
    {
        icon: faMusic,
        title: 'nhạc mới',
        config: configs.routes.home,
        isNofi: '',
    },
    {
        icon: faHourglass,
        title: 'thể loại',
        config: configs.routes.home,
        isNofi: '',
    },
    {
        icon: faStar,
        title: 'top 100',
        config: configs.routes.home,
        isNofi: '',
    },
    {
        icon: faPhotoVideo,
        title: 'MV',
        config: configs.routes.home,
        isNofi: '',
    },
];

export const PlayLists = [
    {
        img: PlaylistImgs.Replay,
        title: 'Replay',
        info: 'Nguyễn Ngọc Khánh',
    },
    {
        img: PlaylistImgs.Repeat,
        title: '4U - On Repeat',
        info: 'Zing MP3',
    },
    {
        img: PlaylistImgs.Zingchart,
        title: '#zingchart',
        info: 'Zing MP3',
    },
    {
        img: PlaylistImgs.MySong,
        title: 'Nhạc của Tôi',
        info: 'Nguyễn Ngọc Khánh',
    },
];

export const MVs = [
    {
        imgMV: imgMV.ThayToiYeuCoAyImg,
        nameMV: 'Thay tôi yêu cô ấy',
        avatar: imgMV.ThanhHungAvatar,
        singerMV: 'Thanh Hưng',
    },
    {
        imgMV: imgMV.DemCuu,
        nameMV: 'Đếm Cừu',
        avatar: imgMV.HanSara,
        singerMV: 'Han Sara, Kay Trần',
    },
    {
        imgMV: imgMV.QueVa,
        nameMV: 'Que Va',
        avatar: imgMV.Alex,
        singerMV: 'Alex Sensation, Ozuna',
    },
];

export const SingerInfos = [
    {
        avatar: singers.Siro,
        name: 'Mr.Siro',
        sub: '757K',
    },
    {
        avatar: singers.BichPhuong,
        name: 'Bích Phương',
        sub: '381K',
    },
    {
        avatar: singers.Soobin,
        name: 'SOOBIN',
        sub: '466K',
    },
    {
        avatar: singers.SonTungmtp,
        name: 'Sơn Tùng M-TP',
        sub: '2.2M',
    },
    {
        avatar: singers.HuongLy,
        name: 'Hương Ly',
        sub: '604K',
    },
];
