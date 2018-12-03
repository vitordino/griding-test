import React from 'react'
import styled from 'styled-components'
import { Row, Cell } from 'griding'
import {array} from '../utils'

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	pointer-events: none;
	transition: 0.2s all;
`

const Marker = styled.div`
	height: 100%;
	background: rgba(0,0,238, 0.06);
`

const Blueprint = () => (
	<Wrapper>
		<Row style={{height: '100%'}}>
			{array(12).map(x => (
				<Cell xs={1} style={{height: '100%'}}><Marker/></Cell>
			))}
		</Row>
	</Wrapper>
)

export default Blueprint
