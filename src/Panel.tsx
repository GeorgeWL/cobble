import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import { PanelProps } from "./helpers/interfaces";

function Panel ({ sheetState, panelContent }: PanelProps) {

  // uses the panelType property of panelState to render a corresponding component.

  function renderPanelContents() {
    if (panelContent.panelType === "menu") {
      return (
        <Menu
          sheetState={sheetState}
          titlePath={panelContent.panelProps}
        />
      )
    }
  }

  // Renders the panel with contents.

  return (
    <div>
      {renderPanelContents()}
    </div>
  )

}

export default Panel;
