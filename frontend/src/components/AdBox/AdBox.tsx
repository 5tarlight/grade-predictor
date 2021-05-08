import { FC } from 'react'
import styles from './AdBox.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

interface Props {
  isRight: boolean
}

const AdBox: FC<Props> = ({ isRight, children }) => {
  return (
    <div className={cx('ad-box', { 'right': isRight })}>
      {children}
    </div>
  )
}

export default AdBox
