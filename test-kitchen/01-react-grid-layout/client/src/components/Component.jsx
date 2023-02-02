import React from 'react'
import GridLayout, {Responsive, WidthProvider} from "react-grid-layout"
import styled from "styled-components"

const ResponsiveGridLayout = WidthProvider(Responsive)

const layout = [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1, isResizable: true },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
  { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
  { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1, resizeHandles: ['se', 'n'] }
]

const GridItemWrapper = styled.div`
  background: #f5f5f5;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`

const GridItemContent = styled.div`
  padding: 8px;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`

const Root = styled.div`
  padding: 16px;
`

const Component = () => {
  return (
    <div>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={300}
        width={1000}
        isResizable={true}
        resizeHandles={['se', 's', 'n']}
        className='react-resizable-handle'
      >
      <GridItemWrapper key="blue-eyes-dragon">
          <GridItemContent>
            <span>Blue Eyes Dragon</span>
            <div onClick={e => 1}>Some more text, maybe a form in the future</div>
          </GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="dark-magician">
          <GridItemContent>Dark Magician</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="kuriboh">
          <GridItemContent>Kuriboh</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="spell-caster">
          <GridItemContent>Spell Caster</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="summoned-skull">
          <GridItemContent>Summoned Skull</GridItemContent>
        </GridItemWrapper>
      </ResponsiveGridLayout>
    </div>
  )
}

export default Component