import {useEffect, useState} from 'react';

export const EditTour = (props) => {
	const [nama, setNama] = useState(props.rincianWisata ? props.rincianWisata.nama : '');
	const [lokasi, setLokasi] = useState(props.rincianWisata ? props.rincianWisata.lokasi : '');
	
	useEffect(() => {
		setNama(props.rincianWisata ? props.rincianWisata.nama : '');
		setLokasi(props.rincianWisata ? props.rincianWisata.lokasi : '');
	}, [props.rincianWisata]);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const updatedDaftarWisata = props.daftarWisata.map(tour =>
			tour === props.rincianWisata ? {nama, lokasi} : tour
		);
		props.setDaftarWisata(updatedDaftarWisata);
		props.setRincianWisata(null)
		setNama('');
		setLokasi('');
	};
	
	return (
		<section className='edit-tour'>
			<h2>Ubah Wisata</h2>
			
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='nama'>Nama Tempat Wisata</label>
					<input type='text' id='nama' name='nama' value={nama} onChange={(e) => setNama(e.target.value)} />
				</div>
				
				<div className='form-group'>
					<label htmlFor='lokasi'>Lokasi Tempat Wisata</label>
					<input type='text' id='lokasi' name='lokasi' value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
				</div>
				
				<button type='submit'>Ubah</button>
				<button onClick={(e) => {
					e.preventDefault();
					props.setRincianWisata(null)
				}}>Batal
				</button>
			</form>
		</section>
	);
};
