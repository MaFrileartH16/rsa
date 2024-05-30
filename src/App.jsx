import {Header} from "./components/Header.jsx";
import "./App.css";
import {Footer} from "./components/Footer.jsx";
import {TourList} from "./components/TourList.jsx";
import {AddTour} from "./components/AddTour.jsx";
import {useState} from "react";
import {EditTour} from "./components/EditTour.jsx";

export const App = () => {
	const [daftarWisata, setDaftarWisata] = useState([]);
	const [rincianWisata, setRincianWisata] = useState(null);
	// console.log(rincianWisata, 'app');
	
	return (
		<>
			<Header />
			
			<main>
				<div>
					<AddTour daftarWisata={daftarWisata} setDaftarWisata={setDaftarWisata} rincianWisata={rincianWisata}
					         setRincianWisata={setRincianWisata} />
					
					{rincianWisata && (
						<EditTour daftarWisata={daftarWisata} setDaftarWisata={setDaftarWisata} rincianWisata={rincianWisata}
						          setRincianWisata={setRincianWisata} />)}
				</div>
				<TourList daftarWisata={daftarWisata} setDaftarWisata={setDaftarWisata} rincianWisata={rincianWisata}
				          setRincianWisata={setRincianWisata} />
			</main>
			
			<Footer />
		</>
	)
}

