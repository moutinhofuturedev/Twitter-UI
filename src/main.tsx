import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Separator } from './components/Separator'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />
          <Form />
          <Separator />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>
);
