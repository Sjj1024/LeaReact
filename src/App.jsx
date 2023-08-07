import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Layout from './layout'
import Files from './components/Files'
import Share from "./components/Share"

export default function App() {
    return (
        <BrowserRouter>
            <Link to="/">商品页</Link>
            <Link to="/about">关于页</Link>
            <br />
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    {/* 定义二级路由结构 */}
                    <Route path="files" element={<Files></Files>}></Route>
                    <Route path="share" element={<Share></Share>}></Route>
                </Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
