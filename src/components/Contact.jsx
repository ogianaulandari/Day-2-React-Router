// src/components/About.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col ">
      <div className="flex flex-col items-center justify-center flex-1 p-8">
        <div className=" mb-8">
          <h1 className="text-4xl font-bold text-center">Hubungi Kami</h1>
          <p className="text-gray-600 text-center">
            Memiliki pertanyaan lebih lanjut seputar PaDI UMKM?<br/>
            Silahkan menghubungi Kami secara langsung.</p>
        </div>

        <div className="flex justify-center space-x-8">
          
          <div className="border border-gray-500 rounded-lg p-6 text-left w-96">
            <h2 className="text-xl font-semibold mb-4">Layanan Informasi Pengguna</h2>
            <h3 className="text-sm font-semibold">Email</h3>
            <p className="text-gray-600 text-xs mb-4">
              cs@padiumkm.id
            </p>
            <h3 className="text-sm font-semibold">Whatsapp</h3>
            <p className="text-gray-600 text-xs mb-4">
              +62 812 9000 7820
            </p>
            <h3 className="text-sm font-semibold">Senin-Jumat | 08.00 - 17.00 WIB</h3>
          </div>
          <div className="border border-gray-500 rounded-lg p-6 text-left w-96">
            <h2 className="text-xl font-semibold mb-4">Kantor Kami</h2>
            <h3 className="text-sm font-semibold">PaDI UMKM Headquarters<br />Gedung Telkom Direktorat Business aand Technology</h3>
            <p className="text-gray-600 text-xs">
              Jln. Prof. Dr. Soepomo No. 139. Jakarta Selatan, DKI Jakarta, 12810 Indonesia
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 text-black text-center py-4">
        <p>&copy;2022-2025 Pasar Digital UMKM Indonesia</p>
      </footer>
    </div>
  );
};

export default Contact;
