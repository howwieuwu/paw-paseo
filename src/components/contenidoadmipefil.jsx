import styles from '@/app/styles/contenidoadmiperfil.module.css'

function contenidoadmipefil() {
    return (
    <section className={styles.Contenido_AdminPerfil}>
<main>
    <img className={styles.FotoPerfil2} src="/img/usuario.png" alt=""></img>
    <nav className={styles.InformacionAdmin}>
        <h1 className={styles.InformacionAdminText}>Nombre: </h1>
        <h1 className={styles.InformacionAdminText}>Correo: </h1>
        <h1 className={styles.InformacionAdminText}>Dirección</h1>
    </nav>
    <nav className={styles.InformacionAdmin}>
        <h1 className={styles.InformacionAdminText}>Fecha Nacimiento</h1>
        <h1 className={styles.InformacionAdminText}>Genero</h1>
        <h1 className={styles.InformacionAdminText}>Fecha de Reguistro</h1>
    </nav>
    <button className={styles.Editar} type="button">Editar<img class="EditarImagen" src="/img/Editar.png" alt=""></img></button>
</main>
</section>
)
}

export default contenidoadmipefil