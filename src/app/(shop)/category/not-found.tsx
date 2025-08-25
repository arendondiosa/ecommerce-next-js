
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
      <h1>404 not found</h1>
      <Link href={'/'}>Regresar</Link>
    </div>
  )
}

export default notFound