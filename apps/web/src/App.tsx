import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Allroutes from "./routes/RoutesToRender";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<div className="font-rubik">
			<Header />
			<Allroutes />
			<Footer />
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</div>
	);
}

export default App;
