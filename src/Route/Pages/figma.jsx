import figma from "../../assets/images/figma.png"
import { Container } from "react-bootstrap";

const Figma = () => {
    return (
        <Container>
            <h1>Figma</h1>
            <h3>Apa itu Figma</h3>
            <p>Figma merupakan grafik vektor editor dan prototyping yang berbasis web, juga terdapat versi offline namun memiliki keterbatasan fitur</p>
            <h3>Keuntungan memakai Figma</h3>
            <p>Gratis, Dapat dijalan pada MAC dan PC, Kolaborasi yang dapat dilakukan secara real-time, Bisa mengimport sketch file (Namun tidak bisa mengexport ke sketch), Terdapat prototyping berkualitas,Terintegrasi spesifikasi untuk MAC dan PC, Fantastic team library, Namun untuk pengerjaan yang dilakukan sangat disarankan secara online.</p>
            <h3>Fitur dari Figma</h3>
            <p>Menggunakan F untuk membuat frame dan mengatur sesuai kebutuhan, dapat menambahkan teks dengan shorcut T, menggunakan ellipse tool menggunakan O, Shift + A untuk menambahkan layout baru, Memindahkan objek dengan shortcut V, Image placement tool menggunakan Shift + Control + K, Serta masih banyak lagi fitur dan shortcuut yang disediakan</p>
            <img src={figma} alt="figma" />
        </Container>
    )
}
export default Figma;