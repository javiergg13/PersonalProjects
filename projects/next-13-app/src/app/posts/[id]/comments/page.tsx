import Image from 'next/image'

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(response => response.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ fontSize: '10px', background: '#444' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image
            src={`https://unavatar.io/${comment.email}`}
            alt={comment.name}
            width={50}
            height={50}
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
