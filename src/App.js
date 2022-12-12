import React from "react";
import Modal from "./Components/UI/Modal";
import Image from "./Components/Design/Image";

import qrCodeImage from "./Assets/image-qr-code.png";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Modal>
                <Image src={qrCodeImage} alt="qr code" />
                <h1>Improve your front-end skills by building projects</h1>
				<p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </Modal>
        </div>
    );
}

export default App;
