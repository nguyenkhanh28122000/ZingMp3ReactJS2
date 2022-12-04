import {
    faAdd,
    faBroadcastTower,
    faChartLine,
    faCompactDisc,
    faListAlt,
    faMusic,
    faPencilAlt,
    faPhotoVideo,
} from '@fortawesome/free-solid-svg-icons';
import { faCirclePause, faClock, faFileAudio, faHourglass, faStar } from '@fortawesome/free-regular-svg-icons';

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
