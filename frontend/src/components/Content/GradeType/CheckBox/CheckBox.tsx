import { FC } from 'react'
import classnames from 'classnames/bind'
import styles from './CheckBox.scss'

const cx = classnames.bind(styles)

interface Props {
  checked?: boolean
}

const CheckBox: FC<Props> = ({ checked, children }) => {
  return (
    <>
      <input id={children?.toString()} type="checkbox" className={cx('cb')} checked={checked} />
      <label htmlFor={children?.toString()} className={cx('label')}>{children}</label>
    </>
  )
}

export default CheckBox
