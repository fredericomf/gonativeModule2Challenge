import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// STUDY_NOTE: createSwitchNavigator isn't visual and it's used when is necessary to manage the routes without the user intervention.

import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';

// STUDY_NOTE: createAppContainer isn't a visual container but is necessary to manage routes.
const Routes = () => createAppContainer(
  createSwitchNavigator({
    Repositories,
    Issues,
  }),
);

export default Routes;
