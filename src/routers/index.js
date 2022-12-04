import { HomeScreen, ZingChart } from '../screen';

import configs from '../configs';

const publicRoutes = [
    { path: configs.routes.home, component: HomeScreen },
    { path: configs.routes.zingchart, component: ZingChart },
];

export default publicRoutes;
