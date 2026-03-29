import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function DummyProfile() {
  const profileData = {
    namaLengkap: "Dummy Dummy",
    kelas: "- - -",
    prodi: "-",
    fakultas: "-",
    domisili: "Malang, Jawa Timur",
    fotoUrl: "https://imgs.search.brave.com/mDztPWayQWWrIPAy2Hm_FNfDjDVgayj73RTnUIZ15L0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc",
    tentangDiri: "Halo! Saya Dummy.",
    email: "example@gmail,com", 
    status: "Open to Work" 
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="bg-white rounded-t-2xl shadow-sm border border-slate-100 overflow-hidden mb-6 relative">
          <div className="h-48 md:h-60 bg-gradient-to-r from-slate-900 to-slate-700 w-full relative">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjBoMjB2MjBIMjBWMjB6TTAgMjBoMjB2MjBIMFYyMHoyMCAwaDIwdjIwSDIwVjB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          </div>

          <div className="px-8 md:px-12 pb-10 relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              
              {/* SISI KIRI*/}
              <div className="flex flex-col">
                <div className="relative -mt-20 md:-mt-24 mb-6 inline-block">
                  <img 
                    src={profileData.fotoUrl} 
                    alt={profileData.namaLengkap} 
                    className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-8 border-white shadow-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tighter">
                    {profileData.namaLengkap}
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-700 font-medium">
                    Future Web3 Developer
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-slate-500 font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {profileData.domisili}
                  </div>
                </div>
              </div>

              {/* SISI KANAN*/}
              <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-blue-700 text-sm font-bold uppercase tracking-wider">{profileData.status}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-sm font-medium">{profileData.email}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-3 border-b border-slate-50 pb-4">
                Tentang Diri
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                {profileData.tentangDiri}
              </p>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-3 border-b border-slate-50 pb-4">
                 Aktivitas Terkini
              </h2>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition duration-300">
                <div className="bg-slate-950 text-white p-3 rounded-xl font-bold text-lg">RA</div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-950">Project Data Analisis</h4>
                  <p className="text-sm text-slate-600 font-medium">Karyawan Perusahaan X Tahun 2025</p>
                  <p className="text-slate-700 mt-2 text-sm leading-relaxed text-justify">
                    Mengunakan library pandas untuk menganalisi data Karyawan pada perusahaan X.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-950 mb-6">Pendidikan</h3>
              <div className="space-y-5">
                {[
                  { label: "Institusi", value: profileData.kelas.split(' - ')[0] },
                  { label: "Program Studi", value: profileData.prodi },
                  { label: "Fakultas", value: profileData.fakultas },
                  { label: "Kelas", value: profileData.kelas.split(' - ')[1] }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                    <p className="font-semibold text-slate-800 text-base group-hover:text-blue-600 transition-colors">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-950 mb-6">Keahlian Utama</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Javascript', 'PHp', 'Mathlab'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-[11px] font-bold border border-slate-200 uppercase tracking-tight">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        <footer className="mt-12 py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[10px] tracking-widest uppercase font-bold">
           <p>&copy; 2026 Kelompok 2 T2B</p>
           <p>Powered by React & Tailwind CSS v4.2</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DummyProfile />} />
      
      </Routes>
    </Router>
  );
}

export default App;
