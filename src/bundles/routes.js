import { createRouteBundle } from 'redux-bundler'
import App from '../components/App'
import Fluffykins from '../components/fluffykins'

export default createRouteBundle({
  '/': App,
  '/fluffykins': Fluffykins
},
{
  routeInfoSelector: 'selectPathname'
}
)