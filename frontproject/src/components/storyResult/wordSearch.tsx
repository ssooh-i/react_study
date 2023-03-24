import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { translateWord } from '../../api/storyApi'
import { saveWord } from '../../api/vocabularyApi'
import searchIcon from '../../assets/search-icon.png'
import saveIcon from '../../assets/save-icon.png'

import styles from '../../assets/css/wordSearch.module.css'
import { colorAtom } from '../../atoms'

export default function WordSearch() {
  const [dragText, setDragText] = useState('')
  const [mean, setMean] = useState('')
  const [searchList, setSearchList] = useState([
    {
      me: true,
      word: '',
      mean: '',
      text: '-1',
    },
  ])

  useEffect(() => {
    setSearchList(searchList.filter((item) => item.text !== '-1'))
  }, [])

  document.onmouseup = function () {
    let selectedObj = window.getSelection()
    let selectText = selectedObj?.getRangeAt(0).toString()
    setDragText(selectText !== undefined ? selectText.trim() : 'sd')
  }

  interface chatInfo {
    me: boolean
    text: string
  }

  const save = async (word: string, mean: string) => {
    const response = await saveWord(word, mean)
    if (response.status === 200) alert('저장이 완료되었습니다')
  }

  const search = async (word: string) => {
    // const me = true
    // const text = `${dragText}의 뜻은 무엇인가요?`

    if (word === '' || word.indexOf(' ') !== -1) {
      alert('단어를 입력해주세요')
      return
    }

    const tmp = {
      me: true,
      word: word,
      mean: '',
      text: `'${word}'의 뜻은 무엇인가요?`,
    }

    const response = await translateWord(word)
    let result = response.data.content
    if (result.indexOf('.') !== -1) {
      result = result.substring(0, result.length - 1)
    }
    setMean(result)
    // const me2 = false
    // const text2 = `${dragText}의 뜻은 ${word}입니다.`
    const tmp2 = {
      me: false,
      word: word,
      mean: result,
      text: `'${word}'의 뜻은 '${result}'입니다.`,
    }
    setSearchList((searchList) => [tmp2, ...searchList])
    setSearchList((searchList) => [tmp, ...searchList])
  }

  const saveInput = (e: any) => {
    setInput(e.target.value)
  }

  const [color, setColor] = useRecoilState(colorAtom)
  const [input, setInput] = useState('')
  return (
    <>
      <div className={styles.notice}>단어를 드래그해서 뜻을 검색하세요</div>
      <div className={styles.container}>
        <div className={styles.wordSearch}>
          <input
            className={styles.wordInput}
            type="text"
            value={dragText}
          ></input>
          <input
            className={styles.wordInput2}
            type="text"
            onChange={saveInput}
          ></input>
          <button
            className={`${styles.btn} ${styles[color]}`}
            onClick={() => {
              search(dragText)
            }}
          >
            search
          </button>

          <div
            className={`${styles.iconBox} ${styles[color]}`}
            onClick={() => {
              search(input)
            }}
          >
            <img className={styles.searchIcon} src={searchIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.resultBox}>
        {searchList.map((item) => {
          if (item.me)
            return (
              <>
                <div className={`${styles.me} ${styles.searchResult}`}>
                  {item.text}
                </div>
                <div style={{ clear: 'both' }}></div>
              </>
            )
          else
            return (
              <>
                <div className={`${styles.you} ${styles.searchResult}`}>
                  {item.text}{' '}
                  <button
                    className={styles.saveBtn}
                    onClick={() => {
                      save(item.word, item.mean)
                    }}
                  >
                    save
                  </button>
                </div>

                <div style={{ clear: 'both' }}></div>
              </>
            )
        })}
      </div>
    </>
  )
}
