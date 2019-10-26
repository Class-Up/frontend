import React from 'react'

import Title from '../components/Title'
import Avatar from '../components/Avatar'

function TeacherProfile (props) {
	return (
		<Avatar
			image='http://cdn.classup.space/assets/ilustrations/pluto-suit-ready.svg'
		>
			<Title
				isBlack
				text={props.name}
			/>
		</Avatar>
	)
}
export default TeacherProfile
