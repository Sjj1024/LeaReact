import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function About() {
    const [params] = useSearchParams()
    let id = params.get("id")
    console.log('得到的查询参数是:', params, id)

    return <div>About</div>
}
