import { FC } from 'react'
import styles from './Title.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const Title: FC<{}> = () => (
  <div className={cx('title')}>
    Grade-Predictor
  </div>
)

export default Title
