import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import ContentBlock from "./ContentBlock";
import ContextMenu from "./ContextMenu";
import { PanelProps } from "./helpers/interfaces";

function Panel ({ sheetState, panelContent }: PanelProps) {

  const [sheet, setSheet, displayed, setDisplayed] = [...sheetState]

  const [renderedPanel, setRenderedPanel] = useState(renderPanelContents())

  // uses the panelType property of panelState to render a corresponding component.

  function renderPanelContents() {
    if (panelContent.panelType === "menu") {
      return (
        <Menu
          sheetState={sheetState}
          titlePath={panelContent.panelProps}
        />
      )
    } else if (panelContent.panelType === "content") {
      return (
        <ContentBlock
          sheetState={sheetState}
          titlePath={panelContent.panelProps}
        />
      )
    } else if (panelContent.panelType === "context menu") {
      return (
        <ContextMenu
          sheetState={sheetState}
        />
      )
    }
  }

  function closePanel() {
    if (panelContent.panelProps.length !== 0) {
      return (
        <button onClick={
          () => setDisplayed(displayed.filter( x => x.panelProps !== panelContent.panelProps))
        }>x</button>
      )
    }
  }

  // Renders the panel with contents.

  return (
    <div>
      {closePanel()}
      {renderedPanel}
    </div>
  )

}

export default Panel;
