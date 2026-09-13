document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling untuk menu navigasi internal
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
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
                "terminal_title": "Saya memiliki minat di bidang :",
                "terminal_content": [
                    "IT Support, Teknik Komputer & Jaringan, Teknisi, Perakitan Perangkat Keras Komputer, Mikrotik, IoT (Arduino/ESP32), Teknik Telekomunikasi, dan Keamanan Siber."
                ]
            },
            "education": {
                "title": "Pendidikan",
                "items": [
                    {
                        "duration": "2024 - Sekarang",
                        "institution": "Politeknik Negeri Jakarta (PNJ) - Depok",
                        "detail_title": "D3 - Telekomunikasi | IPK Sementara : 3.50",
                        "points": [
                            "Aktif mempelajari perancangan jaringan FTTx, perancangan jaringan lokal maupun seluler, sistem telekomunikasi wired dan wireless, pemrosesan sinyal analog dan digital, serta pengembangan perangkat IoT berbasis mikrokontroler, baik Arduino, ESP, maupun Raspberry Pi.",
                            "Aktif mengikuti organisasi Kelompok Studi Mahasiswa (KSM Psychorobotic), baik anggota maupun pengurus."
                        ]
                    },
                    {
                        "duration": "2021 - 2024 (LULUS)",
                        "institution": "SMK Negeri 7 Jakarta - Jakarta Timur",
                        "detail_title": "Nilai Rata-Rata Raport : 85.11",
                        "points": [
                            "Menyelesaikan berbagai modul praktikum dan simulasi jaringan (LAN, MAN, WAN, PBX, Mikrotik).",
                            "Menyelesaikan modul instalasi di OS Debian (Web Server, Web Hosting, Ansible, dll).",
                            "Mempelajari dan menyelesaikan modul pemrograman web HTML, CSS, dan JavaScript.",
                            "Meraih Juara Harapan II lomba Cyber Security (Bersama/Tim) tingkat Jakarta Timur 1.",
                            "Mengikuti Sertifikasi Ready4Sec yang diselenggarakan oleh InfraDigital Foundation (IDF) x Microsoft.",
                            "Membuat perancangan dan implementasi jaringan komputer."
                        ]
                    },
                    {
                        "duration": "2018 - 2021 (LULUS)",
                        "institution": "SMP Negeri 117 Jakarta - Jakarta Timur",
                        "detail_title": "Nilai Rata-Rata Raport : 91.5",
                        "points": [
                            "Aktif mengikuti pelajaran di sekolah"
                        ]
                    },
                    {
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
                "title": "Pengalaman",
                "items": [
                    {
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
                    { "title": "Teknik Komputer & Jaringan", "description": "Perencanaan Membuat perancangan dan implementasi jaringan komputer, mampu mengkonfigurasi routing & switching jaringan, mengkonfigurasi PABX, menguasai pengalamatan IP." },
                    { "title": "Instalasi Perangkat Keras & Perangkat Lunak", "description": "Pemrograman mikrokontroler ESP32-C3, integrasi sensor, implementasi protokol mDNS, dan konektivitas BLE." },
                    { "title": "Merakit Perangkat Keras Komputer", "description": "Perancangan antena mikrostrip 2.4/5 GHz (Loop/Square ring) serta simulasi RF menggunakan CST Studio Suite." },
                    { "title": "Memecah Masalah Komputer & Jaringan", "description": "Simulasi telekomunikasi menggunakan MATLAB, analisa diagram Trellis, dan proses perhitungan Analog-to-Digital (ADC)." },
                    { "title": "Routing & Switching", "description": "Konfigurasi BGP, OSPF, VLAN, dan STP menggunakan perangkat Cisco, MikroTik, dan Juniper." },
                    { "title": "Pemrograman", "description": "Pengembangan antarmuka HTML/CSS berbasis domain lokal untuk kontrol perangkat cerdas dan manajemen IoT." },
                    { "title": "Keamanan Siber", "description": "Integrasi sistem presisi waktu memanfaatkan Network Time Protocol (NTP) tanpa modul RTC eksternal." },
                    { "title": "3D Casing Design", "description": "Visualisasi dan desain sasis perangkat elektronik (casing jam digital, modul IoT) menggunakan AutoCAD & SketchUp." },
                    { "title": "Network Security", "description": "Implementasi Next-Gen Firewall, manajemen VPN (IPsec/SSL), konfigurasi ACL, dan Intrusion Detection." },
                    { "title": "Software & Hardware Troubleshooting", "description": "Perakitan, perbaikan kelistrikan PC, perancangan tata letak PCB (EasyEDA/KiCad), dan integrasi modul." },
                    { "title": "Cloud Networking", "description": "Desain arsitektur Virtual Private Cloud, DirectConnect, dan Transit Gateway untuk integrasi infrastruktur hibrida." },
                    { "title": "Monitoring & Automation", "description": "Pemantauan real-time infrastruktur IT dengan Zabbix/PRTG dan integrasi otomasi berbasis script." }
                ]
            },
            "certificates": {
                "title": "Sertifikat & Penghargaan",
                "achievement_title": "Pencapaian Saya",
                "training_title": "Pelatihan & Organisasi",
                "achievements": [
                    {
                        "title": "Juara Harapan 2 - Lomba Cyber Security (Tingkat Jakarta Timur 1)",
                        "author": "by LKS SMK",
                        "duration": "Agustus 2023 | CERTIFIED",
                        "description": "Berhasil merancang dan mengimplementasikan proyek Smart Digital Clock berbasis NTP serta sistem kontrol IoT \"Lampu Sein ESP32-C3 Core\" dengan standar antarmuka kustom.",
                        "tags": ["Cyber Security", "Networking", "Installation & Configuration"]
                    },
                    {
                        "title": "Sertifikat Magang/PKL Kemendikbudristek - IT Support",
                        "author": "by Kemendikbudristek",
                        "duration": "April 2023 | CERTIFIED",
                        "description": "Meraih pencapaian memuaskan dalam perakitan hardware PC secara mandiri serta konfigurasi router lanjutan untuk topologi Local Area Network (LAN).",
                        "tags": ["IT Support", "Hardware & Software", "Installation & Configuration"]
                    },
                    {
                        "title": "Sertifikat Kopetensi BNSP Teknik Komputer Jaringan",
                        "author": "by LSP SMK Negeri 7 Jakarta",
                        "duration": "Mei 2024 (berlaku 3 Tahun) | CERTIFIED",
                        "description": "Mengembangkan skema link budget dan topologi jaringan serat optik densitas tinggi yang diakui dalam evaluasi mata kuliah perancangan jaringan.",
                        "tags": ["Networking", "Networking Plaining", "Mikrotik", "Cisco Packet Tracer", "Configuration", "LAN"]
                    },
                    {
                        "title": "Juara 1 Nilai UN/USBN Tertinggi se SDN Pondok Bambu 04",
                        "author": "by SDN Pondok Bambu 04",
                        "duration": "Juni 2018 | CERTIFIED",
                        "description": "Menyelesaikan simulasi parameter dual-band (2.4/5 GHz) menggunakan CST Studio Suite dengan performa return loss optimal.",
                        "tags": ["UN", "USBN"]
                    }
                ],
                "trainings": [
                    {
                        "title": "Sertifikat Ready4Security Indonesia Training (Periode Agustus - September 2023)",
                        "author": "by InfraDigital Foundation (IDF) x Microsoft",
                        "duration": "September 2023 | CERTIFIED",
                        "description": "Mengikuti serangkaian pelatihan teknis terkait perhitungan Link Budget, penyambungan kabel serat optik, dan pengoperasian instrumen ukur telekomunikasi.",
                        "tags": ["Cyber Security", "Training", "IDF x Microsoft"]
                    },
                    {
                        "title": "Sertifikat MATLAB Onramp Training",
                        "author": "by MATLAB",
                        "duration": "April 2026 | CERTIFIED",
                        "description": "Pelatihan intensif perancangan antena mikrostrip dual-band (2.4 GHz & 5 GHz) serta analisis parameter S-parameter (Return Loss / VSWR).",
                        "tags": ["Digital Signal Processing", "Training", "MATLAB"]
                    },
                    {
                        "title": "Sertifikat Keanggotaan Aktif di KSM Psychorobotic (Periode 2025)",
                        "author": "by KSM Psychorobotic",
                        "duration": "Juni 2026 | CERTIFIED",
                        "description": "Terlibat aktif dalam kegiatan kepanitiaan teknik telekomunikasi dan kolaborasi tim pengembangan proyek perangkat keras berbasis mikrokontroler.",
                        "tags": ["KSM Psychorobotic", "Microcontroler", "ESP32", "Organization", "PNJ"]
                    }
                ]
            },
            "projects": {
                "title": "Proyek Saya",
                "items": [
                    { "title": "Smart Digital Clock (NTP)", "description": "Jam digital berbasis ESP32-C3 yang tersinkronisasi via Network Time Protocol. Menggunakan matriks LED MD_Parola berpola 5x8 dengan fitur alarm berkedip terus-menerus saat timer habis.", "tags": ["ESP32-C3", "NTP", "Dot Matrix"] },
                    { "title": "Lampu Sein ESP32C3 Core", "description": "Sistem kontrol sein kendaraan interaktif berbasis web lokal. Dilengkapi UI dashboard kustom dengan tombol \"Play\" dan \"Pause\" berbentuk kapsul (capsule shape) dengan presisi ukuran simetris.", "tags": ["HTML/CSS", "IoT Web", "mDNS"] },
                    { "title": "Dual-Band Microstrip Antenna", "description": "Perhitungan dan simulasi antena loop untuk aplikasi komunikasi nirkabel (Wi-Fi) yang beroperasi secara stabil pada dua frekuensi: 2.4 GHz dan 5 GHz.", "tags": ["CST Studio", "RF Engineering"] },
                    { "title": "MATLAB ADC & Trellis Analysis", "description": "Pengembangan syntax MATLAB untuk mensimulasikan pemrosesan sinyal telekomunikasi, mencakup proses sampling, kuantisasi ADC, serta visualisasi diagram Trellis.", "tags": ["MATLAB", "Signal Processing"] },
                    { "title": "High-Density FTTx Design", "description": "Perancangan topologi jaringan serat optik untuk area padat (FTTH/FTTB) dengan kalkulasi Link Budget mendalam dan pemilihan spesifikasi Duct serta G.652D.", "tags": ["Fiber Optic", "Network Planning"] },
                    { "title": "Enterprise Data Center Migration", "description": "Melakukan migrasi infrastruktur fisik ke arsitektur High Availability (HA) tingkat enterprise tanpa waktu henti operasional (zero downtime).", "tags": ["Cisco Nexus", "BGP"] },
                    { "title": "Multi-Branch SD-WAN", "description": "Menghubungkan jaringan di berbagai kantor cabang dengan penerapan enkripsi IPsec penuh dan manajemen distribusi beban lalu lintas (load balancing) terpusat.", "tags": ["MikroTik", "IPsec VPN"] },
                    { "title": "Security Audit & Hardening", "description": "Melakukan uji penetrasi pada arsitektur internal, manajemen keamanan port, serta implementasi autentikasi ketat menggunakan protokol Radius/802.1X.", "tags": ["Wireshark", "802.1X"] },
                    { "title": "3D Modular IoT Enclosure", "description": "Pemodelan dan perancangan tata letak casing 3D untuk integrasi komponen mikrokontroler dengan penempatan port DC dan USB yang presisi pada sasis elektronik.", "tags": ["AutoCAD", "Hardware Design"] },
                    { "title": "Automated Environment Monitoring", "description": "Implementasi pembacaan berbagai sensor lingkungan yang dikirimkan secara telemetri ke server sentral untuk ditampilkan dalam grafik dashboard secara real-time.", "tags": ["Telemetry", "Grafana"] },
                    { "title": "BLE Smart Home Controller", "description": "Perancangan ekosistem rumah pintar dengan jangkauan tertutup menggunakan transmisi Bluetooth Low Energy (BLE) yang hemat daya untuk aktuator saklar lampu.", "tags": ["BLE", "Smart Home"] },
                    { "title": "PCB Layout Engineering", "description": "Menerjemahkan prototipe sirkuit kabel jumper (breadboard) ke dalam desain layout sirkuit cetak dua lapis menggunakan software EasyEDA/KiCad.", "tags": ["EasyEDA", "PCB Design"] }
                ]
            },
            "footer": {
                "phone": "085884588821",
                "email": "dimsursap23@gmail.com",
                "linkedin": "Dimas Surya Saputra (linkedin.com/in/dimas-surya-saputra-b4922b285)",
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
                "description": "I am a graduate of Computer & Network Engineering, and currently a Telecommunications Engineering student at PNJ who loves learning new things and exploring technology, especially in the field of telecommunications. I have experience using software applications such as Cisco Packet Tracer, Winbox, PuTTY, Wireshark, Virtual Studio Code, Arduino IDE, Virtualbox, Multisim, EasyEDA, KiCad, Protel, AutoCAD, SketchUp, Axence NetTools, CST Studio Suite, MATLAB, and Radio Mobile, both in academic project assignments and organizational activities. I am capable of working well in teams, managing time effectively, and thinking logically to solve problems.",
                "terminal_title": "I am interested in:",
                "terminal_content": [
                    "IT Support, Computer & Network Engineer, Technician, Computer Hardware Assembly, Mikrotik, IoT (Arduino/ESP32), Telecommunication Engineer, and Cyber Security."
                ]
            },
            "education": {
                "title": "Education",
                "items": [
                    {
                        "duration": "2024 - Present",
                        "institution": "Jakarta State Polytechnic (PNJ) - Depok",
                        "detail_title": "Associate Degree - Telecommunications Engineering | Current GPA: 3.50",
                        "points": [
                            "Actively studying FTTx network design, local and cellular network design, wired and wireless telecommunication systems, analog and digital signal processing, and microcontroller-based IoT device development using Arduino, ESP, and Raspberry Pi.",
                            "Active member and administrator of the Student Study Group organization (KSM Psychorobotic)."
                        ]
                    },
                    {
                        "duration": "2021 - 2024 (GRADUATED)",
                        "institution": "SMK Negeri 7 Jakarta - East Jakarta",
                        "detail_title": "Average Report Grade: 85.11",
                        "points": [
                            "Completed various practical modules and network simulations (LAN, MAN, WAN, PBX, Mikrotik).",
                            "Completed installation modules in Debian OS (Web Server, Web Hosting, Ansible, etc.).",
                            "Learned and completed HTML, CSS, and JavaScript web programming modules.",
                            "Achieved 2nd Runner-Up in the Cyber Security Competition (Team category) at East Jakarta 1 level.",
                            "Participated in the Ready4Sec Certification organized by InfraDigital Foundation (IDF) x Microsoft.",
                            "Designed and implemented computer networks."
                        ]
                    },
                    {
                        "duration": "2018 - 2021 (GRADUATED)",
                        "institution": "SMP Negeri 117 Jakarta - East Jakarta",
                        "detail_title": "Average Report Grade: 91.5",
                        "points": [
                            "Actively participated in school classes."
                        ]
                    },
                    {
                        "duration": "2012 - 2018 (GRADUATED)",
                        "institution": "SDN Pondok Bambu 04 - East Jakarta",
                        "detail_title": "Average Report Grade: 80.20 | National Exam Average: 81.30",
                        "points": [
                            "Actively participated in school classes.",
                            "Achieved 1st Place for Highest National Exam Score at SDN Pondok Bambu 04 with a total score of 25.64 and average national exam score of 85.46."
                        ]
                    }
                ]
            },
            "experience": {
                "title": "Experience",
                "items": [
                    {
                        "company": "PT. Angkasa Pura Indonesia (Halim PK)",
                        "role": "INTERN | IT Facility Maintenance",
                        "duration": "August 2026 - Present",
                        "jobdesk_title": "Job Desk:",
                        "points": [
                            "Perform maintenance of IT facilities in the airport area.",
                            "Support network operations and computer equipment.",
                            "Conduct routine checks on hardware and software.",
                            "Assist in handling local network troubleshooting.",
                            "Manage IT equipment inventory documentation.",
                            "Coordinate with the technical team for device repairs.",
                            "Execute telecommunication support system maintenance tasks."
                        ]
                    },
                    {
                        "company": "PT. Zyrexindo Mandiri Buana Tbk.",
                        "role": "FREELANCE / DAILY WORKER | Assembly Engineer",
                        "duration": "December 28 - 31, 2025",
                        "jobdesk_title": "Job Desk:",
                        "points": [
                            "Assembled hardware and laptops in accordance with procedures/SOP and strict Quality Control (QC) checks.",
                            "Capable of performing repetitive tasks, including component installation, cable connection, and packaging techniques to meet daily production targets.",
                            "Able to operate specialized equipment and electric screwdrivers correctly and carefully to prevent damage to sensitive electronic components.",
                            "Capable of inspecting assembled units according to procedures with high precision to identify defects or non-conformities before moving to the next production stage.",
                            "Able to work with discipline, focus, high precision, and speed while ensuring a safe and tidy workspace."
                        ]
                    },
                    {
                        "company": "Ministry of Education, Culture, Research, and Technology (Kemendikbudristek)",
                        "role": "INTERN | IT Support",
                        "duration": "October 3, 2022 - March 31, 2023",
                        "jobdesk_title": "Job Desk:",
                        "points": [
                            "Repaired employees' laptops and PCs.",
                            "Installed Windows OS on employees' laptops and PCs.",
                            "Installed OS on servers.",
                            "Configured laptops or PCs to employees' and staff printers.",
                            "Configured server networks and CCTV systems.",
                            "Configured monitor setups in the courtroom.",
                            "Installed tools such as Microsoft Office, Nitro (PDF Reader), and device drivers (printer drivers and other peripherals)."
                        ]
                    }
                ]
            },
            "skills": {
                "title": "Main Skills",
                "items": [
                    { "title": "Fiber Optic & FTTx", "description": "FTTH/FTTB planning, Link Budget, G.652D cable specifications, and Ring/Point-to-Point topology design." },
                    { "title": "IoT & Embedded System", "description": "ESP32-C3 microcontroller programming, sensor integration, mDNS protocol implementation, and BLE connectivity." },
                    { "title": "Antenna Engineering", "description": "Design of 2.4/5 GHz microstrip antennas (Loop/Square ring) and RF simulation using CST Studio Suite." },
                    { "title": "Signal Processing", "description": "Telecommunication simulation using MATLAB, Trellis diagram analysis, and Analog-to-Digital Conversion (ADC) calculations." },
                    { "title": "Routing & Switching", "description": "Configuration of BGP, OSPF, VLAN, and STP using Cisco, MikroTik, and Juniper devices." },
                    { "title": "Web Dashboard UI", "description": "Development of local domain-based HTML/CSS interfaces for smart device control and IoT management." },
                    { "title": "Time Synchronization", "description": "Integration of high-precision time systems using Network Time Protocol (NTP) without external RTC modules." },
                    { "title": "3D Casing Design", "description": "Visualization and chassis design of electronic devices (digital clock casing, IoT modules) using AutoCAD & SketchUp." },
                    { "title": "Network Security", "description": "Next-Gen Firewall implementation, VPN management (IPsec/SSL), ACL configuration, and Intrusion Detection." },
                    { "title": "Hardware Troubleshooting", "description": "Assembly, PC electrical repair, PCB layout design (EasyEDA/KiCad), and module integration." },
                    { "title": "Cloud Networking", "description": "Virtual Private Cloud architecture design, DirectConnect, and Transit Gateway for hybrid infrastructure integration." },
                    { "title": "Monitoring & Automation", "description": "Real-time IT infrastructure monitoring with Zabbix/PRTG and script-based automation integration." }
                ]
            },
            "certificates": {
                "title": "Certificate",
                "achievement_title": "My Achievement",
                "training_title": "Training & Organization",
                "achievements": [
                    {
                        "title": "2nd Runner-Up - Cyber Security Competition (East Jakarta 1 Level)",
                        "author": "by LKS SMK",
                        "duration": "August 2023 | CERTIFIED",
                        "description": "Successfully designed and implemented an NTP-based Smart Digital Clock project and the \"Lampu Sein ESP32-C3 Core\" IoT control system with custom interface standards.",
                        "tags": ["Cyber Security", "Networking", "Installation & Configuration"]
                    },
                    {
                        "title": "Ministry Internship Certificate - IT Support",
                        "author": "by Kemendikbudristek",
                        "duration": "April 2023 | CERTIFIED",
                        "description": "Achieved satisfactory results in independent PC hardware assembly and advanced router configuration for Local Area Network (LAN) topologies.",
                        "tags": ["IT Support", "Hardware & Software", "Installation & Configuration"]
                    },
                    {
                        "title": "BNSP Competency Certificate in Computer & Network Engineering",
                        "author": "by LSP SMK Negeri 7 Jakarta",
                        "duration": "May 2024 (valid for 3 Years) | CERTIFIED",
                        "description": "Developed link budget schemes and high-density fiber optic network topologies recognized in network design course evaluations.",
                        "tags": ["Networking", "Networking Plaining", "Mikrotik", "Cisco Packet Tracer", "Configuration", "LAN"]
                    },
                    {
                        "title": "1st Place Highest National Exam Score across SDN Pondok Bambu 04",
                        "author": "by SDN Pondok Bambu 04",
                        "duration": "June 2018 | CERTIFIED",
                        "description": "Completed dual-band parameter simulations (2.4/5 GHz) using CST Studio Suite with optimal return loss performance.",
                        "tags": ["UN", "USBN"]
                    }
                ],
                "trainings": [
                    {
                        "title": "Ready4Security Indonesia Training Certificate (August - September 2023)",
                        "author": "by InfraDigital Foundation (IDF) x Microsoft",
                        "duration": "September 2023 | CERTIFIED",
                        "description": "Participated in technical training series related to Link Budget calculations, fiber optic cable splicing, and telecommunication measuring instrument operations.",
                        "tags": ["Cyber Security", "Training", "IDF x Microsoft"]
                    },
                    {
                        "title": "MATLAB Onramp Training Certificate",
                        "author": "by MATLAB",
                        "duration": "April 2026 | CERTIFIED",
                        "description": "Intensive training on dual-band microstrip antenna design (2.4 GHz & 5 GHz) and S-parameter analysis (Return Loss / VSWR).",
                        "tags": ["Digital Signal Processing", "Training", "MATLAB"]
                    },
                    {
                        "title": "Active Membership Certificate in KSM Psychorobotic (2025 Period)",
                        "author": "by KSM Psychorobotic",
                        "duration": "June 2026 | CERTIFIED",
                        "description": "Actively involved in telecommunication engineering committees and microcontroller-based hardware project development teamwork.",
                        "tags": ["KSM Psychorobotic", "Microcontroler", "ESP32", "Organization", "PNJ"]
                    }
                ]
            },
            "projects": {
                "title": "My Project",
                "items": [
                    { "title": "Smart Digital Clock (NTP)", "description": "ESP32-C3 based digital clock synchronized via Network Time Protocol. Uses a 5x8 pattern MD_Parola LED matrix with a continuous flashing alarm feature when the timer expires.", "tags": ["ESP32-C3", "NTP", "Dot Matrix"] },
                    { "title": "Lampu Sein ESP32C3 Core", "description": "Local web-based interactive vehicle turn signal control system. Equipped with a custom dashboard UI featuring capsule-shaped \"Play\" and \"Pause\" buttons with symmetrical size precision.", "tags": ["HTML/CSS", "IoT Web", "mDNS"] },
                    { "title": "Dual-Band Microstrip Antenna", "description": "Calculation and simulation of loop antennas for wireless communication applications (Wi-Fi) operating stably across two frequencies: 2.4 GHz and 5 GHz.", "tags": ["CST Studio", "RF Engineering"] },
                    { "title": "MATLAB ADC & Trellis Analysis", "description": "Development of MATLAB syntax to simulate telecommunication signal processing, covering sampling, ADC quantization, and Trellis diagram visualization.", "tags": ["MATLAB", "Signal Processing"] },
                    { "title": "High-Density FTTx Design", "description": "Fiber optic network topology design for dense areas (FTTH/FTTB) with in-depth Link Budget calculations and specification selection for Ducts and G.652D.", "tags": ["Fiber Optic", "Network Planning"] },
                    { "title": "Enterprise Data Center Migration", "description": "Migrated physical infrastructure to an enterprise-grade High Availability (HA) architecture with zero operational downtime.", "tags": ["Cisco Nexus", "BGP"] },
                    {
                        "title": "Multi-Branch SD-WAN",
                        "description": "Connected networks across branch offices with full IPsec encryption implementation and centralized load balancing traffic distribution management.",
                        "tags": ["MikroTik", "IPsec VPN"]
                    },
                    {
                        "title": "Security Audit & Hardening",
                        "description": "Performed penetration testing on internal architecture, port security management, and strict authentication implementation using Radius/802.1X protocols.",
                        "tags": ["Wireshark", "802.1X"]
                    },
                    { "title": "3D Modular IoT Enclosure", "description": "3D modeling and layout design of enclosures for microcontroller component integration with precise DC and USB port placement on the electronic chassis.", "tags": ["AutoCAD", "Hardware Design"] },
                    { "title": "Automated Environment Monitoring", "description": "Implementation of environmental sensor data readings transmitted via telemetry to a central server for real-time dashboard chart display.", "tags": ["Telemetry", "Grafana"] },
                    { "title": "BLE Smart Home Controller", "description": "Short-range smart home ecosystem design using low-power Bluetooth Low Energy (BLE) transmission for light switch actuators.", "tags": ["BLE", "Smart Home"] },
                    { "title": "PCB Layout Engineering", "description": "Translating jumper wire circuit prototypes (breadboards) into double-layer printed circuit layout designs using EasyEDA/KiCad software.", "tags": ["EasyEDA", "PCB Design"] }
                ]
            },
            "footer": {
                "phone": "085884588821",
                "email": "dimsursap23@gmail.com",
                "linkedin": "Dimas Surya Saputra (linkedin.com/in/dimas-surya-saputra-b4922b285)",
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

        // Render Education Timeline
        const eduContainer = document.getElementById('education-container');
        if (eduContainer && data.education && data.education.items) {
            eduContainer.innerHTML = data.education.items.map(item => `
                <div class="edu-item">
                    <span class="edu-duration"><i class="fas fa-calendar-alt"></i> ${item.duration}</span>
                    <h3>${item.institution}</h3>
                    <p><b>${item.detail_title}</b>
                        ${item.points.map(pt => `<br>- ${pt}`).join('')}</p>
                </div>
            `).join('');
        }

        // Render Experience Timeline (Penomoran poin dimulai dari angka 1)
        const expContainer = document.getElementById('experience-container');
        if (expContainer && data.experience && data.experience.items) {
            expContainer.innerHTML = data.experience.items.map(item => `
                <div class="experience-item">
                    <h3>${item.company}</h3>
                    <p class="role-subtitle"><b>${item.role}</b></p>
                    <span class="experience-duration"><i class="fas fa-calendar-alt"></i> ${item.duration}</span>
                    <p><b>${item.jobdesk_title}</b>
                        ${item.points.map((pt, idx) => `<br>${idx + 1}. ${pt.replace(/^[0-9]+\.\s*/, '')}`).join('')}</p>
                </div>
            `).join('');
        }

        // Render Skills Grid
        const skillsContainer = document.getElementById('skills-container');
        const skillIcons = [
            "fa-network-wired", "fa-microchip", "fa-satellite-dish", "fa-wave-square",
            "fa-server", "fa-code", "fa-clock", "fa-cube",
            "fa-shield-halved", "fa-screwdriver-wrench", "fa-cloud", "fa-diagram-project"
        ];
        if (skillsContainer && data.skills && data.skills.items) {
            skillsContainer.innerHTML = data.skills.items.map((skill, idx) => `
                <div class="skill-card">
                    <i class="fas ${skillIcons[idx] || 'fa-code'}"></i>
                    <h3>${skill.title}</h3>
                    <p>${skill.description}</p>
                </div>
            `).join('');
        }

        // Render Achievements
        const achContainer = document.getElementById('achievements-container');
        if (achContainer && data.certificates && data.certificates.achievements) {
            achContainer.innerHTML = data.certificates.achievements.map(ach => `
                <div class="feature-card">
                    <h3>${ach.title}</h3>
                    <p class="author-subtitle"><b>${ach.author}</b></p>
                    <span class="duration"><i class="fas fa-calendar-alt"></i> ${ach.duration}</span>
                    <p>${ach.description}</p>
                    <div class="tags">
                        ${ach.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('');
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
                </div>
            `).join('');
        }

        // Render Projects
        const projContainer = document.getElementById('projects-container');
        if (projContainer && data.projects && data.projects.items) {
            projContainer.innerHTML = data.projects.items.map(proj => `
                <div class="feature-card">
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                    <div class="tags">
                        ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        }

        // Update Footer
        if (data.footer) {
            document.getElementById('footer-phone').textContent = data.footer.phone;
            document.getElementById('footer-email').textContent = data.footer.email;
            document.getElementById('footer-linkedin').textContent = data.footer.linkedin;
            document.getElementById('footer-copy').innerHTML = data.footer.copyright;
        }
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }
});