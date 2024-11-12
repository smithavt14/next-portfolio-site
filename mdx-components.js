import Header from '/components/Header'
import Subtitle from '/components/Subtitle'
import Body from '/components/Body'

export function useMDXComponents(components) {
    return {
      ...components,
      Header,
      Subtitle,
      Body
    }
  }