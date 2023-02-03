import React from 'react'
import {Responsive, WidthProvider} from "react-grid-layout"
import styled from "styled-components"
import "/node_modules/react-grid-layout/css/styles.css";
import "../index.css"

const ResponsiveGridLayout = WidthProvider(Responsive)

const layout = [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
  { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
  { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
]

const GridItemWrapper = styled.div`
  background: #f5f5f5;
  // transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  // transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  // transition-duration: 150ms;
`

const GridItemContent = styled.div`
  // padding: 80px;
`

const Root = styled.div`
  // padding: 160px;
`

const Component = () => {
  return (
    <div>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={50}
        // width={100}
        draggableHandle=".grid-item__title"
      >
        <div key="blue-eyes-dragon">
            <div className="grid-item__title">
              DRAG ME
            </div>

        </div>
        <GridItemWrapper key="dark-magician">
          <GridItemContent>Not You Gee Oh</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="kuriboh">
          <GridItemContent>Not You Gee Oh</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="spell-caster">
          <GridItemContent>Not You Gee Oh</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="summoned-skull">
          <GridItemContent>Not You Gee Oh</GridItemContent>
        </GridItemWrapper>
      </ResponsiveGridLayout>
    </div>
  )
}

export default Component