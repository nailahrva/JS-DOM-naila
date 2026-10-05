console.log("Aplikasi To do list");


//mengambil elemen input, tombol, list kotak, dan elemen list kotak
const inputCatatan = document.getElementById("input-catatan");
const tombolTambah = document.getElementById("tombol");
const listKotak = document.getElementById("listKotak");
const totalTugas = document.getElementById("total-tugas");
const tugasSelesai = document.getElementById("tugas-selesai");
const tugasBelum = document.getElementById("tugas-belum");

// Membuat Variabel untuk menampung jumlah pada box
let jumlahTugas = 0;
let jumlahSelesai = 0;

//Memperbarui Jumlah Tugas, jumlah tugas selesai, dan jumlah tugas yg belum
function perbaruiJumlah() {
    // Menampilkan jumlah total tugas
    totalTugas.innerText = `Total Tugas: ${jumlahTugas}`;
    // Menampilkan jumlah tugas selesai
    tugasSelesai.innerText = `Selesai: ${jumlahSelesai}`;

// Menghitung tugas yang belum selesai (jumlah tugas yg ada - tugas yg sudah selesai)
const jumlahBelum = jumlahTugas - jumlahSelesai;
// Menampilkan jumlah tugas belum selesai
tugasBelum.innerText = `Belum Selesai: ${jumlahBelum}`;
}


//menambahkan catatan baru, memvalidasi input, menampilkan alert jika input kosong
function tambahTugas() {
    const isiTugas = inputCatatan.value.trim();
    if (isiTugas === "") {
        alert("Catatan anda tidak boleh kosong!");
        return;
    }


    // Membuat elemen HTML baru <li> hanya di memori Javascript
    const liBaru = document.createElement("li");
    liBaru.innerText = isiTugas;


    //Membuat tombol hapus, memberi nama sesuai dgn css, dan memberi simbol teks (soalnya gtau gmana simbolnya kl d js)
    const btnHapus = document.createElement("button");
    btnHapus.className = "btn-hapus";
    btnHapus.innerText = "x";

    //memasukan button hapus ke dalam li baru
    liBaru.appendChild(btnHapus);


    //Menambah memperbarui tampilan total tugas,selesai, dan blm selesai.
    liBaru.addEventListener("click", function(event) {
        if (event.target === btnHapus) {
            return;
        }
        liBaru.classList.toggle("done");
        if (liBaru.classList.contains("done")) {
            jumlahSelesai++;

        } else {
            jumlahSelesai--;
        }

        perbaruiJumlah();
        console.log(`Status tugas "${isiTugas}" telah diperbarui`);
    });

    btnHapus.addEventListener("click", function() {

        if (liBaru.classList.contains("done")) {
            jumlahSelesai--;
        }
        
        liBaru.remove();
        jumlahTugas--;
        perbaruiJumlah();
        console.log(`Tugas "${isiTugas}" telah dihapus`);
    });


    // Menambahkan Tugas ke dalam <ul>
    listKotak.appendChild(liBaru);

    inputCatatan.value = "";
    jumlahTugas++;
    perbaruiJumlah();
    console.log(`Tugas baru ditambahkan: "${isiTugas}"`);
}


tombolTambah.addEventListener("click", function() {
    tambahTugas();
});


//Event Listener untuk menambahkan catatan ketika menekan tombol Enter di input
inputCatatan.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        tambahTugas();
    }

});