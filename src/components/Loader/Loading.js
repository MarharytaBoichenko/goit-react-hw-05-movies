import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loading() {
  return (
    <div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        // className={s.loader}
        timeout={3000} //3 secs
      />
    </div>
  );
}
