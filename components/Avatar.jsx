import React from 'react'

import genders from '../constants/genders'

function Avatar (props) {
  let gender = 'female'
  if (props.gender === genders.nonBinary) gender = 'non-binary'
  if (props.gender === genders.female) gender = 'female'
  if (props.gender === genders.male) gender = 'male'
  return (
    <div className={`is-avatar is-${gender}`} />
  )
}
export default Avatar
