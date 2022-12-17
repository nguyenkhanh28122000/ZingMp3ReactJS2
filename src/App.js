import { HashRouter as Routers, Routes, Route } from 'react-router-dom';
import publicRoutes from './routers';

import Provider from './store/Provider';
import { DefaultLayout } from '~/screen';

function App() {
    return (
        <Provider>
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
        </Provider>
    );
}

export default App;
