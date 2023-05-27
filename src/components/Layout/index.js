import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <div className='tags'>
          <div className='top-tags'>
            <span className="top-tag-html">&lt;html&gt;</span>
            <span className="top-tag-body">&lt;body&gt;</span>
          </div>
          <Outlet />
          <div className='bottom-tags'>
            <span className="bottom-tag-html">&lt;/html&gt;</span>
            <span className="bottom-tag-body"> &lt;/body&gt; </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout