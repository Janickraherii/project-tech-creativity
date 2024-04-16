import React, { useState, useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import pdp from '../assets/pdp.png';
import icon1 from '../assets/majesticons_folder-line.svg';
import icon2 from '../assets/majesticons_settings-cog-line.png';
import icon3 from '../assets/quill_paper.svg';
import icon4 from '../assets/Vector.svg';

function Profile() {
    const [user, setUser] = useState(null);
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const fileInputRef = useRef(null); // Déclarez la référence
    const userEmail = "t@gmail.com"; 

    useEffect(() => {
        // Appel à votre API pour récupérer les données de tous les utilisateurs
        fetch('http://localhost:4000/api/users')
            .then(response => response.json())
            .then(data => {
                // Filtrer les données pour trouver l'utilisateur correspondant à l'e-mail
                const currentUser = data.find(user => user.email === userEmail);
                // Mettre à jour l'état de l'utilisateur avec les données filtrées
                setUser(currentUser);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };
    
    return (
        <>
            <Header />
            <div className='flex justify-center items-center flex-col relative mt-10'>
                <button onClick={handleBrowseClick} className="z-10">Parcourir...</button>
                <input ref={fileInputRef} type="file" onChange={handleImageUpload} style={{ display: 'none' }} accept="image/*" />
                <div className='absolute top-0 w-5/6 h-[50vh] rounded-3xl flex flex-row mt-[-20px]'                     
                style={{ backgroundImage: `url(${coverImageUrl || pdp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <div className="h-32 w-32 rounded-full overflow-hidden border border-[#2BCCC0] border-gradient" style={{ zIndex: '1' }}>
                                <img src={pdp} alt="Photo de profil" className="w-full h-full object-cover"  style={{ zIndex: '1' }} />
                            </div>
                            {user && (
                                <div className='flex flex-col z-10 ml-10 space-y-7 text-[#2BCCC0]  font-bold text-3xl'>
                                <p className='text-black'> {user.firstname} {user.lastname}</p>
                                <p className='text-black'>Nombre de votes : {user.userVote}</p>
                                </div>
                            )}
                            </div>
                    <div className="absolute inset-x-0 bottom-0 flex  justify-center">
                        <div className="w-full h-24 bg-white bg-opacity-25 rounded-b-3xl backdrop-blur-sm shadow-lg"></div>
                    </div>
                    
                </div>
            </div>
            <div className="absolute bottom-20 space-x-10 w-full flex justify-between left-2 right-2 mx-auto max-w-screen-lg mt-10">
  <div className="flex items-center justify-center w-1/5 h-40 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
    <img src={icon1} alt="icon1" className="w-14" />
    <p className="text-[#2BCCC0] p-2 text-center"> Historique </p>
  </div>
  
  <div className="flex items-center justify-center w-1/5 h-40 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
    <img src={icon3} alt="icon3" className="w-14" />
    <p className="text-[#2BCCC0] p-4 py-2 text-center"> 
    <Link to="/privacy">Politique de confidentialité </Link> </p>
  </div>
  <div className="flex items-center justify-center w-1/5 h-40 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
    <img src={icon4} alt="icon4" className="w-14" />
    <p className="text-[#2BCCC0] p-2 text-center">
        <Link to="/contactus">Nous-contactez</Link>
    </p>
  </div>
</div>

            <Footer />
        </>
    );
}

export default Profile;
