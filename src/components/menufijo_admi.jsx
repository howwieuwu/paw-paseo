import React from 'react'

import styles from '@/app/styles/menufijo.module.css'

function menufijo_admi() {
    return (
    <section className={styles.MenuFijo}>
            <section class={styles.OpcionesSubrayado}>
                <h1>Perfil</h1>
            </section>
            <a href="/html/DemasAdmin.html">
                <section className={styles.Opciones}>
                    <h1 className={styles.Texto}>Administradores</h1>
                </section>
            </a>
            <a href="/html/Cuidadores.html">
                <section className={styles.Opciones}>
                    <h1 class="Texto">cuidadores</h1>
                </section>
            </a>
            <a href="/html/Usuarios.html">
                <section className={styles.Opciones}>
                    <h1 className={styles.Texto}>Usuarios</h1>
                </section>
            </a>
            <a href="/html/Preguntas.html">
                <section className={styles.Opciones}>
                    <h1 className={styles.Texto}> Preguntas Frecuentes</h1>
                </section>
            </a>
        </section>
        )
}

export default menufijo_admi