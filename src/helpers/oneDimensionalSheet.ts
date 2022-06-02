import { endOfTitlePath } from "./endOfTitlePath";
import { SearchBlock } from "./interfaces";

// Method for converting a nested object sheet into a more searchable one-dimensional sheet.

export const oneDimensionalSheet = function convertNestedSheetToOneDimensionalSheet
  (arr: any[], titlePath: string[] = []): SearchBlock[] {

  let sheetObject: SearchBlock[] = []
  let titleArray = titlePath

  for (let i = 0; i < arr.length; i++) {
    if (endOfTitlePath(arr[i])) {
      sheetObject.push( { titlePath: [...titleArray, arr[i].title], content: arr[i].content } )
    } else {
      sheetObject.push(...oneDimensionalSheet(arr[i].content, [...titleArray, arr[i].title]))
    }
  }

  // Returns one-dimensional array of SearchBlocks.

  return sheetObject

}
