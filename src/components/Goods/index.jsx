import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Goods() {
    const navigate = useNavigate()

    const handleAbout = () => {
        navigate('/about?id=1010')
    }

    return (
        <div>
            <div>Goods商品页面</div>
            <button onClick={handleAbout}>跳转到关于页面</button>
        </div>
    )
}
