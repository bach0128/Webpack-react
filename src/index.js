import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom

import { createRoot } from 'react-dom/client' //

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>Hu Hi ho HtmlWebpackPlugin</h2>
        </div>
    )
}

// Render component App vào #root element
// ReactDOM.render(<App />, document.getElementById('root'))

const root = createRoot(document.getElementById('root'))
root.render(<App />)

