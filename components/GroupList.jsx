import React from 'react'
import Link from 'next/link'
import Group from './Group'
import Title from './Title'
import AddGroup from './AddGroup'

function GroupList (props) {
  return (
    <div className='group-list'>
      <Title
        size='3'
        text='Tus Grupos'
      />
      <div className='columns is-multiline'>
        {props.groups.map((group, index) => {
          return (
            <div className='column is-full' key={index}>
              <Link href='/groups/[uuid]' as={`/groups/${group._id}`}>
                <a>
                  <Group
                    name={group.name}
                    students={[]}
                    tasksQuantity={group.students ? group.tasks.length : 0}
                    studentsQuantity={group.students ? group.students.length : 0}
                  />
                </a>
              </Link>
            </div>
          )
        })}
        <div className='column is-full'>
          <AddGroup />
        </div>
      </div>
    </div>
  )
}

export default GroupList
