import { ChangeEvent, FC, MouseEvent, useState } from 'react'
import classnames from 'classnames/bind'
import style from './GradeType.scss'

const cx = classnames.bind(style)

const GradeType: FC<{}> = () => {
  const [ isScore, setIsScore ] = useState(false)

  const handleChange = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation()
    console.log(isScore)
    setIsScore(!isScore)
  }

  return (
    <div className={cx('check-box')}>
      <input readOnly onClick={handleChange} onChange={e => { }} id='score' type="checkbox" className={cx('cb')} checked={isScore} />
      <label htmlFor='score' className={cx('label')}>점수</label>
      <input readOnly onClick={handleChange} onChange={e => { }} id='grade' type="checkbox" className={cx('cb', 'right')} checked={!isScore} />
      <label htmlFor='grade' className={cx('label')}>등급</label>
    </div>
  )
}

export default GradeType
