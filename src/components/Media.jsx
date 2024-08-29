// src/components/About.js
import React from 'react';

const Media = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col ">
      <div className="flex flex-col items-center justify-center flex-1 p-8">
        <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Media</h1>
          <p className="text-gray-600 text-center">
          Informasi Seputar PaDI UMKM </p>
        </div>

        <div className="flex justify-center space-x-8">
        
          <div className="border border-gray-500 rounded-lg p-8 text-center w-80">
            <img src="./assets/trip.svg" alt="Tripod" className="w-full h-36 object-cover" />
              <div className="p-4">
                <h2 className="text-sm font-semibold mb-4" style={{ textAlign: 'justify' }}>Mengenal Jenis Tripod dan Masing-Masing Kelebihannya</h2>
                  <p className="text-gray-600 text-xs" style={{ textAlign: 'justify' }}>
                    Tripod adalah komponen penting dalam dunia fotografi untuk memudahkan Anda dalam meletakkan kamera agar tidak mudah goyang.
                  </p>
              </div>
          </div>
          <div className="border border-gray-500 rounded-lg p-8 text-center w-80">
            <img src="./assets/camera.jpg" alt="Camera" className="w-full h-36 object-cover" />
              <div className="p-4">
                <h2 className="text-sm font-semibold mb-4" style={{ textAlign: 'justify' }}>Mengenal Jenis Kamera dan Masing-Masing Kelebihannya</h2>
                  <p className="text-gray-600 text-xs" style={{ textAlign: 'justify' }}>
                    Kamera menjadi kebutuhan penting untuk menjepret gambar maupun merekam video dengan hasil yang mumpuni.
                  </p>
              </div>
          </div>
          <div className="border border-gray-500 rounded-lg p-8 text-center w-80">
            <img src="./assets/portrait.jpg" alt="Handphone" className="w-full h-36 object-cover" />
              <div className="p-4">
                <h2 className="text-sm font-semibold mb-4" style={{ textAlign: 'justify' }}>3 Rekomendasi Handphone yang Bisa Anda Beli</h2>
                  <p className="text-gray-600 text-xs" style={{ textAlign: 'justify' }}>
                    Handphone menjadi kebutuhan penting untuk komunikasi. Dulunya, handphone hanya bisa digunakan untuk telepon maupun SMS.
                  </p>
              </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 text-black text-center py-4">
        <p>&copy;2022-2025 Pasar Digital UMKM Indonesia</p>
      </footer>
    </div>
  );
};

export default Media;
