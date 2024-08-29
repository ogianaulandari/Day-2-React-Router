import React from 'react';

const About = () => {
  return (
    <div className="bg-white w-full h-screen flex flex-col">
      <div className="flex flex-row justify-center flex-1">
        <div className="flex-1 p-10 max-w-lg">
        <h1 className="font-bold text-4xl mb-4">
            Visi Kami 
          </h1>
          <p className="text-sm mb-8">
            Menjadi ekosistem digital unggulan UMKM di seluruh Indonesia.
          </p>
          <h1 className="font-bold text-4xl mb-4">
            Misi Kami 
          </h1>
          <ul className="list-disc list-inside text-sm text-left mx-auto max-w-xl">
            <li>Meningkatkan kualitas produk dan layanan UMKM.</li>
            <li>Memperluas akses pasar untuk UMKM melalui platform digital.</li>
            <li>Menghubungkan UMKM dengan perusahaan BUMN dan swasta.</li>
            <li>Mendorong inovasi dan daya saing UMKM di pasar global.</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="./assets/misi.jpg" alt="Benefit" className="w-3/4 h-auto object-contain" />
        </div>
      </div>
      <footer className="bg-gray-200 text-black text-center py-4">
        <p>&copy;2022-2025 Pasar Digital UMKM Indonesia</p>
      </footer>
    </div>
  );
};

export default About;
