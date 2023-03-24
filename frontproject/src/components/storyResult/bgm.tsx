import { useEffect, useRef, useState } from 'react'
import { useRecoilState, atom, RecoilState } from 'recoil'
import { genreAtom } from '../../atoms'
import styles from '../../assets/css/storyResultPage.module.css'
import fun1 from '../../assets/audio/fun/fun1.mp3'
import fun2 from '../../assets/audio/fun/fun2.mp3'
import fun3 from '../../assets/audio/fun/fun3.mp3'
import fun4 from '../../assets/audio/fun/fun4.mp3'
import fun5 from '../../assets/audio/fun/fun5.mp3'
import sad1 from '../../assets/audio/sad/sad1.mp3'
import sad2 from '../../assets/audio/sad/sad2.mp3'
import sad3 from '../../assets/audio/sad/sad3.mp3'
import sad4 from '../../assets/audio/sad/sad4.mp3'
import sad5 from '../../assets/audio/sad/sad5.mp3'
import romance1 from '../../assets/audio/romance/romance1.mp3'
import romance2 from '../../assets/audio/romance/romance2.mp3'
import romance3 from '../../assets/audio/romance/romance3.mp3'
import romance4 from '../../assets/audio/romance/romance4.mp3'
import romance5 from '../../assets/audio/romance/romance5.mp3'
import thriller1 from '../../assets/audio/thriller/thriller1.mp3'
import thriller2 from '../../assets/audio/thriller/thriller2.mp3'
import thriller3 from '../../assets/audio/thriller/thriller3.mp3'
import thriller4 from '../../assets/audio/thriller/thriller4.mp3'
import thriller5 from '../../assets/audio/thriller/thriller5.mp3'

// 버튼 아이콘
import { RiMusic2Fill } from 'react-icons/ri'
import { TbMusicOff } from 'react-icons/tb'

//음원 출처: https://pixabay.com/ko/music/
//배경음악 플레이, 일시정지
export const playState = atom<boolean>({
  key: 'playState',
  default: false,
})

function BGMPlayer() {
  // 재생 상태
  const myRef = useRef<HTMLAudioElement>(null)
  const [play, setPlay] = useRecoilState(playState)
  // 오디오 파일
  // interface audioFileType {
  //   [key: string]: [value: string]
  // }

  const [genre, setGenre] = useRecoilState(genreAtom)

  let idx = Math.floor(Math.random() * 3)

  const funBgm = [fun1, fun2, fun3, fun4, fun5]
  const sadBgm = [sad1, sad2, sad3, sad4, sad5]
  const romanceBgm = [romance1, romance2, romance3, romance4, romance5]
  const thrillerBgm = [thriller1, thriller2, thriller3, thriller4, thriller5]

  //   const audioFile: audioFileType = {
  //     재미:[]=[fun1, fun2, fun3, fun4, fun5],
  //     슬픔:=[fun1, fun2, fun3, fun4, fun5],
  //    재미=[fun1, fun2, fun3, fun4, fun5],
  //  재미=[fun1, fun2, fun3, fun4, fun5],
  //   }

  const [bgm, setBgm] = useState('')

  const changeBgm = (idx: number) => {
    console.log('222')
    if (genre === '재미') setBgm(funBgm[idx])
    else if (genre === '슬픔') setBgm(sadBgm[idx])
    else if (genre === '로맨스') setBgm(romanceBgm[idx])
    else if (genre === '공포') setBgm(thrillerBgm[idx])
    console.log(genre)
    start()
  }
  // 재생
  const start = () => {
    if (myRef.current) {
      myRef.current.play()
    }
    setPlay(true)
  }
  // 일시 정지
  const stop = () => {
    if (myRef.current) {
      myRef.current.pause()
    }
    setPlay(false)
  }

  useEffect(() => {
    idx = Math.floor(Math.random() * 3)
    changeBgm(idx)
  }, [])

  useEffect(() => {
    if (!myRef.current) return
    if (play) {
      myRef.current.play()
    } else myRef.current.pause()
  }, [play])

  return (
    <>
      <audio ref={myRef} src={bgm} loop autoPlay></audio>
      {play ? (
        // 일시정지 버튼
        <button className={styles.sound_btn} onClick={stop}>
          <TbMusicOff className={styles.sound_icon} />
        </button>
      ) : (
        // 재생 버튼
        <button className={styles.sound_btn} onClick={start}>
          <RiMusic2Fill className={styles.sound_icon} />
        </button>
      )}
    </>
  )
}

export default BGMPlayer
