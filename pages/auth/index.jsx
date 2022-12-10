import Image from "next/image"
import { Button, Container } from "react-bootstrap"
import styles from '../../styles/Auth.module.scss'
import Head from "next/head"
import Link from "next/link"

export default function Auth() {
    return (
        <Container fluid className={styles.Auth}>
            <div className="text-center pt-5">
                <img src="/images/logo-messenger.png" alt="logo messenger" width={50} />
                <h3 className="mt-5">Wellcome to Messenger</h3>
                <p>The simple way to text, call and video text right from your desktop.</p>
                <div className="fixed-bottom pb-5">
                    <Link href="/auth/signin"><Button className={styles.Button_1}>Sign in with Facebook</Button></Link>  <br />
                    <Link href="/auth/signin"><Button className={`${styles.Button_2} mt-3`}>Sign in with phone or email</Button> </Link>
                </div>
            </div>
        </Container>
    )
}