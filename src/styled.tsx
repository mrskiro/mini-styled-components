import { nanoid } from "nanoid"

export const styled =
  (Tag: keyof JSX.IntrinsicElements) => (styles: string) => {
    return (props: any) => {
      const uniqueClassName = nanoid()
      createAndInjectCSSClass(uniqueClassName, styles)
      return <Tag className={uniqueClassName} {...props} />
    }
  }

styled.h1 = styled("h1")
styled.p = styled("p")
// ...styled.x = styled('x')

const createAndInjectCSSClass = (className: string, styles: string) => {
  if (!document.styleSheets[0]) {
    const styleTag = document.createElement("style")
    document.head.appendChild(styleTag)
  }
  const stylesheet = document.styleSheets[0]

  console.log(stylesheet)
  stylesheet.insertRule(`
    .${className} {
      ${styles}
    }
  `)
}
