import css from "../../assets/images/css.png";
import { Container } from "react-bootstrap";

const CSS = () => {
    return (
        <Container>
            <h1>CSS</h1>
            <h3>Apa itu CSS</h3>
            <p>CSS adalah Cascading Style Sheets yang dapat digunakan menghias halaman web. (color, size, font, background, width, height, dll). Juga dapat mengatur posisi pada halaman web. (float, align, display, position, dll). Sederhananya Jika pada HTML merupakan Rangka atau struktur, CSS digunakan untuk tampilan dari kerangka dan struktur dari HTML.</p>
            <h3>Cara menggunakan CSS dalam HTML</h3>
            <h5>External CSS</h5>
            <h5>Internal CSS</h5>
            <h5>Inline CSS</h5>
            <h3>CSS Selector</h3>
            <p>CSS Selector adalah pola yang digunakan untuk memilih element yang ingin di styling, penanda yang dapat digunakan umumnya adalah class dan ID. ID seperti namanya, merupakan identitas unik sehingga tidak boleh ada id yang sama dalam suatu file, sedangkan class dapat digunakan beberapa kali untuk pengelompokan, cara lain yang bisa digunakan ada dengan menuliskan selector atau tag dari html, seperti "div", "h1" dan sebagainya. Untuk syntax-syntax dan cara-cara penggunaan dari css dapat lebih lengkap ditemukan pada <a href="https://www.w3schools.com/css/">CSS w3schools</a></p>
            <img src={css} alt="css" />
        </Container>
    )
}
export default CSS;