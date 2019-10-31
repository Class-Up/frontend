import React from 'react'

import Group from './Group'

function GroupList (props) {
  const { groups } = props

  return (
    <section>
      {
        groups.map(group => (
          <Group
            id={group._id}
            title={group.title}
            description={group.description}
            date={group.date}
            image={group.image}
            key={group._id}
          />
        ))
      }
    </section>
  )
}

export default GroupList