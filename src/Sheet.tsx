import React, { useState, useEffect } from 'react';
import Panel from "./Panel";
import { arrayEquals } from "./helpers/arrayEquals";
import { SheetProps, ContentPanel, MenuPanel } from "./helpers/interfaces";

function Sheet ({ sheet, setSheet }: SheetProps) {

  const initialMenu: ContentPanel | MenuPanel = { panelType: "menu", titlePath: [] }

  // Array of props for each currently open panel
  const [displayed, setDisplayed] = useState([initialMenu])

  // Renders a Panel component for each object in "displayed" state.
  return (
    <div>
      <button onClick={() => setDisplayed([initialMenu]) }>reset</button>
      {displayed.map( (panelContent, i) =>
        <Panel
          sheetState={[sheet, setSheet, displayed, setDisplayed]}
          panelContent={panelContent}
          key={JSON.stringify(panelContent) + i.toString()}
        />
      )}
    </div>
  )

}

export default Sheet;
