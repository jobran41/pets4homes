import { useRouter } from 'next/router'
export default function Type(){
    const router = useRouter()
    return (
        <h1>List Of All {router.query.type}</h1>
    )
}