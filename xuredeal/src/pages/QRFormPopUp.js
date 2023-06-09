import React, { useState, useEffect } from 'react';
import './QRFormPopUp.css';
import scan from './img/scan.png';
import { Link } from "react-router-dom";
const QRFormPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [qrCode, setQRCode] = useState(null);

    const openPopup = () => {
        setIsFirstModalOpen(false); // Close the first modal
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setQRCode(null);
    };
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);


    const handleScan = (e) => {
        // Handle QR code scanning logic here
        const scannedQRCode = e.target.value;
        setQRCode(scannedQRCode);
    };

    const handleUpload = (e) => {
        // Handle QR code upload logic here
        const uploadedQRCode = e.target.files[0];
        // Perform necessary operations with the uploaded QR code
        setQRCode(uploadedQRCode);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        authenticate: '',
    });

    const handleOpenModal = () => {
        setIsFirstModalOpen(false);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here
        console.log(formData);
        // Reset form fields
        setFormData({
            authenticate: '',
        });
        // Close the modal
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showPopup]);
    return (
        <div>
            <a href="#" data-after="Authenticate" onClick={openPopup} style={{ fontFamily: 'Inter' }}>Authenticate</a>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>
                            &times;
                        </span>
                        <h2 style={{ fontFamily: 'Inter', color: 'white' }}>QR Code Form</h2>
                        <label style={{ fontFamily: 'Inter', color: 'white' }}>
                            Scan QR Code:
                            <br />
                            {/* <input type="text" onChange={handleScan} /> */}
                            <img src={scan} alt="Image Description" style={{ width: '100px' }} />
                        </label>
                        <label style={{ fontFamily: 'Inter', color: 'white' }}>
                            Upload QR Code:
                            <input type="file" accept="image/*" onChange={handleUpload} />
                        </label>
                        <div>
                            <a href="#" onClick={handleOpenModal} style={{ fontFamily: 'Inter' }}>Item Code</a>
                            {/* <button type="submit" style={{ fontFamily: 'Inter' }}> <Link to="/Authenticate" >SUBMIT </Link></button> */}
                            <a href="#" onClick={handleOpenModal} style={{ fontFamily: 'Inter', paddingRight: '6%', paddingTop: '3%' }}><Link to="/Authenticate" >SUBMIT </Link></a>
                            {isModalOpen && (
                                <div className="modal">
                                    <div className="modal-content">
                                        <span className="close" onClick={handleCloseModal}>&times;</span>
                                        <form onSubmit={handleSubmit}>
                                            <h4 style={{ fontFamily: 'Inter', color: 'white' }}>Authenticate your item   </h4>
                                            <input type="text" name="authenticate" value={formData.authenticate} onChange={handleChange} placeholder="Enter Item Code" required style={{ fontFamily: 'Inter' }} />
                                            <button type="submit" style={{ fontFamily: 'Inter' }}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="result">
                            {qrCode && (
                                <div>
                                    <h3 style={{ fontFamily: 'Inter' }}>QR Code Result:</h3>
                                    <p>{qrCode}</p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QRFormPopup;
