import React from 'react';

const Beranda = () => {
  return (
    <div className="bg-gradient-to-r from-[#d7f1f5] to-[#51c7d6] w-full h-screen flex flex-col">
      <div className="flex flex-row items-center justify-center flex-1">
        <div className="flex-1 p-8">
          <h1 className='font-bold text-4xl'>
            PaDI UMKM Hadir Sebagai Satu <br />
            Solusi Bisnis bagi UMKM, BUMN dan Pemerintah.
          </h1>
          <p className='font-normal text-xs mt-4'>
            Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun <br />
            Swasta untuk mendapatkan transaksi dengan harga dan kualitas terbaik.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="./assets/home.jpg" alt="Benefit" className="w-2/4 h-auto object-contain" />
        </div>
      </div>
      <footer className="bg-gray-200 text-black text-center py-4">
        <p>&copy;2022-2025 Pasar Digital UMKM Indonesia</p>
      </footer>
    </div>
  );
};

export default Beranda;
