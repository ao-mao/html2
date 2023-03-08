import { Route,HashRouter } from 'react-router-dom'
import Films from './test/Films'
export default class App extends Component {
	render() {
		return (
			<div>
				<HashRouter>
					<Route path="/films" component={Films}></Route>
				</HashRouter>
			</div>
		)
	}
}
