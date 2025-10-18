'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Navbar(){
const router = useRouter()


function handleLogout(){
localStorage.removeItem('adv_auth_token')
router.push('/login')
}


const isLogged = typeof window !== 'undefined' && !!localStorage.getItem('adv_auth_token')


return (
<div className="nav small card" style={{justifyContent:'space-between', padding:'12px'}}>
<div>
<Link href="/">Home</Link>
<span style={{margin:'0 8px'}}>•</span>
<Link href="/dashboard">Dashboard</Link>
</div>
<div style={{display:'flex', gap:8, alignItems:'center'}}>
{isLogged ? (
<button className="btn logout" onClick={handleLogout}>Logout</button>
) : (
<>
<Link href="/login">Login</Link>
<Link href="/register">Register</Link>
</>
)}
</div>
</div>
)
}