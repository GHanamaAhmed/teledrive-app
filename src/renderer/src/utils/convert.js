function convertToDesiredFormat(originalObject) {
  return {
    id: originalObject.ino ? originalObject.ino.toString() : 'unknown', // Check if ino is defined
    name: originalObject.name || 'unknown', // Use || to provide a default value if name is undefined
    ext: originalObject.type || 'unknown', // Use || to provide a default value if type is undefined
    isDir: !originalObject.isFile, // Assuming isFile is the opposite of isDir
    isHidden: false, // Assuming all files are not hidden by default
    isSymlink: false, // Assuming all files are not symlinks by default
    isEncrypted: false, // Assuming all files are not encrypted by default
    openable: true, // Assuming all files are openable by default
    selectable: true, // Assuming all files are selectable by default
    draggable: true, // Assuming all files are draggable by default
    droppable: false, // Assuming all files are not droppable by default
    dndOpenable: false, // Assuming all files are not dndOpenable by default
    size: originalObject.size || 0, // Use || to provide a default value if size is undefined
    modDate: originalObject.mtime ? new Date(originalObject.mtime) : new Date(), // Check if mtime is defined
    // childrenCount: originalObject.hasChild ? 1 : 0, // Assuming hasChild indicates if it has children
    // color: null, // Assuming no color information is provided
    // icon: null, // Assuming no icon information is provided
    // thumbnailUrl: null, // Assuming no thumbnail URL is provided
    // folderChainIcon: null // Assuming no folder chain icon information is provided
    // // Add any additional properties from originalObject as needed
  }
}

export { convertToDesiredFormat }
