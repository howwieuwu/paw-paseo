import React from 'react'
import Image from 'next/image'
import styles from '@/app/styles/header.module.css'


function header() {
    return (
    <>
    <header className={styles.Encabezado}>
        <section className={styles.Logo}>
            .....
        </section>
        <section className={styles.BotonCerrarSesion}>
            <button className={styles.cerrar}>Cerrar Sesión</button>
        </section>
        <section className={styles.FotoPerfil}>
            <img class={styles.FotoPerfil_Img} src="/img/admin.png" alt=""></img>
        </section>
    </header>
    </>
    )
}

export default header
