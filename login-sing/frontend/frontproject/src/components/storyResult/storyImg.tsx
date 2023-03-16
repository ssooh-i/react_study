import { useRecoilValue } from 'recoil'; 
import { ImageBit } from '../../atoms'
import classNames from "classnames/bind";
import styles from "../../assets/css/storyResultPage.module.css";

const style = classNames.bind(styles);

// 이야기 결과

function ResultImg() {

  const bitImage = useRecoilValue(ImageBit)

  return (
    <>
      <img className={style("story-result-image")} src={bitImage} alt="testimg" />
    </>
  );
}

export default ResultImg;