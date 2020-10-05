import { useRouter } from 'next/router'

export default function Breeds() {
    const router = useRouter()
    return (
        <div>
            <h1>Brreds Page</h1>
            <h2>List of all {router.query.breed}</h2>
        </div>
    )
}
