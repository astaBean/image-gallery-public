import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
import { UploadElement2 } from '../components/fileUpload'

const Favicon = () => (
  <link
    rel="icon"
    href="/home/aistyna/home_projects/images-api-serveless/packages/public-site/public/favicon.ico"
  />
)

export default function Home () {
  return (
    <Layout home>
      <div className="container">
        <Head>
          <title>Image Gallery</title>
          <Favicon/>
        </Head>
        <main>
          <h1 className={styles.headingXl}>
            Welcome to my image gallery
          </h1>
          <p className={styles.headingLg}>
            Get started by uploading your images
          </p>
          <div className="d-flex justify-content-center">
            <UploadElement2/>
          </div>
        </main>
      </div>
    </Layout>

  )
}
