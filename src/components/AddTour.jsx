import {useState} from 'react';

export const AddTour = (props) => {
	const [nama, setNama] = useState('');
	const [lokasi, setLokasi] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		props.setDaftarWisata([...props.daftarWisata, {nama, lokasi}]);
		setNama('');
		setLokasi('');
	};
	
	return (
		<section className='add-tour'>
			<h2>Tambah Wisata</h2>
			
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='nama'>Nama Tempat Wisata</label>
					<input type='text' id='nama' name='nama' value={nama} onChange={(e) => setNama(e.target.value)} />
				</div>
				
				<div className='form-group'>
					<label htmlFor='lokasi'>Lokasi Tempat Wisata</label>
					<input type='text' id='lokasi' name='lokasi' value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
				</div>
				
				<button type='submit'>Tambah</button>
			</form>
		</section>
	);
};
