document.addEventListener("DOMContentLoaded", () => {
    // Logika Hamburger Menu (Garis Tiga)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksList = document.getElementById('nav-links');

    if (mobileMenu && navLinksList) {
        // Toggle menu saat ikon hamburger diklik
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation(); // Mencegah event klik bocor
            navLinksList.classList.toggle('active');
            
            // Ubah ikon dari garis tiga (bars) ke tanda silang (xmark)
            const icon = mobileMenu.querySelector('i');
            if (navLinksList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Menutup menu secara otomatis jika salah satu link menu diklik
        const navItems = navLinksList.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinksList.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });

        // Menutup menu secara otomatis saat mengklik layar di luar menu
        window.addEventListener('click', function(e) {
            if (navLinksList.classList.contains('active') && !e.target.closest('#nav-links') && !e.target.closest('#mobile-menu')) {
                navLinksList.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Logika Klik untuk Dropdown Contact Me
    const contactBtn = document.getElementById('contactBtn');
    const contactDropdown = document.getElementById('contactDropdown');

    if (contactBtn && contactDropdown) {
        contactBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Mencegah klik bocor ke background
            contactDropdown.classList.toggle('show');
        });
    }

    // Menutup dropdown otomatis jika klik sembarang di luar tombol
    window.addEventListener('click', function(e) {
        if (contactDropdown && contactDropdown.classList.contains('show')) {
            if (!e.target.closest('.dropdown-wrapper')) {
                contactDropdown.classList.remove('show');
            }
        }
    });

    // Console Log Sapaan Interaktif
    console.log("%c Halo, Selamat datang di Portofolio Dimas Surya Saputra! ", "background: #00f0ff; color: #0a0e17; font-weight: bold; padding: 4px 8px; border-radius: 4px;");

    // --- Database Terjemahan Bahasa (ID & EN) Langsung di dalam JS (Bebas CORS) ---
    const translations = {
        "id": {
            "nav": {
                "about": "Profil Saya",
                "education": "Pendidikan",
                "experience": "Pengalaman",
                "skills": "Keahlian",
                "certificates": "Sertifikat",
                "projects": "Projek",
                "contact": "Kontak"
            },
            "hero": {
                "badge": "PROFIL SAYA",
                "title_prefix": "Halo semua! Saya",
                "name": "Dimas Surya Saputra",
                "description": "Saya lulusan Teknik Komputer & Jaringan, dan saat ini saya sebagai mahasiswa PNJ Teknik Telekomunikasi yang gemar mempelajari hal-hal yang baru dan mengeksplorasi teknologi, khususnya di bidang telekomunikasi. Saya memiliki pengalaman menggunakan aplikasi software Cisco Packet Tracer, Winbox, PuTTY, Wireshark, Virtual Studio Code, Arduino IDE, Virtualbox, Multisim, EasyEDA, KiCad, Protel, AutoCAD, SketchUp, Axence NetTools, CST Studio Suite, MATLAB, dan Radio Mobile, baik dalam tugas proyek akademik maupun kegiatan organisasi. Saya mampu bekerja sama dalam tim dengan baik, mengelola waktu secara efektif, dan berpikir secara logis dalam menyelesaikan suatu masalah.",
                "btn_cv": "Unduh CV Saya",
                "btn_contact": "Hubungi Saya",
                "terminal_title": "Saya memiliki minat di bidang :",
                "terminal_content": [
                    "IT Support, Teknik Komputer & Jaringan, Teknisi, Perakitan Perangkat Keras Komputer, Mikrotik, IoT (Arduino/ESP32), Teknik Telekomunikasi, dan Keamanan Siber."
                ]
            },
            "education": {
                "title": "Pendidikan",
                "btn_more": "Tampilkan Lebih Banyak... <i class='fa-solid fa-chevron-down'></i>",
                "btn_less": "Sembunyikan <i class='fa-solid fa-chevron-up'></i>",
                "items": [
                    {
                        "logo": "All Dokumen/img/pnj.png",
                        "duration": "2024 - Sekarang",
                        "institution": "Politeknik Negeri Jakarta (PNJ) - Depok",
                        "detail_title": "D3 - Telekomunikasi | IPK Sementara : 3.50 / 4.00",
                        "points": [
                            "Aktif mempelajari perancangan jaringan FTTx, perancangan jaringan lokal maupun seluler, sistem telekomunikasi wired dan wireless, pemrosesan sinyal analog dan digital, serta pengembangan perangkat IoT berbasis mikrokontroler, baik Arduino, ESP, maupun Raspberry Pi.",
                            "Simulasi & fabrikasi antena kawat/alumunium (Horn) dan mikrostrip.",
                            "Aktif mengikuti organisasi Kelompok Studi Mahasiswa (KSM Psychorobotic), baik anggota maupun pengurus."
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/smkn7jkt.png",
                        "duration": "2021 - 2024 (LULUS)",
                        "institution": "SMK Negeri 7 Jakarta - Jakarta Timur",
                        "detail_title": "Nilai Rata-Rata Raport : 85.11",
                        "points": [
                            "Menyelesaikan berbagai modul praktikum dan simulasi jaringan (LAN, MAN, WAN, VLAN, PBX, Mikrotik).",
                            "Menyelesaikan modul instalasi di OS Debian (Web Server, Web Hosting, Ansible, dll).",
                            "Mempelajari dan menyelesaikan modul pemrograman web HTML, CSS, dan JavaScript.",
                            "Meraih Juara Harapan II lomba Cyber Security (Bersama/Tim) tingkat Jakarta Timur 1.",
                            "Mengikuti Sertifikasi Ready4Sec yang diselenggarakan oleh InfraDigital Foundation (IDF) x Microsoft.",
                            "Membuat perancangan dan implementasi jaringan komputer."
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/smpn117jkt.png",
                        "duration": "2018 - 2021 (LULUS)",
                        "institution": "SMP Negeri 117 Jakarta - Jakarta Timur",
                        "detail_title": "Nilai Rata-Rata Raport : 91.5",
                        "points": [
                            "Aktif mengikuti pelajaran di sekolah"
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/sdnpb04.png",
                        "duration": "2012 - 2018 (LULUS)",
                        "institution": "SDN Pondok Bambu 04 - Jakarta Timur",
                        "detail_title": "Nilai Rata-Rata Raport : 80.20 | Nilai Rata-Rata US : 81.30",
                        "points": [
                            "Aktif mengikuti pelajaran di sekolah.",
                            "Meraih Juara 1 Nilai UN/USBN Tertinggi se SDN Pondok Bambu 04 dengan nilai NEM : 25.64 dan nilai rata-rata UN : 85.46."
                        ]
                    }
                ]
            },
            "experience": {
                "title": "Pengalaman Kerja",
                "items": [
                    {
                        "logo": "All Dokumen/img/apindo2.png",
                        "company": "PT. Angkasa Pura Indonesia (Halim PK)",
                        "role": "MAGANG (PKL) | IT Facility Maintenance",
                        "duration": "3 Agustus 2026 - Sekarang",
                        "jobdesk_title": "Deskripsi Pekerjaan :",
                        "points": [
                            "Melakukan pengcekan & pemeliharaan harian fasilitas elektronika, IT dan perangkat penunjang operasional bandara Halim PK.",
                            "Mendukung pengecekan jaringan dan troubleshooting infrastruktur IT harian.",
                            "Melakukan pengecekan & konfigurasi resolusi kamera CCTV.",
                            "Melakukan pengecekan & memperbaiki X-Ray, WTMD, HHMD, FIDS, PABX, dan CCTV di area bandara Halim PK.",
                            "Menyiapkan peralatan audio (sistem suara) untuk kegiatan di area bandara Halim PK.",
                            "Mengerjakan projek sistem Flightradar24 Feeder berbasis Raspberry Pi untuk mengimpelementasi radar pesawat di bandara.",
                            "Membongkar pasang komputer karyawan di Gedung Teknik.",
                            "Melakukan pendataan nomor serial (S/N) peralatan elektronika & IT di bandara dengan Spreadsheet (Excel)."
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/zyrex.png",
                        "company": "PT. Zyrexindo Mandiri Buana Tbk.",
                        "role": "FREELANCE / KERJA HARIAN | Teknik Perakitan",
                        "duration": "28 - 31 Desember 2025",
                        "jobdesk_title": "Deskripsi Pekerjaan :",
                        "points": [
                            "Merakit hardware dan memproduksi pada perangkat laptop sesuai dengan prosedur/SOP serta pengecekan QC (Quality Control) yang sangat ketat.",
                            "Mampu mengerjakan tugas/task yang bersifat repetitif, termasuk pemasangan komponen, penyambungan kabel, serta teknik packaging agar tetap memenuhi target produksi harian.",
                            "Mampu mengoperasikan peralatan khusus dan obeng elektrik dengan benar dan hati-hati guna mencegah kerusakan pada komponen elektronik yang sensitif.",
                            "Mampu melakukan pemeriksaan pada unit yang dirakit sesuai dengan prosedur dengan tingkat ketelitian yang tinggi guna untuk mengidentifikasi kecacatan/ketidaksesuaian sebelum masuk ke tahap produksi selanjutnya.",
                            "Mampu bekerja secara disiplin, fokus, tingkat presisi yang tinggi, dan cepat, serta memastikan terciptanya ruang kerja yang aman dan rapi."
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/kemendikbud.png",
                        "company": "Kemendikbudristek (Kementerian Pendidikan, Budaya, Riset, dan Teknologi)",
                        "role": "PKL | IT Support",
                        "duration": "3 Oktober 2022 - 31 Maret 2023",
                        "jobdesk_title": "Deskripsi Pekerjaan :",
                        "points": [
                            "Memperbaiki laptop dan PC karyawan.",
                            "Menginstalasi OS Windows di laptop dan PC karyawan.",
                            "Menginstalasi OS di Server.",
                            "Mengkonfigurasi laptop atau PC ke printer karyawan dan staff.",
                            "Mengkonfigurasi jaringan server dan CCTV.",
                            "Mengkonfigurasi setup monitor di Ruang Sidang.",
                            "Menginstalasi tools seperti Microsoft Office, Nitro (PDF Reader), dan driver perangkat (driver untuk printer, atau perangkat lainnya pada laptop dan PC)."
                        ]
                    }
                ]
            },
            "skills": {
                "title": "Keahlian Saya",
                "items": [
                    {
                        "title": "Teknik Komputer dan Jaringan",
                        "tools": [
                            { "name": "Cisco Packet Tracer", "logo": "/All Dokumen/img/cisco.png" },
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Trixbox", "logo": "/All Dokumen/img/trixbox.png" },
                            { "name": "Debian", "logo": "/All Dokumen/img/debian.png" },
                            { "name": "VirtualBox", "logo": "/All Dokumen/img/virtualbox.png" },
                            { "name": "Windows", "logo": "/All Dokumen/img/windows.png" },
                            { "name": "PuTTY", "logo": "/All Dokumen/img/putty.png" },
                            { "name": "TP-Link", "logo": "/All Dokumen/img/tplink.png" }
                        ]
                    },
                    {
                        "title": "Teknik Telekomunikasi",
                        "tools": [
                            { "name": "Axcence NetTools", "logo": "/All Dokumen/img/nettools.png" },
                            { "name": "Radio Mobile", "logo": "/All Dokumen/img/radiomobile.png" },
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Google Earth", "logo": "/All Dokumen/img/gearthpro.png" },
                            { "name": "Fiber Optik", "logo": "/All Dokumen/img/fo.png" },
                            { "name": "Antena", "logo": "/All Dokumen/img/antenna.png" },
                            { "name": "Jaringan Lokal (LAN, MAN, WAN, VLAN)", "logo": "fa-globe" }
                        ]
                    },
                    {
                        "title": "Web Server & Pemrograman",
                        "tools": [
                            { "name": "Debian", "logo": "/All Dokumen/img/debian.png" },
                            { "name": "Ubuntu", "logo": "/All Dokumen/img/ubuntu.png" },
                            { "name": "Apache2", "logo": "/All Dokumen/img/apache2.png" },
                            { "name": "HTML", "logo": "/All Dokumen/img/html.png" },
                            { "name": "CSS", "logo": "/All Dokumen/img/css.png" },
                            { "name": "JavaScript", "logo": "/All Dokumen/img/javascript.png" },
                            { "name": "Python", "logo": "/All Dokumen/img/python.png" }
                        ]
                    },
                    {
                        "title": "Pengalamatan IP Jaringan",
                        "tools": [
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Router", "logo": "fa-network-wired" },
                            { "name": "Access Point", "logo": "fa-wifi" },
                            { "name": "Komputer/Laptop", "logo": "fa-desktop" },
                            { "name": "Jaringan Lokal (LAN, MAN, WAN, VLAN)", "logo": "fa-globe" }
                        ]
                    },
                    {
                        "title": "Keamanan Siber",
                        "tools": [
                            { "name": "Cent OS", "logo": "/All Dokumen/img/centos.png" },
                            { "name": "Kali Linux", "logo": "/All Dokumen/img/kalilinux.png" },
                            { "name": "VirtualBox", "logo": "/All Dokumen/img/virtualbox.png" },
                            { "name": "PuTTY", "logo": "/All Dokumen/img/putty.png" }
                        ]
                    },
                    {
                        "title": "Routing & Switching",
                        "tools": [
                            { "name": "Cisco Packet Tracer", "logo": "/All Dokumen/img/cisco.png" },
                            { "name": "Cisco", "logo": "/All Dokumen/img/cisco2.png" },
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Debian", "logo": "/All Dokumen/img/debian.png" },
                            { "name": "Windows", "logo": "/All Dokumen/img/windows.png" },
                            { "name": "TP-Link", "logo": "/All Dokumen/img/tplink.png" },
                            { "name": "Tenda", "logo": "/All Dokumen/img/tenda.png" }
                        ]
                    },
                    {
                        "title": "Perencanaan Jaringan Telekomunikasi",
                        "tools": [
                            { "name": "Cisco", "logo": "/All Dokumen/img/cisco2.png" },
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Router", "logo": "fa-network-wired" },
                            { "name": "Access Point", "logo": "fa-wifi" },
                            { "name": "Fiber Optik", "logo": "/All Dokumen/img/fo.png" },
                            { "name": "Google Earth", "logo": "/All Dokumen/img/gearthpro.png" },
                            { "name": "Radio Mobile", "logo": "/All Dokumen/img/radiomobile.png" }
                        ]
                    },
                    {
                        "title": "Desain Elektronika, Desain PCB & Simulasi",
                        "tools": [
                            { "name": "Protel", "logo": "/All Dokumen/img/protel.png" },
                            { "name": "AutoCAD", "logo": "/All Dokumen/img/autocad.png" },
                            { "name": "SketchUp", "logo": "/All Dokumen/img/sketchup.png" },
                            { "name": "KiCad", "logo": "/All Dokumen/img/kicad.png" },
                            { "name": "EasyEDA", "logo": "/All Dokumen/img/easyeda.png" },
                            { "name": "CST Studio", "logo": "/All Dokumen/img/cst.png" }
                        ]
                    },
                    {
                        "title": "Mikrokontroler & IoT",
                        "tools": [
                            { "name": "Arduino", "logo": "/All Dokumen/img/arduino.png" },
                            { "name": "C++ (Arduino IDE)", "logo": "/All Dokumen/img/c++.png" },
                            { "name": "ESP32", "logo": "/All Dokumen/img/esp.png" },
                            { "name": "Raspberry Pi", "logo": "/All Dokumen/img/raspi.png" }
                        ]
                    },
                    {
                        "title": "Perakitan Perangkat Keras & Lunak",
                        "tools": [
                            { "name": "", "logo": "fa-microchip" },
                            { "name": "", "logo": "fa-screwdriver-wrench" },
                            { "name": "", "logo": "fa-desktop" }
                        ]
                    },
                    {
                        "title": "Pemrosesan Sinyal Digital",
                        "tools": [
                            { "name": "MATLAB", "logo": "/All Dokumen/img/matlab.png" }
                        ]
                    }
                ]
            },
            "certificates": {
                "title": "Sertifikat",
                "achievement_title": "Prestasi Saya",
                "training_title": "Pelatihan & Organisasi",
                "btn_preview": "Pratinjau Sertifikat",
                "btn_download": "Unduh Sertifikat",
                "btn_more": "Tampilkan Lebih Banyak... <i class='fa-solid fa-chevron-down'></i>",
                "btn_less": "Sembunyikan <i class='fa-solid fa-chevron-up'></i>",
                "achievements": [
                    {
                        "title": "Juara Harapan 2 - Lomba Cyber Security (Tingkat Jakarta Timur 1)",
                        "author": "oleh LKS SMK",
                        "duration": "Agustus 2023 | TERSERTIFIKASI",
                        "description": "Berhasil menyelesaikan modul LKS SMK instalasi dan konfigurasi web server sebagai pelindung dari serangan siber berbasis CentOS dan Kali Linux sebagai penyerang web server.",
                        "tags": ["Keamanan Siber", "Jaringan", "Instalasi & Konfigurasi"],
                        "file": "/All Dokumen/Sertifikat/Prestasi (Umum)/Dimas S - Sertifikat Juara Harapan II lomba CyberSec Jaktim 1.pdf",
                        "preview_link": "https://drive.google.com/file/d/1bsrUIav7aSGW0yQ_vrhnPiw7iSdNJi8i/view?usp=drive_link"
                    },
                    {
                        "title": "Sertifikat Magang/PKL Kemendikbudristek - IT Support",
                        "author": "oleh Kemendikbudristek",
                        "duration": "April 2023 | TERSERTIFIKASI",
                        "description": "Telah menyelesaikan program PKL di Inspektorat Jenderal (Itjen) Kemendikbudristek sebagai IT Support dengan predikat A",
                        "tags": ["IT Support", "Perangkat Keras & Lunak", "Instalasi & Konfigurasi"],
                        "file": "/All Dokumen/Sertifikat/Prestasi (Umum)/Dimas S - Sertifikat Piagam PKL Kmdikbud.pdf",
                        "preview_link": "https://drive.google.com/file/d/1MPIE2ikgIMMeC01GFFI6GJuvlL7-oOH5/view?usp=drive_link"
                    },
                    {
                        "title": "Sertifikat Kopetensi BNSP Teknik Komputer Jaringan",
                        "author": "oleh LSP SMK Negeri 7 Jakarta",
                        "duration": "Mei 2024 (berlaku 3 Tahun) | TERSERTIFIKASI",
                        "description": "Berhasil menyelesaikan modul BNSP tentang perencanaan dan membangun jaringan menggunakan Cisco Packet Tracer sebagai Denah dan Mikrotik sebagai bahan praktek uji. Sertifikat ini berstatus KOMPETEN.",
                        "tags": ["Jaringan", "Perencanaan Jaringan", "Mikrotik", "Cisco Packet Tracer", "Konfigurasi", "Jaringan Lokal Area", "Virtual Jaringan Lokal Area"],
                        "file": "/All Dokumen/Sertifikat/Prestasi (Umum)/Dimas S - Sertifikat BNSP.pdf",
                        "preview_link": "https://drive.google.com/file/d/1NlHu0E7Xv2R3w8bN5xMRUCZ6atmmWWlS/view?usp=drive_link"
                    },
                    {
                        "title": "Juara 1 Nilai UN/USBN Tertinggi se SDN Pondok Bambu 04",
                        "author": "oleh SDN Pondok Bambu 04",
                        "duration": "Juni 2018 | TERSERTIFIKASI",
                        "description": "Telah meraih prestasi juara 1 Nilai UN/USBN tertinggi se SDN Pondok Bambu 04 dengan nilai NEM : 25,64.",
                        "tags": ["UN", "USBN"],
                        "file": "/All Dokumen/Sertifikat/Prestasi (Umum)/Dimas S - Sertifikat USBN Juara 1.pdf",
                        "preview_link": "https://drive.google.com/file/d/1sv7BViMg_AfkRFsgeY5neBikXwNcNjwv/view?usp=drive_link"
                    }
                ],
                "trainings": [
                    {
                        "title": "Sertifikat Ready4Security Indonesia Training (Periode Agustus - September 2023)",
                        "author": "oleh InfraDigital Foundation (IDF) x Microsoft",
                        "duration": "September 2023 | TERSERTIFIKASI",
                        "description": "Telah mengikuti kegiatan seminar pelatihan program Ready4Security untuk persiapan mengikuti ujian Microsoft SC-200 yang diselenggarakan oleh IDF x Microsoft.",
                        "tags": ["Keamanan Siber", "Pelatihan", "IDF x Microsoft"],
                        "file": "/All Dokumen/Sertifikat/Pelatihan & Organisasi/Dimas S - Sertifikat IDF Training.pdf",
                        "preview_link": "https://drive.google.com/file/d/1-cDzat6mX0yurMI4UXWtgNhWHx_ipHPt/view?usp=drive_link"
                    },
                    {
                        "title": "Sertifikat MATLAB Onramp Training",
                        "author": "oleh MATLAB",
                        "duration": "April 2026 | TERSERTIFIKASI",
                        "description": "Mengikuti dan menyelesaikan modul sertifikasi pelatihan MATLAB Onramp untuk simulasi pemrosesan sinyal digital berbasis MATLAB.",
                        "tags": ["Pemrosesan Sinyal Digital", "Pelatihan", "MATLAB"],
                        "file": "/All Dokumen/Sertifikat/Pelatihan & Organisasi/Dimas S - Sertifikat MATLAB Training Onramp.pdf",
                        "preview_link": "https://drive.google.com/file/d/1zApQI3ikuzj5GtPjkgE5y7mtwSUVkxP_/view?usp=drive_link"
                    },
                    {
                        "title": "Sertifikat Keanggotaan Aktif di KSM Psychorobotic (Periode 2025)",
                        "author": "oleh KSM Psychorobotic",
                        "duration": "Juni 2026 | TERSERTIFIKASI",
                        "description": "Terlibat aktif dalam kegiatan keanggotaan dan kepengurusan di divisi Perlengkapan/Logistik di KSM Psychorobotic.",
                        "tags": ["KSM Psychorobotic", "Mikrokontroler", "ESP32", "Organisasi", "PNJ"],
                        "file": "/All Dokumen/Sertifikat/Pelatihan & Organisasi/Dimas S - Sertifikat Anggota Psycho.pdf",
                        "preview_link": "https://drive.google.com/file/d/1J1VhZTEkGHk9i_TjEK7s6mdXcfq3t188/view?usp=drive_link"
                    }
                ]
            },
            "projects": {
                "title": "Projek Saya",
                "items": [
                    { 
                        "title": "Sistem <i>Smart Doorlock</i> berbasis <i>ESP32</i> (Prototipe)", 
                        "description": "Berhasil membuat sistem <i>Smart Doorlock</i> berbasis <i>ESP32</i> dengan menggunakan sistem <i>RFID</i> dan <i>Keypad</i>. Projek ini masih bersifat prototipe. Sistem ini dapat membuka akses menggunakan kartu <i>RFID</i> ataupun PIN pada <i>Keypad</i>.", 
                        "tags": ["<i>Doorlock</i>", "<i>RFID</i>", "<i>Keypad</i>", "IoT", "<i>ESP32</i>", "KSM Psychorobotic"],
                        "images": ["/All Dokumen/Project/doorlock1.png", "/All Dokumen/Project/doorlock2.png", "/All Dokumen/Project/doorlock3.png"]
                    },
                    { 
                        "title": "Sistem <i>Smart Intelligent Trash Bin Monitoring</i> berbasis <i>ESP32</i> - <i>Project Based Learning (PBL)</i>", 
                        "description": "Menyelesaikan modul <i>PBL</i> tentang pembuatan sistem <i>Smart Intelligent Trash Bin Monitoring</i> berbasis <i>ESP32</i> untuk mengukur kapasitas tempat sampah dengan menggunakan <i>LoRa</i> sebagai pemancar sinyal (Tx) dan <i>USRP</i> sebagai penerima (Rx). <i>USRP</i> ini dikonfigurasi menggunakan perangkat lunak <i>GNU Radio</i>.", 
                        "tags": ["Tempat Sampah Pintar", "<i>PBL</i>", "<i>ESP32</i>", "<i>LoRa</i>", "<i>USRP</i>", "<i>GNU Radio</i>", "Kapasitas Sampah"],
                        "images": ["/All Dokumen/Project/pbl1.png", "/All Dokumen/Project/pbl2.png", "/All Dokumen/Project/pbl3.png", "/All Dokumen/Project/pbl4.png"]
                    }
                ]
            },
            "footer": {
                "phone": "WhatsApp",
                "email": "Gmail",
                "linkedin": "LinkedIn",
                "github": "GitHub",
                "copyright": "&copy; 2026 Dimas Surya Saputra - Portofolio"
            }
        },
        "en": {
            "nav": {
                "about": "My Profile",
                "education": "Education",
                "experience": "Experience",
                "skills": "Skills",
                "certificates": "Certificate",
                "projects": "Project",
                "contact": "Contact"
            },
            "hero": {
                "badge": "MY PROFILE",
                "title_prefix": "Hello everyone! I'm",
                "name": "Dimas Surya Saputra",
                "description": "I am a graduate of Computer & Network Engineering, and currently a Telecommunications Engineering student at Jakarta State Polytechnic (PNJ) who loves learning new things and exploring technology, especially in the field of telecommunications. I have experience using software applications such as Cisco Packet Tracer, Winbox, PuTTY, Wireshark, Virtual Studio Code, Arduino IDE, Virtualbox, Multisim, EasyEDA, KiCad, Protel, AutoCAD, SketchUp, Axence NetTools, CST Studio Suite, MATLAB, and Radio Mobile, both in academic project assignments and organizational activities. I am capable of working well in teams, managing time effectively, and thinking logically to solve problems.",
                "btn_cv": "Download My CV",
                "btn_contact": "Contact Me",
                "terminal_title": "I am interested in :",
                "terminal_content": [
                    "IT Support, Computer & Network Engineer, Technician, Computer Hardware Assembly, Mikrotik, IoT (Arduino/ESP32), Telecommunication Engineer, and Cyber Security."
                ]
            },
            "education": {
                "title": "Education",
                "btn_more": "Show More... <i class='fa-solid fa-chevron-down'></i>",
                "btn_less": "Hide <i class='fa-solid fa-chevron-up'></i>",
                "items": [
                    {
                        "logo": "All Dokumen/img/pnj.png",
                        "duration": "2024 - Present",
                        "institution": "Jakarta State Polytechnic (PNJ) - Depok",
                        "detail_title": "Associate Degree - Telecommunications Engineering | Current GPA : 3.50 / 4.00",
                        "points": [
                            "Actively studying FTTx network design, local and cellular network design, wired and wireless telecommunication systems, analog and digital signal processing, and microcontroller-based IoT device development using Arduino, ESP, and Raspberry Pi.",
                            "Simulation & fabricating of wire/aluminum (Horn) and microstrip antennas.",
                            "Active member and administrator in the Student Study Group (KSM) of Psychorobotic (KSM Psychorobotic) organization."
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/smkn7jkt.png",
                        "duration": "2021 - 2024 (GRADUATED)",
                        "institution": "SMK Negeri 7 Jakarta - East Jakarta",
                        "detail_title": "Average Report Grade : 85.11",
                        "points": [
                            "Completed various practical modules and network simulations (LAN, MAN, WAN, VLAN, PBX, Mikrotik).",
                            "Completed installation modules in Debian OS (Web Server, Web Hosting, Ansible, etc.).",
                            "Learned and completed HTML, CSS, and JavaScript web programming modules.",
                            "Achieved 2nd Runner-Up in the Cyber Security Competition (Team category) at East Jakarta 1 level.",
                            "Participated in the Ready4Sec Certification organized by InfraDigital Foundation (IDF) x Microsoft.",
                            "Designed and implemented computer networks."
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/smpn117jkt.png",
                        "duration": "2018 - 2021 (GRADUATED)",
                        "institution": "SMP Negeri 117 Jakarta - East Jakarta",
                        "detail_title": "Average Report Grade : 91.5",
                        "points": [
                            "Actively participated in school classes."
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/sdnpb04.png",
                        "duration": "2012 - 2018 (GRADUATED)",
                        "institution": "SDN Pondok Bambu 04 - East Jakarta",
                        "detail_title": "Average Report Grade : 80.20 | National Exam Average : 81.30",
                        "points": [
                            "Actively participated in school classes.",
                            "Achieved 1st Place for Highest National Exam Score at SDN Pondok Bambu 04 with a total score of 25.64 and average national exam score of 85.46."
                        ]
                    }
                ]
            },
            "experience": {
                "title": "Work Experience",
                "items": [
                    {
                        "logo": "All Dokumen/img/apindo2.png",
                        "company": "PT. Angkasa Pura Indonesia (Halim PK)",
                        "role": "INTERN | IT Facility Maintenance",
                        "duration": "August 3rd, 2026 - Present",
                        "jobdesk_title": "Jobdesk :",
                        "points": [
                            "Conduct daily checks and maintenance of electronic facilities, IT systems, and operational support equipment at Halim PK Airport.",
                            "Support network monitoring and daily IT infrastructure troubleshooting.",
                            "Perform checks and configure CCTV camera resolutions.",
                            "Inspect and repair X-Ray, WTMD, HHMD, FIDS, PABX, and CCTV systems in the Halim PK Airport area.",
                            "Prepare audio equipment (sound systems) for various events and activities at Halim PK Airport area.",
                            "Develop a Raspberry Pi-based Flightradar24 Feeder system project to implement aircraft radar monitoring at the airport.",
                            "Assemble, disassemble, and maintain employee computers in the Technic Building.",
                            "Record and manage serial number (S/N) inventory data for electronic and IT equipment at the airport using Spreadsheets (Excel)."
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/zyrex.png",
                        "company": "PT. Zyrexindo Mandiri Buana Tbk.",
                        "role": "FREELANCE / DAILY WORKER | Assembly Engineer",
                        "duration": "December 28th - 31st, 2025",
                        "jobdesk_title": "Jobdesk :",
                        "points": [
                            "Assembled hardware and laptops in accordance with procedures and strict Quality Control (QC) checks.",
                            "Capable of performing repetitive tasks, including component installation, cable connection, and packaging techniques to meet daily production targets.",
                            "Able to operate specialized equipment and electric screwdrivers correctly and carefully to prevent damage to sensitive electronic components.",
                            "Capable of inspecting assembled units according to procedures with high precision to identify defects or non-conformities before moving to the next production stage.",
                            "Able to work with discipline, focus, high precision, and speed while ensuring a safe and tidy workspace."
                        ]
                    },
                    {
                        "logo": "All Dokumen/img/kemendikbud.png",
                        "company": "Kemendikbudristek (Ministry of Education, Culture, Research, and Technology)",
                        "role": "INTERN | IT Support",
                        "duration": "October 3rd, 2022 - March 31st, 2023",
                        "jobdesk_title": "Jobdesk :",
                        "points": [
                            "Repaired employees laptops and PCs.",
                            "Installed Windows OS on employees laptops and PCs.",
                            "OS installation on servers.",
                            "Configured laptops or PCs to employees and staff printers.",
                            "Configured server networks and CCTV systems.",
                            "Configured monitor setups in the courtroom.",
                            "Tools installation such as Microsoft Office, Nitro (PDF Reader), and device drivers (printer drivers and other peripherals)."
                        ]
                    }
                ]
            },
            "skills": {
                "title": "My Skills",
                "items": [
                    {
                        "title": "Computer and Network Engineer",
                        "tools": [
                            { "name": "Cisco Packet Tracer", "logo": "/All Dokumen/img/cisco.png" },
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Trixbox", "logo": "/All Dokumen/img/trixbox.png" },
                            { "name": "Debian", "logo": "/All Dokumen/img/debian.png" },
                            { "name": "VirtualBox", "logo": "/All Dokumen/img/virtualbox.png" },
                            { "name": "Windows", "logo": "/All Dokumen/img/windows.png" },
                            { "name": "PuTTY", "logo": "/All Dokumen/img/putty.png" },
                            { "name": "TP-Link", "logo": "/All Dokumen/img/tplink.png" }
                        ]
                    },
                    {
                        "title": "Telecommunication Engineer",
                        "tools": [
                            { "name": "Axcence NetTools", "logo": "/All Dokumen/img/nettools.png" },
                            { "name": "Radio Mobile", "logo": "/All Dokumen/img/radiomobile.png" },
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Google Earth", "logo": "/All Dokumen/img/gearthpro.png" },
                            { "name": "Fiber Optic", "logo": "/All Dokumen/img/fo.png" },
                            { "name": "Antenna", "logo": "/All Dokumen/img/antenna.png" },
                            { "name": "Local Network (LAN, MAN, WAN, VLAN)", "logo": "fa-globe" }
                        ]
                    },
                    {
                        "title": "Web Server & Programming",
                        "tools": [
                            { "name": "Debian", "logo": "/All Dokumen/img/debian.png" },
                            { "name": "Ubuntu", "logo": "/All Dokumen/img/ubuntu.png" },
                            { "name": "Apache2", "logo": "/All Dokumen/img/apache2.png" },
                            { "name": "HTML", "logo": "/All Dokumen/img/html.png" },
                            { "name": "CSS", "logo": "/All Dokumen/img/css.png" },
                            { "name": "JavaScript", "logo": "/All Dokumen/img/javascript.png" },
                            { "name": "Python", "logo": "/All Dokumen/img/python.png" }
                        ]
                    },
                    {
                        "title": "Network IP Addressing",
                        "tools": [
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Router", "logo": "fa-network-wired" },
                            { "name": "Access Point", "logo": "fa-wifi" },
                            { "name": "PC/Laptop", "logo": "fa-desktop" },
                            { "name": "Local Network (LAN, MAN, WAN, VLAN)", "logo": "fa-globe" }
                        ]
                    },
                    {
                        "title": "Cyber Security",
                        "tools": [
                            { "name": "Cent OS", "logo": "/All Dokumen/img/centos.png" },
                            { "name": "Kali Linux", "logo": "/All Dokumen/img/kalilinux.png" },
                            { "name": "VirtualBox", "logo": "/All Dokumen/img/virtualbox.png" },
                            { "name": "PuTTY", "logo": "/All Dokumen/img/putty.png" }
                        ]
                    },
                    {
                        "title": "Routing & Switching",
                        "tools": [
                            { "name": "Cisco Packet Tracer", "logo": "/All Dokumen/img/cisco.png" },
                            { "name": "Cisco", "logo": "/All Dokumen/img/cisco2.png" },
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Debian", "logo": "/All Dokumen/img/debian.png" },
                            { "name": "Windows", "logo": "/All Dokumen/img/windows.png" },
                            { "name": "TP-Link", "logo": "/All Dokumen/img/tplink.png" },
                            { "name": "Tenda", "logo": "/All Dokumen/img/tenda.png" }
                        ]
                    },
                    {
                        "title": "Telecommunication Network Plaining",
                        "tools": [
                            { "name": "Cisco", "logo": "/All Dokumen/img/cisco2.png" },
                            { "name": "Mikrotik", "logo": "/All Dokumen/img/mikrotik.png" },
                            { "name": "Router", "logo": "fa-network-wired" },
                            { "name": "Access Point", "logo": "fa-wifi" },
                            { "name": "Fiber Optik", "logo": "/All Dokumen/img/fo.png" },
                            { "name": "Google Earth", "logo": "/All Dokumen/img/gearthpro.png" },
                            { "name": "Radio Mobile", "logo": "/All Dokumen/img/radiomobile.png" }
                        ]
                    },
                    {
                        "title": "Electronics Design, PCB Design & Simulation",
                        "tools": [
                            { "name": "Protel", "logo": "/All Dokumen/img/protel.png" },
                            { "name": "AutoCAD", "logo": "/All Dokumen/img/autocad.png" },
                            { "name": "SketchUp", "logo": "/All Dokumen/img/sketchup.png" },
                            { "name": "KiCad", "logo": "/All Dokumen/img/kicad.png" },
                            { "name": "EasyEDA", "logo": "/All Dokumen/img/easyeda.png" },
                            { "name": "CST Studio", "logo": "/All Dokumen/img/cst.png" }
                        ]
                    },
                    {
                        "title": "Microcontroller & IoT",
                        "tools": [
                            { "name": "Arduino", "logo": "/All Dokumen/img/arduino.png" },
                            { "name": "C++ (Arduino IDE)", "logo": "/All Dokumen/img/c++.png" },
                            { "name": "ESP32", "logo": "/All Dokumen/img/esp.png" },
                            { "name": "Raspberry Pi", "logo": "/All Dokumen/img/raspi.png" }
                        ]
                    },
                    {
                        "title": "Hardware & Software Assembly",
                        "tools": [
                            { "name": "", "logo": "fa-microchip" },
                            { "name": "", "logo": "fa-screwdriver-wrench" },
                            { "name": "", "logo": "fa-desktop" }
                        ]
                    },
                    {
                        "title": "Digital Signal Processing",
                        "tools": [
                            { "name": "MATLAB", "logo": "/All Dokumen/img/matlab.png" }
                        ]
                    }
                ]
            },
            "certificates": {
                "title": "Certificates",
                "achievement_title": "My Achievement",
                "training_title": "Training & Organization",
                "btn_preview": "Certificate Preview",
                "btn_download": "Certificate Download",
                "btn_more": "Show More... <i class='fa-solid fa-chevron-down'></i>",
                "btn_less": "Show Less <i class='fa-solid fa-chevron-up'></i>",
                "achievements": [
                    {
                        "title": "2nd Runner-Up - Cyber Security Competition (East Jakarta 1 Level)",
                        "author": "by LKS SMK",
                        "duration": "August 2023 | CERTIFIED",
                        "description": "Successfully completed the LKS SMK module on web server installation and configuration of a web server as protection against cyberattacks by CentOS based and Kali Linux OS as web server attacker.",
                        "tags": ["Cyber Security", "Networking", "Installation & Configuration"],
                        "file": "/All Dokumen/Sertifikat/Prestasi (Umum)/Dimas S - Sertifikat Juara Harapan II lomba CyberSec Jaktim 1.pdf",
                        "preview_link": "https://drive.google.com/file/d/1bsrUIav7aSGW0yQ_vrhnPiw7iSdNJi8i/view?usp=drive_link"
                    },
                    {
                        "title": "Ministry Internship Certificate - IT Support",
                        "author": "by Kemendikbudristek",
                        "duration": "April 2023 | CERTIFIED",
                        "description": "Has completed the PKL program at the Inspectorate General (Itjen) of the Kemendikbudristek as IT Support with an A grade",
                        "tags": ["IT Support", "Hardware & Software", "Installation & Configuration"],
                        "file": "/All Dokumen/Sertifikat/Prestasi (Umum)/Dimas S - Sertifikat Piagam PKL Kmdikbud.pdf",
                        "preview_link": "https://drive.google.com/file/d/1MPIE2ikgIMMeC01GFFI6GJuvlL7-oOH5/view?usp=drive_link"
                    },
                    {
                        "title": "BNSP Competency Certificate in Computer & Network Engineering",
                        "author": "by LSP SMK Negeri 7 Jakarta",
                        "duration": "May 2024 (valid for 3 Years) | CERTIFIED",
                        "description": "Successfully completed the BNSP module on network planning and implementation using Cisco Packet Tracer as network design and MikroTik as practical testing. The certification status is COMPETENT.",
                        "tags": ["Networking", "Networking Plaining", "Mikrotik", "Cisco Packet Tracer", "Configuration", "LAN", "VLAN"],
                        "file": "/All Dokumen/Sertifikat/Prestasi (Umum)/Dimas S - Sertifikat BNSP.pdf",
                        "preview_link": "https://drive.google.com/file/d/1NlHu0E7Xv2R3w8bN5xMRUCZ6atmmWWlS/view?usp=drive_link"
                    },
                    {
                        "title": "1st Place Highest National Exam Score across SDN Pondok Bambu 04",
                        "author": "by SDN Pondok Bambu 04",
                        "duration": "June 2018 | CERTIFIED",
                        "description": "Achieved 1st place for the highest National Exam (UN/USBN) score at SDN Pondok Bambu 04, with a total score (NEM) of 25.64.",
                        "tags": ["UN", "USBN"],
                        "file": "/All Dokumen/Sertifikat/Prestasi (Umum)/Dimas S - Sertifikat USBN Juara 1.pdf",
                        "preview_link": "https://drive.google.com/file/d/1sv7BViMg_AfkRFsgeY5neBikXwNcNjwv/view?usp=drive_link"
                    }
                ],
                "trainings": [
                    {
                        "title": "Ready4Security Indonesia Training Certificate (August - September 2023)",
                        "author": "by InfraDigital Foundation (IDF) x Microsoft",
                        "duration": "September 2023 | CERTIFIED",
                        "description": "Participated in the Ready4Security training seminar program by IDF x Microsoft to prepare for the Microsoft SC-200 exam.",
                        "tags": ["Cyber Security", "Training", "IDF x Microsoft"],
                        "file": "/All Dokumen/Sertifikat/Pelatihan & Organisasi/Dimas S - Sertifikat IDF Training.pdf",
                        "preview_link": "https://drive.google.com/file/d/1-cDzat6mX0yurMI4UXWtgNhWHx_ipHPt/view?usp=drive_link"
                    },
                    {
                        "title": "MATLAB Onramp Training Certificate",
                        "author": "by MATLAB",
                        "duration": "April 2026 | CERTIFIED",
                        "description": "Participated & completing the MATLAB Onramp training certification module for MATLAB-based digital signal processing simulation.",
                        "tags": ["Digital Signal Processing", "Training", "MATLAB"],
                        "file": "/All Dokumen/Sertifikat/Pelatihan & Organisasi/Dimas S - Sertifikat MATLAB Training Onramp.pdf",
                        "preview_link": "https://drive.google.com/file/d/1zApQI3ikuzj5GtPjkgE5y7mtwSUVkxP_/view?usp=drive_link"
                    },
                    {
                        "title": "Active Membership Certificate in Student Study Group (KSM) of Psychorobotic(2025 Period)",
                        "author": "by Student Study Group (KSM) of Psychorobotic",
                        "duration": "June 2026 | CERTIFIED",
                        "description": "Actively involved in membership and organizational activities within the Equipment/Logistics division in Student Study Group (KSM) of Psychorobotic.",
                        "tags": ["Student Study Group (KSM) of Psychorobotic", "Microcontroller", "ESP32", "Organization", "Jakarta State Polytechnic (PNJ)"],
                        "file": "/All Dokumen/Sertifikat/Pelatihan & Organisasi/Dimas S - Sertifikat Anggota Psycho.pdf",
                        "preview_link": "https://drive.google.com/file/d/1J1VhZTEkGHk9i_TjEK7s6mdXcfq3t188/view?usp=drive_link"
                    }
                ]
            },
            "projects": {
                "title": "My Projects",
                "items": [
                    { 
                        "title": "ESP32-Based Smart Doorlock System (Prototype)", 
                        "description": "Successfully developed an ESP32-based Smart Doorlock System using RFID and Keypad systems. This project is currently a prototype. This system can open access using an RFID card or PIN on the Keypad.", 
                        "tags": ["Doorlock", "RFID", "Keypad", "IoT", "ESP32", "Student Study Group (KSM) of Psychorobotic"],
                        "images": ["/All Dokumen/Project/doorlock1.png", "/All Dokumen/Project/doorlock2.png", "/All Dokumen/Project/doorlock3.png"]
                    },
                    { 
                        "title": "ESP32-Based Smart Intelligent Trash Bin Monitoring - Project Based Learning (PBL)", 
                        "description": "Complete the PBL module on developed an ESP32-based Smart Intelligent Trash Bin Monitoring system to measure the capacity of trash bins using LoRa as a signal transmitter (Tx) and USRP as a receiver (Rx). This USRP is configured using <i>GNU Radio</i> software.", 
                        "tags": ["Smart Trash Bin", "PBL", "ESP32", "LoRa", "USRP", "GNU Radio", "Capacity of Bins"],
                        "images": ["/All Dokumen/Project/pbl1.png", "/All Dokumen/Project/pbl2.png", "/All Dokumen/Project/pbl3.png", "/All Dokumen/Project/pbl4.png"]
                    }
                ]
            },
            "footer": {
                "phone": "WhatsApp",
                "email": "Gmail",
                "linkedin": "LinkedIn",
                "github": "GitHub",
                "copyright": "&copy; 2026 Dimas Surya Saputra - Portofolio"
            }
        }
    };

    const langSwitch = document.getElementById('langSwitch');
    
    // Cek bahasa default atau tersimpan di localStorage
    const savedLang = localStorage.getItem('portfolio_lang') || 'id';
    langSwitch.value = savedLang;
    renderPortfolio(savedLang);

    langSwitch.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('portfolio_lang', selectedLang);
        renderPortfolio(selectedLang);
    });

    function renderPortfolio(lang) {
        const data = translations[lang];
        if (!data) return;

        document.documentElement.setAttribute('lang', lang);

        // Update elemen teks statis dengan atribut data-i18n (kecuali terminal_content yang ditangani khusus)
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const keyPath = el.getAttribute('data-i18n');
            if (keyPath === 'hero.terminal_content') return; // Lewati agar tidak gabung jadi satu baris

            const value = getNestedValue(data, keyPath);
            if (value !== undefined) {
                if (Array.isArray(value)) {
                    el.textContent = value.join(' ');
                } else {
                    el.textContent = value;
                }
            }
        });

        // Render Terminal Content secara dinamis (mendukung banyak baris)
        const termContainer = document.getElementById('terminal-content');
        if (termContainer && data.hero && data.hero.terminal_content) {
            termContainer.innerHTML = data.hero.terminal_content.map(line => `<div>${line}</div>`).join('');
        }

        // Render Education Timeline (Dengan Fitur Sembunyikan SMP & SD)
        const eduContainer = document.getElementById('education-container');
        if (eduContainer && data.education && data.education.items) {
            // Mengecek apakah tombol 'more' sedang aktif atau tidak
            const isExpanded = eduContainer.dataset.expanded === 'true';

            let eduHTML = data.education.items.map((item, index) => {
                // Sembunyikan item index 2 ke atas (SMP dan SD) jika belum diekspansi
                const hiddenClass = (index >= 2 && !isExpanded) ? 'hidden-edu-item' : '';
                const collapsibleClass = index >= 2 ? 'collapsible-edu' : '';
                
                // Penanganan error jika data detail_title atau points kosong (biasanya di SD/SMP)
                const detailHTML = item.detail_title ? `<b>${item.detail_title}</b>` : '';
                const pointsHTML = item.points ? item.points.map(pt => `<br>- ${pt}`).join('') : '';

                return `
                <div class="edu-item ${collapsibleClass} ${hiddenClass}">
                    ${item.logo ? `<img src="${item.logo}" alt="Logo ${item.institution}" class="edu-logo" onerror="this.style.display='none'">` : ''}
                    <div class="edu-content">
                        <span class="edu-duration"><i class="fas fa-calendar-alt"></i> ${item.duration}</span>
                        <h3>${item.institution}</h3>
                        ${(detailHTML || pointsHTML) ? `<p>${detailHTML}${pointsHTML}</p>` : ''}
                    </div>
                </div>
                `;
            }).join('');

            // Tambahkan tombol "More" jika jumlah pendidikan lebih dari 2
            if (data.education.items.length > 2) {
                const btnText = isExpanded ? data.education.btn_less : data.education.btn_more;
                eduHTML += `
                <div class="edu-toggle-wrapper">
                    <button class="edu-toggle-btn" 
                            data-more="${data.education.btn_more}" 
                            data-less="${data.education.btn_less}" 
                            onclick="toggleEducation(this)">
                        ${btnText}
                    </button>
                </div>
                `;
            }

            eduContainer.innerHTML = eduHTML;
        }

        // Render Experience Timeline (Penomoran poin dimulai dari angka 1)
        const expContainer = document.getElementById('experience-container');
        if (expContainer && data.experience && data.experience.items) {
            expContainer.innerHTML = data.experience.items.map(item => `
                <div class="experience-item">
                    ${item.logo ? `<img src="${item.logo}" alt="Logo ${item.company}" class="experience-logo" onerror="this.style.display='none'">` : ''}
                    <div class="experience-content">
                        <h3>${item.company}</h3>
                        <p class="role-subtitle"><b>${item.role}</b></p>
                        <span class="experience-duration"><i class="fas fa-calendar-alt"></i> ${item.duration}</span>
                        <p><b>${item.jobdesk_title}</b>
                            ${item.points.map((pt, idx) => `<br>${idx + 1}. ${pt.replace(/^[0-9]+\.\s*/, '')}`).join('')}</p>
                    </div>
                </div>
            `).join('');
        }

        // Render Skills Grid
        const skillsContainer = document.getElementById('skills-container');
        const skillIcons = [
            "fa-network-wired", "fa-satellite-dish", "fa-server", "fa-map-pin",
            "fa-shield-halved", "fa-route", "fa-diagram-project", "fa-microchip",
            "fa-robot", "fa-screwdriver-wrench", "fa-wave-square"
        ];
        if (skillsContainer && data.skills && data.skills.items) {
            skillsContainer.innerHTML = data.skills.items.map((skill, idx) => `
                <div class="skill-card">
                    <div class="skill-header">
                        <i class="fas ${skillIcons[idx] || 'fa-code'}"></i>
                        <h3>${skill.title}</h3>
                    </div>
                    <div class="skill-tools">
                        ${skill.tools.map(tool => `
                            <div class="tool-badge" ${!tool.name ? 'style="justify-content: center; padding: 10px;"' : ''}>
                                ${tool.logo ? (
                                    tool.logo.startsWith('fa-') 
                                    ? `<i class="fa-solid ${tool.logo}"></i>` 
                                    : `<img src="${tool.logo}" alt="" class="tool-img" onerror="this.style.display='none'">`
                                ) : ''}
                                ${tool.name ? `<span>${tool.name}</span>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        // Render Achievements (Dengan Fitur Sembunyikan/More)
        const achContainer = document.getElementById('achievements-container');
        if (achContainer && data.certificates && data.certificates.achievements) {
            const isExpanded = achContainer.dataset.expanded === 'true';

            let achHTML = data.certificates.achievements.map((ach, index) => {
                // ANGKANYA DI SINI: index >= 1 berarti menyembunyikan sertifikat ke-2 dan seterusnya. 
                // Jika Sertifikat UN Anda ada di urutan ke-3, ubah menjadi index >= 2
                const hiddenClass = (index >= 3 && !isExpanded) ? 'hidden-cert-item' : '';
                const collapsibleClass = index >= 3 ? 'collapsible-cert' : '';

                return `
                <div class="feature-card ${collapsibleClass} ${hiddenClass}">
                    <h3>${ach.title}</h3>
                    <p class="author-subtitle"><b>${ach.author}</b></p>
                    <span class="duration"><i class="fas fa-calendar-alt"></i> ${ach.duration}</span>
                    <p>${ach.description}</p>
                    <div class="tags">
                        ${ach.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    ${ach.preview_link || ach.file ? `
                    <div class="cert-actions">
                        ${ach.preview_link ? `<a href="${ach.preview_link}" target="_blank" rel="noopener noreferrer" class="cert-btn"><i class="fa-solid fa-eye"></i> ${data.certificates.btn_preview}</a>` : ''}
                        ${ach.file ? `<a href="${ach.file}" download class="cert-btn"><i class="fa-solid fa-download"></i> ${data.certificates.btn_download}</a>` : ''}
                    </div>
                    ` : ''}
                </div>
                `;
            }).join('');

            // Memunculkan tombol "More" jika sertifikat prestasi lebih dari 1
            if (data.certificates.achievements.length > 1) {
                const btnText = isExpanded ? data.certificates.btn_less : data.certificates.btn_more;
                achHTML += `
                <div class="cert-toggle-wrapper">
                    <!-- Kita menggunakan class edu-toggle-btn agar desain tombolnya seragam dengan Pendidikan -->
                    <button class="edu-toggle-btn" 
                            data-more="${data.certificates.btn_more}" 
                            data-less="${data.certificates.btn_less}" 
                            onclick="toggleAchievements(this)">
                        ${btnText}
                    </button>
                </div>
                `;
            }

            achContainer.innerHTML = achHTML;
        }

        // Render Trainings
        const trainContainer = document.getElementById('trainings-container');
        if (trainContainer && data.certificates && data.certificates.trainings) {
            trainContainer.innerHTML = data.certificates.trainings.map(train => `
                <div class="feature-card">
                    <h3>${train.title}</h3>
                    <p class="author-subtitle"><b>${train.author}</b></p>
                    <span class="duration"><i class="fas fa-calendar-alt"></i> ${train.duration}</span>
                    <p>${train.description}</p>
                    <div class="tags">
                        ${train.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    ${train.preview_link || train.file ? `
                    <div class="cert-actions">
                        ${train.preview_link ? `<a href="${train.preview_link}" target="_blank" rel="noopener noreferrer" class="cert-btn"><i class="fa-solid fa-eye"></i> ${data.certificates.btn_preview}</a>` : ''}
                        ${train.file ? `<a href="${train.file}" download class="cert-btn"><i class="fa-solid fa-download"></i> ${data.certificates.btn_download}</a>` : ''}
                    </div>
                    ` : ''}
                </div>
            `).join('');
        }

        // Render Projects dengan Image Slider
        const projContainer = document.getElementById('projects-container');
        if (projContainer && data.projects && data.projects.items) {
            
            // Inisialisasi index slider secara global untuk setiap proyek
            window.slideIndices = window.slideIndices || {};

            projContainer.innerHTML = data.projects.items.map((proj, idx) => {
                window.slideIndices[idx] = 0; // Set slide pertama = 0
                const hasMultipleImages = proj.images && proj.images.length > 1;
                
                // Men-generate elemen img untuk setiap gambar
                const imagesHTML = proj.images ? proj.images.map(img => `<img src="${img}" alt="${proj.title}" onerror="this.style.display='none'">`).join('') : '';

                return `
                <div class="project-card">
                    <!-- Bagian Foto / Slider -->
                    <div class="slider-wrapper">
                        <div class="slider-track" id="slider-track-${idx}">
                            ${imagesHTML}
                        </div>
                        
                        <!-- Tombol Navigasi Slider (Hanya muncul jika gambar > 1) -->
                        ${hasMultipleImages ? `
                        <button class="slide-btn prev-btn" onclick="moveSlide(${idx}, -1)"><i class="fa-solid fa-chevron-left"></i></button>
                        <button class="slide-btn next-btn" onclick="moveSlide(${idx}, 1)"><i class="fa-solid fa-chevron-right"></i></button>
                        <div class="slider-dots" id="slider-dots-${idx}">
                            ${proj.images.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
                        </div>
                        ` : ''}
                    </div>

                    <!-- Bagian Konten Teks -->
                    <div class="project-content">
                        <h3>${proj.title}</h3>
                        <p>${proj.description}</p>
                        <div class="tags">
                            ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        }

        // Update Footer
        if (data.footer) {
            const footerCopy = document.getElementById('footer-copy');
            if (footerCopy) {
                footerCopy.innerHTML = data.footer.copyright;
            }
        }
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }
});

// Fungsi Global untuk Menyembunyikan/Menampilkan Pendidikan
window.toggleEducation = function(btn) {
    const eduContainer = document.getElementById('education-container');
    const isExpanded = eduContainer.dataset.expanded === 'true';
    
    // Balikkan statusnya
    eduContainer.dataset.expanded = !isExpanded;
    
    // Tampilkan atau sembunyikan elemen SMP dan SD
    const items = eduContainer.querySelectorAll('.collapsible-edu');
    items.forEach(item => {
        if (isExpanded) {
            item.classList.add('hidden-edu-item'); // Sembunyikan
        } else {
            item.classList.remove('hidden-edu-item'); // Tampilkan
        }
    });
    
    // Ganti teks tombol (More -> Less, Less -> More)
    if (isExpanded) {
        btn.innerHTML = btn.getAttribute('data-more');
    } else {
        btn.innerHTML = btn.getAttribute('data-less');
    }
};

// Fungsi Global untuk Menggeser Slide Project
window.moveSlide = function(projectIdx, direction) {
    const track = document.getElementById(`slider-track-${projectIdx}`);
    if (!track) return;

    const totalSlides = track.children.length;
    if (totalSlides <= 1) return;

    let currentIndex = window.slideIndices[projectIdx] || 0;
    currentIndex += direction;

    // Looping slide (jika sampai ujung, kembali ke awal)
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;

    window.slideIndices[projectIdx] = currentIndex;

    // Geser track gambar (100% per gambar)
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indikator titik (dots) di bawah gambar
    const dotsContainer = document.getElementById(`slider-dots-${projectIdx}`);
    if (dotsContainer) {
        Array.from(dotsContainer.children).forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
};

// Fungsi Global untuk Menyembunyikan/Menampilkan Sertifikat Prestasi
window.toggleAchievements = function(btn) {
    const achContainer = document.getElementById('achievements-container');
    const isExpanded = achContainer.dataset.expanded === 'true';
    
    // Balikkan statusnya
    achContainer.dataset.expanded = !isExpanded;
    
    // Tampilkan atau sembunyikan sertifikat yang dilabeli collapsible
    const items = achContainer.querySelectorAll('.collapsible-cert');
    items.forEach(item => {
        if (isExpanded) {
            item.classList.add('hidden-cert-item'); // Sembunyikan
        } else {
            item.classList.remove('hidden-cert-item'); // Tampilkan
        }
    });
    
    // Ganti teks tombol (More -> Less, Less -> More)
    if (isExpanded) {
        btn.innerHTML = btn.getAttribute('data-more');
    } else {
        btn.innerHTML = btn.getAttribute('data-less');
    }
};
