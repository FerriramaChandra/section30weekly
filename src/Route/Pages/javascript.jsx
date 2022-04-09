import js from "../../assets/images/js.png";
import { Container } from "react-bootstrap";

const Js = () => {
    return (
        <Container>
            <h1>Javascript</h1>
            <h3>Apa itu Javascript</h3>
            <p>Javascript adalah sebuah bahasa pemrograman yang high-level atau mendekati bahasa manusia, scripting atau untuk halaman web sehingga disupport oleh banyak browser, untyped atau tidak terlalu terpengaruh oleh tipe data dan interpreted, yakni selama memiliki browser akan bisa menjalankan javascript, karena fleksibel, javascript juga memiliki beberapa library yakni bootstrap, react, dan lain-lain.</p>
            <h3>Tipe data dalam Javascript</h3>
            <p>Tipe data dalam javascript terbagi menjadi dua yakni primitive dan object</p>
            <p>Primitive adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia di dalam bahasa pemrograman seperti string, boolean, number, bigInt, Undefined, null dan lain sebagainya. Aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai primitif dalam javascript diteruskan oleh nilai</p>
            <p>Sedangkan object adalah unit yang menyimpan properti dan fungsi (method), contoh dari tipe data ini adalah array, object, function, map, dan lain-lain</p>
            <h3>Method dan function</h3>
            <p>Method adalah sebuah fungsi yang terkait dengan object, membuat program se-sederhana mungkin sesuai kebutuhan masing-masing seperti menggabungkan array, memanggil fungsi untuk setiap elemen array, membuat elemen baru untuk memanggil fungsi untuk setiap elemen array dan masih banyak lagi. Function merangkum satu atau banyak perintah atau statemen, yang setelah dibuat dapat digunakan berkali-kali agar memudahkan programmer untuk melakukan suatu tindakan yang perlu berulang-ulang. Materi dan pembelajaran dari javascript masih sangat luas, untuk melihat dokumentasi dapat mengunjungi pada <a href="https://www.w3schools.com/js/">Halaman ini</a></p>
            <img src={js} alt="Javascript refreshment" />
        </Container>
    )
}
export default Js;