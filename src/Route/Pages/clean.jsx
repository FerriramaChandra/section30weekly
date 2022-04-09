import { Container } from "react-bootstrap";
import clean from "../../assets/images/clean.png"

const Clean = () => {
    return (
        <Container>
            <h1>Clean Code</h1>
            <h3>Apa itu Clean Code</h3>
            <p>Clean code adalah istilah untuk kode yang mudah dibaca, dipahami, dan diubah oleh programmer. Orang-orang bisa membuat kode yang dipahami oleh komputer, namun programmer yang baik membuat kode yang bisa dipahami oleh manusia.</p>
            <p>Clean kode diperlukan agar dalam work collaboration dan feature development, misinformasi dapat dihindari dan membuat development menjadi lebih cepat dan efisien.</p>
            <h3>Karakteristik Clean Code</h3>
            <p>Clean code dibutuhkan agar mempermudah dalam programming, dengan karakteristik antara lain : Mudah dipahami, variabel yang digunakan adalah variabel yang deskriptif agar jelas, Mudah dieja dan dicari, Singkat namun menjelaskan konteks, Konsisten, seperti cara penulisan jangan mencampur semua uppercase dan lowercase, kedua cara penulisan biasanya memiliki norma penulisan masing-masing,Hindari penambahan konteks yang tidak perlu, seperti komentar di sana-sini, Komentar tetap diperlukan, namun seperlunya saja, jangan sampai komentar yang membuat kode menjadi rumit, Good function, function yang baik adalah function yang dibuat dan digunakan semestinya, bukan dengan merubah isi function, dengan melakukan perubahan isi function berpotensi menyebabkan error, Gunakan konvensi atau norma penulisan seperti pada <a href="https://github.com/airbnb/javascript">Penulisan Javascript</a> </p>
            <h3>Prinsip dalam Clean Code</h3>
            <h5>Keep It Simple (KISS)</h5>
            <p>Hindari membuat fungsi yang melakukan hal rumit seperti mengubah a dan mengeksekusi c (contoh)</p>
            <h5>Don't Repeat Yourself(DRY)</h5>
            <p>Hindari penggunaan kode yang sama terus menerus dengan proses yang rumit, lebih baik buat sebuah fungsi untuk tugas tersebut dan jika ingin digunakan, cukup panggil fungsi tersebut</p>
            <h5>Refactoring</h5>
            <p>Refactoring restrukturisasi kode yang dibuat dengan mengubah struktur internal tanpa mengubah perilaku eksternal dengan prinsip dan karakteristik clean code.</p>
            <img src={clean} alt="Clean"/>
        </Container>
    )
}
export default Clean;