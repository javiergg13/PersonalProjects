import Link from 'next/link'

const fetchSinlgePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(response => response.json())
}

export default async function APost ({ params, children}) {
  const { id } = params
  const post = await fetchSinlgePost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}
