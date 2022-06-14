import styles from '../styles/layout.module.css'
import Link from 'next/link'
import { Navigation } from './navigation'
import { CommonHeader } from './commonHeader'

export const siteTitle = 'Image Gallery'

export default function Layout ({ children, home }) {
  return (
    <div>
      <CommonHeader pageTitle={siteTitle}/>
      <header>
        <Navigation
          home={home}
        />
      </header>

      <main className="container">{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
