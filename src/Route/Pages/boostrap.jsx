import { Container } from "react-bootstrap";
import botsi from "../../assets/images/botsi.png"

const Botsi = () => {
    return (
        <Container>
            <h1>Bootstrap</h1>
            <h3>Apa itu framework frontend</h3>
            <p>Framework adalah sebuah kerangka kerja yang digunakan untuk mengembangkan website. Framework ini diciptakan untuk membantu web developer dalam menulis baris kode. Dengan menggunakan framework penulisan kode akan jauh lebih mudah, cepat, dan terstruktur rapi. Fungsi utama dari framework adalah mempercepat pembuatan website, membuat kode lebih terstruktur, dan mempermudah perawatan website</p>
            <h3>Apa itu Bootstrap</h3>
            <p>Bootstrap adalah kerangka kerja CSS yang sumber terbuka dan bebas untuk merancang situs web dan aplikasi web. Kerangka kerja ini berisi templat desain berbasis HTML dan CSS untuk tipografi, formulir, tombol, navigasi, dan komponen antarmuka lainnya, serta juga ekstensi opsional JavaScript.</p>
            <h3>Kenapa memilih bootstrap</h3>
            <p>Bootstrap dirancang untuk responsive, banyak sekali hal yang bisa dibuat dalam website yang dipermudah dengan menggunakan bootstrap, seperti pembuatan navbar dengan class `container`, terdapat banyak sekali class di dalamnya, dan dengan bootstrap terkini saat ini (Bootstrap 5) terdapat fitur untuk mengkostumisasi komponen-komponen ada di dalam bootstrap, untuk dokumentasi lebih lanjut mengenai bootstrap dalam langsung mengunjungi <a href="https://getbootstrap.com">Bootstrap</a></p>
            <img src={botsi} alt="Bootstrap"></img>
        </Container>
    )
}
export default Botsi;