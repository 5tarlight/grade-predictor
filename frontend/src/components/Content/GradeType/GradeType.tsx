import { FC } from 'react'
import classnames from 'classnames/bind'
import style from './GradeType.scss'
import CheckBox from './CheckBox/CheckBox'

const cx = classnames.bind(style)

const GradeType: FC<{}> = () => {
  return (
    <div className={cx('check-box')}>
      <>
        <CheckBox>점수</CheckBox>
        <CheckBox>등급</CheckBox>
      </>
    </div>
  )
}

export default GradeType
