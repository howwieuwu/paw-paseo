import React from 'react'

import MenuFijo from '@/components/menufijo_admi'

import styles from '@/app/styles/main.module.css'

import Contenido from '@/components/contenidoadmipefil'

function main_admi() {
    return (
    <main className={styles.Contenido1}>
    <MenuFijo />
    <Contenido />
    </main>
    )
}

export default main_admi