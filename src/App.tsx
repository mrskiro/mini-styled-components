import * as React from "react"
import { styled } from "./styled"

export const App = () => {
  const Hoge = styled.h1(`
    font-size: 2.6rem;
  `)
  return (
    <div>
      <Hoge>hoge</Hoge>
    </div>
  )
}
