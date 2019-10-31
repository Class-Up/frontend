import React from 'react'
import Link from 'next/link'
import Group from './Group'
import Title from './Title'

function GroupList (props) {
  return (
    <div className='group-list'>
      <Title
        size='3'
        text='Tus Grupos'
      />
      {props.groups.map((group, index) => {
        return (
          <Link href='/groups/[uuid]' as={`/groups/${group._id}`} key={index}>
            <a>
              <Group
                name={group.name}
                students={props.students || []}
                tasksQuantity={props.students ? props.students.length : 0}
                studentsQuantity={props.students ? props.tasks.length : 0}
              />
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default GroupList
