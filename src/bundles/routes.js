import { createRouteBundle } from 'redux-bundler'
import Showcase from '../components/showcase';
import Showcase2 from '../components/showcase2';
import Showcase3 from '../components/showcase3';

export default createRouteBundle({
  '/': Showcase,
  '/showcase2': Showcase2,
  '/showcase3': Showcase3
},
{
  routeInfoSelector: 'selectPathname'
}
)