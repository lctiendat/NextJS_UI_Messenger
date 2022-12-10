import { Button, Col, FormControl, Row } from "react-bootstrap";
import styles from './index.module.scss'

export default function SignIn() {
    return <div className={styles.SignIn}>
        <Row className="pt-5">
            <Col md={4} className="mx-auto">
                <img src="/images/logo-messenger.png" alt="logo" />
                <h4 className="mt-4">Sign in to Get Started</h4>
                <FormControl className="mt-5" placeholder="Email or phone numer" />
                <FormControl className="mt-2" placeholder="Password" />
                <Button disabled className="w-100">Login</Button>
                <p className="mt-4">Forgot your password?</p>
            </Col>
        </Row>
    </div>
}