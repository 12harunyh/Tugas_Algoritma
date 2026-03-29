import React from 'react';

function ProfileAbdullah() {
  const profileData = {
    namaLengkap: "Abdullah Tabo",
    tagline: "IT Student | Aspiring UI/UX Designer",
    domisili: "Malang, Jawa Timur",
    // Link avatar otomatis menggunakan namamu
    fotoUrl: "https://ui-avatars.com/api/?name=Abdullah+Tabo&background=0f172a&color=fff&size=256",
    tentangDiri: "Halo! Saya Abdullah, seorang mahasiswa Teknologi Informasi di Universitas Brawijaya dengan minat mendalam pada desain antarmuka (UI) dan pengalaman pengguna (UX). Saya senang menggabungkan logika pemrograman yang saya pelajari di IT dengan estetika desain untuk menciptakan solusi digital yang fungsional dan menarik. Selain fokus pada desain, saya juga memiliki dasar yang kuat dalam pengembangan web dan analisis data.",
    institusi: "Universitas Brawijaya",
    prodi: "Teknologi Informasi",
    fakultas: "Ilmu Komputer", // Umumnya IT di UB berada di FILKOM
    email: "abdullahtabo03@gmail.com",
    status: "OPEN FOR COLLABORATION",
    skills: ["UI/UX Design", "Figma", "Web Development", "JavaScript", "Data Analysis"]
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header/Banner */}
        <div className="h-40 sm:h-52 w-full bg-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)' }}></div>
        </div>

        {/* Profile Info */}
        <div className="px-6 sm:px-10 pb-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="flex flex-col">
              <div className="-mt-16 sm:-mt-20 mb-4 z-10">
                <img 
                  src={profileData.fotoUrl} 
                  alt="Foto Profil Abdullah" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg object-cover bg-white"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {profileData.namaLengkap}
              </h1>
              <p className="text-lg text-slate-600 font-medium mt-1">
                {profileData.tagline}
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-slate-500 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {profileData.domisili}
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex flex-col gap-3 md:items-end w-full md:w-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-blue-700 text-xs font-bold tracking-wider">{profileData.status}</span>
              </div>
              <div className="inline-flex items-center gap-2 text-slate-500 text-sm px-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {profileData.email}
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 sm:px-10 py-10 bg-white">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Tentang Diri</h2>
              <p className="text-slate-600 leading-relaxed text-justify">
                {profileData.tentangDiri}
              </p>
            </div>
            
            {/* Tambahan Bagian Skills agar lebih UI/UX friendly */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Keahlian</h2>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-800 text-white text-xs rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Pendidikan</h2>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Institusi</p>
                <p className="text-slate-800 font-medium">{profileData.institusi}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Program Studi</p>
                <p className="text-slate-800 font-medium">{profileData.prodi}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Fakultas</p>
                <p className="text-slate-800 font-medium">{profileData.fakultas}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAbdullah;