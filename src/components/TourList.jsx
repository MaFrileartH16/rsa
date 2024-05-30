export const TourList = (props) => {
	const handleDelete = (index) => {
		const wisata = [...props.daftarWisata];
		wisata.splice(index, 1);
		props.setDaftarWisata(wisata);
	};
	
	// const handleEdit = (index, updatedTour) => {
	// 	const wisata = [...props.daftarWisata];
	// 	wisata[index] = updatedTour;
	// 	props.setRincianWisata(wisata);
	// };
	
	return (
		<section className='tour-list'>
			<h2>Daftar Wisata</h2>
			
			<table>
				<thead>
				<tr>
					<th>Nama Tempat Wisata</th>
					<th>Lokasi Tempat Wisata</th>
					<th>Aksi</th>
				</tr>
				</thead>
				<tbody>
				{props.daftarWisata.map((tour, index) => (
					<tr key={index}>
						<td>{tour.nama}</td>
						<td>{tour.lokasi}</td>
						<td>
							<button onClick={() => props.setRincianWisata(tour)}>Ubah</button>
							<button onClick={() => handleDelete(index)}>Hapus</button>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</section>
	)
}

// TourList.propTypes = {
// 	daftarWisata: PropTypes.array,
// 	setDaftarWisata: PropTypes.func,
// 	// rincianWisata: PropTypes.object,
// 	// setRincianWisata: PropTypes.func.isRequired
// }
