import React from "react"

export default function Schema({ data }: { data: object }) {
  return (
    <script
      key="schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
