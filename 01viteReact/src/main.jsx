import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const anotherElement=(
  <a href='https://google.com' target='_blank'>Visit google</a>
)
const anotherUser='chai aur user'
const reactElement=React.createElement(
  'a',
  {href:'https.//meta.com'},
  'click me to visit facebook',
  '  ',
  anotherUser,
  
  
)
const Element=React.createElement(
  'a',
  {href:'https://google.com'},
  
'This is site for google',
reactElement
)
function MyApp(){
  return(
    <div>
      Custom App!
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
    

  
  
)
