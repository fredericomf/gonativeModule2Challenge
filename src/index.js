import React from 'react';
import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import createNavigator from '~/pages/routes';

const App = () => {
  const Routes = createNavigator();
  return <Routes />;
};

export default App;
