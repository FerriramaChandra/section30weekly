import introduction from "../../assets/images/introduction.png"
import { Container } from "react-bootstrap"

const Introduction = () => {
    return (
        <Container>
            <h1>Introduction UI / UX</h1>
            <h3>User Exprience (UX)</h3>
            <p>User exprience adalah bagaimana pengalaman pengguna atau user ketika menggunakan product, UX ini mencangkup field yang besar yakni Business logic, technology, intraction logic, design, computer communication dan business</p>
            <h3>User Interface (UI)</h3>
            <p>User interface adalah gambar visual atau tampilan yang diliat langsung oleh pengguna, User Interface yang baik memilik 4 pilar yakni, Konsisten, dalam hal desain tidak dirombak habis-habisan, Tetap dibuat simple, Typography yang baik, Menampilkan feedback yang informative agak tidak membingungkan pengguna.</p>
            <h3>Prototype</h3>
            <p>Prototype adalah simulasi dari final product, hal ini diperlukan agak memiliki gambaran tentang apa yang akan dibuat, sebelum menginvestasikan waktu dan tenaga ke dalamnya. Prototype mempunyai 3 pilar yakni, Representation untuk menunjukkan platform yang digunakan, Precision Untuk membuat tepat seperti prototype, Intractivity Menunjukkan intraksi dengan pengguna.</p>
            <img src={introduction} alt="introduction UI UX" />
        </Container>
    )
}
export default Introduction