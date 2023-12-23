import { Routes, Route } from "react-router-dom";
import RouteGuard from "../components/common/routeGaurd/routeGaurd";
import RoutesData from "./RoutesData";
const RoutesToRender = () => {
	return (
		<Routes>
			{RoutesData.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					element={
						<RouteGuard
							children={route.element}
							role={route.role}
							type={route.type}
						/>
					}
				/>
			))}
		</Routes>
	);
};

export default RoutesToRender;
