
import { Col, Container, Form, FormControl, FormGroup, InputGroup, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.scss'
import { ChatDotsFill, ChatFill, HouseDoorFill, PencilSquare, CameraFill, TelephoneFill, CameraVideoFill, Search, ThreeDots, PlusCircleFill, HandThumbsUpFill } from 'react-bootstrap-icons'
import { Messenger } from '../components/messenger'

const Taskbar = () => {
  return (<div className={styles.Taskbar}>
    <ul>
      <li>
        <ChatFill />
      </li>
      <li>
        <HouseDoorFill />
      </li>
      <li>
        <ChatDotsFill />
      </li>
    </ul>
    <span className={styles.Taskbar__bottom}>
      <img src='/images/avatar-default.png' />
    </span>
  </div>)
}

const ListMessenger = () => {
  return (
    <div className={styles.ListMessenger}>
      <div>
        <div className='d-flex justify-content-between'>
          <h5>Chats</h5>
          <PencilSquare />
        </div>
        <div className='mt-4'>
          <Form>
            <FormGroup>
              <FormControl placeholder='Search' />
            </FormGroup>
          </Form>
        </div>
      </div>
      <Row className={styles.UserInboxed}>
        <Col md={3}>

          <div className='text-center'>
            <div className={styles.UserInboxed__item}>
              <CameraVideoFill />
            </div>
            <span className={styles.UserInboxed__name}>
              Start
              <br />
              call
            </span>
          </div>
        </Col>
        <Col md={3}>
          <div className='text-center'>
            <div className={styles.UserInboxed__item}>
              <img src='/images/avatar-default.png' />
              <div className={styles.UserInboxed__item__online}></div>
            </div>
            <span className={styles.UserInboxed__name}>
              Lê Tiến Đạt
            </span>
          </div>
        </Col>
        <Col md={3}>
          <div className='text-center'>
            <div className={styles.UserInboxed__item}>
              <img src='/images/avatar-default.png' />
              <div className={styles.UserInboxed__item__online}></div>
            </div>
            <span className={styles.UserInboxed__name}>
              Lê Tiến Đạt
            </span>
          </div>
        </Col>
        <Col md={3}>
          <div className='text-center'>
            <div className={styles.UserInboxed__item}>
              <img src='/images/avatar-default.png' />
              <div className={styles.UserInboxed__item__online}></div>
            </div>
            <span className={styles.UserInboxed__name}>
              Lê Tiến Đạt
            </span>
          </div>
        </Col>
      </Row>
      <div>
        <Messenger />
      </div>
    </div>)
}

const MainMessenger = () => {
  return (
    <div className={styles.MainMessenger}>
      <div className={styles.MainMessenger__top}>
        <div className={styles.MainMessenger__top__left}>
          <img src='/images/avatar-default.png' alt='avatar' />
          <div className={styles.MainMessenger__top__left__info}>
            <span className={styles.MainMessenger__top__left__info__name}>Lê Tiến Đạt</span>
            <br />
            <span className={styles.MainMessenger__top__left__info__active}>Active now</span>
          </div>
        </div>
        <div className={styles.MainMessenger__top__right}>
          <ul className={styles.MainMessenger__top__right__action}>
            <li>
              <TelephoneFill />
            </li>
            <li>
              <CameraVideoFill />
            </li>
            <li>
              <Search />
            </li>
            <li>
              <ThreeDots />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.MainMessenger__main}>
        <p className='bg-danger'>Là ai mang đắng đi xa</p>
      </div>
      <div className={styles.MainMessenger__bottom}>
        <div className={styles.MainMessenger__bottom__item}>
          <PlusCircleFill />
          <FormControl placeholder='Type a messenger...' />
          <HandThumbsUpFill />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Container fluid className={styles.Home}>
      <Row>
        <Col md={1}>
          <Taskbar />
        </Col>
        <Col className='p-0' md={3}>
          <ListMessenger />
        </Col>
        <Col md={8} className="p-0" >
          <MainMessenger />
        </Col>
      </Row>
    </Container>
  )
}
