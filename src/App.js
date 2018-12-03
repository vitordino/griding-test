import React from 'react'
import styled from 'styled-components'
import { GridingProvider, Row, Cell } from 'griding'
import { randomColor, array, randomSize } from './utils'
import AspectRatio from './components/AspectRatio'
import Blueprint from './components/Blueprint'
import './App.css'

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 48rem;
  position: relative;
  overflow: hidden;
  padding: 0 1rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 0.25em;
`

const Link = styled.a`
  display: block;
  font-weight: 500;
  margin-bottom: 1.5em;
`

const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  font-size: 0.875rem;
  width: 100%;
  height: 100%;
  border: 2px solid ${p => p.background};
  color: ${p => p.background};
`

const App = () => (
  <GridingProvider>
    <Container>
      <div style={{position: 'relative'}}>
        <Title>griding test</Title>
        <Link href='https://github.com/vitordino/griding'>github</Link>
        <Row vertical-gutter>
          {array(40).map(x => (
            <Cell
              xs={randomSize(x)}
              sm={randomSize(x)}
              md={randomSize(x)}
              lg={randomSize(x)}
              xg={randomSize(x)}
            >
              <AspectRatio>
                <Square background={randomColor(x)}>
                  <code>{x}</code>
                </Square>
              </AspectRatio>
            </Cell>
          ))}
        </Row>
        <Blueprint/>
      </div>
    </Container>
  </GridingProvider>
)

export default App
