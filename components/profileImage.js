import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

const ProfileImage = (...props) => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={props.height ? props.height : 160} // Desired size with correct aspect ratio
    width={props.width ? props.width : 200} // Desired size with correct aspect ratio
    className={utilStyles.borderCircle}
    alt={props.alt}
    priority
  />
)

export {
  ProfileImage
}
