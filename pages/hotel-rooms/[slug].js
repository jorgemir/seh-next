import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  
console.log('router:', router);
  return (
    <div>
        <h1>{router.query.slug}</h1>
        <p>Post: {router.contents}</p>
    </div>
    )
}

export default Post