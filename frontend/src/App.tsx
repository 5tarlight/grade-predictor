import AdBox from './components/AdBox/AdBox';
import styles from './styles/App.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const App = () => {
  return (
    <div className={cx('App')}>
      <div className={cx('left-bar')}>
        <AdBox isRight={false}>tlqkf</AdBox>
      </div>
      <div className={cx('content')}>
        Contents
      </div>
      <div className={cx('right-bar')}>
        <AdBox isRight={true} />
      </div>
    </div>
  );
}

export default App;
