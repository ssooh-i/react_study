import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App' //app은 컴포넌트
// import reportWebVitals from './reportWebVitals'

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(
//   // <React.StrictMode> //코드가 잘못되었는지 판닺하여 적절한 오류메시지를 보여주는 컴포넌트
//   <App />
//   // </React.StrictMode>
// )

// reportWebVitals() //앱의 성능을 측정하는 기능

let pPyysicalDOM = document.createElement('p')
pPyysicalDOM.innerText = 'Hello 물리DOM'
document.body.appendChild(pPyysicalDOM)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const pVirtualDOM = React.createElement('p', null, 'Hello 가상DOM')

//document.body.appendChild(pVirtualDOM) 이런 코드는 사용할 수 없다.
//pVirtualDOM은 document.body.appendChild가 이해할 수 있는 DOM 객체가 아니기 때문입니다.

root.render(pVirtualDOM)
