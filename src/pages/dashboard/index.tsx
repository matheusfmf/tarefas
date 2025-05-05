import { GetServerSideProps } from 'next'
import styles from './styles.module.css'
import Head from 'next/head'
import { getSession } from 'next-auth/react'

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Meu painel de tarefas
                </title>


            </Head>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const session = await getSession({ req })
    console.log(session)
    if (!session?.user) {
        // Se não tem usuario logado, redireciona para a página de login
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    };
};