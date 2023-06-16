'use client'

import { useState } from 'react'

export function LikeButton ({ id, likes }) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? 'Me gusta' : 'No me gusta'}
    </button>
  )
}
