import html from "../../assets/images/html.png";
import { Container } from "react-bootstrap";

const HTML = () => {
    return (
        <Container>
            <h1>HTML</h1>
            <h3>Penjelasan Singkat frontend</h3>
            <p>Frontend adalah bagian website yang berintraksi dengan pengguna, umumnya dibagun dari 3 komponen, yaitu: HTML, berfungsi sebagai struktur dari komponen website, CSS, membuat tampilan website menjadi lebih menarik, JavaScript, membuat fungsi-fungsi yang akan membuat website lebih hidup dan intraktif</p>
            <h3>Apa itu HTML</h3>
            <p>HTML (HyperText Markup Language) adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web, kegunaan utama dari HTML ini adalah: Membuat struktur dari halaman website, Mengatur tampilan dan isi dari halaman website, Membuat table dengan tag HTML table, Membuat form html, Membuat gambar dengan canvas, Mempublikasikan halaman website secara online</p>
            <h3>HTML Editor dan Dokumentasi HTML</h3>
            <p>HTML editor yang dapat digunakan antara lain Notepad, Visual Studio Code, Sublime, Notepad++, dan lainnya</p>
            <img src={html} alt="html" />
        </Container>
    )
}
export default HTML;