import { HashRouter as Routers, Routes, Route, Router } from 'react-router-dom';
import publicRoutes from './routers';

import { DefaultLayout } from '~/screen';

function App() {
    return (
        <Routers>
            <Routes>
                {publicRoutes.map((publicRoute, index) => {
                    const Page = publicRoute.component;
                    return (
                        <Route
                            key={index}
                            path={publicRoute.path}
                            element={
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </Routers>
    );
}

export default App;
