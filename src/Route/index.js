import git from "../assets/images/git.png";
import { Container } from "react-bootstrap";

const Git = () => {
    return (
        <Container>
            <h1>Git</h1>
            <h3>Versioning</h3>
            <p>Versioning adalah mengatur versi dari source code program, dengan menggunakan versioning, programming dapat mengatur apa saja yang bisa direlease dan fitur apa yang sudah stabil dan belum, salah satu aplikasi versioning yang banyak digunakan oleh developer adalah Git.</p>
            <h3>Fitur-fitur dalam Git</h3>
            <p>Di dalam git, terdapat fitur yand dapat digunakan untuk memudahkan untuk versioning, seperti git init, clone, config, diff, stash, log, checkout, reset, push, fetch, pull, branch, merge, request, dan sebagainya, dengan fitur yang lengkap inilah menyebabkan banyak programmer menggunakan VCS (Version Control System) ini.</p>
            <h3>Tugas</h3>
            <p>Pada tugas untuk Versioning Control menggunakan GIT ini, tugasnya adalah sebagai berikut, buatlah sebuah repository berisi project dengan total 4 branch (dalam kasus ini saya menggunakan master, develop, feature, feature2) selanjutnya buat penambahan dari salah satu branch feature, lalu merge ke dalam develop, lakukan pada kedua branch.</p>
            <img src={git} alt="Git" />
        </Container>
    )
}
export default Git;