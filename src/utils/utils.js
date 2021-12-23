export default function getElement(title) {
  return filesState.find((file) => file.title === title);
}

export default function toggle(type, title) {
  var element = getElement(title);
  switch (type) {
    case "maximize":
      {
        const newElement = { ...element, isMaximized: !element.isMaximized };
        setFilesState((prevState) => ({ ...prevState, newElement }));
      }
      break;
    case "visible":
      {
        const newElement = { ...element, isVisible: !element.isVisible };
        setFilesState((prevState) => ({ ...prevState, newElement }));
      }
      break;
    case "onTaskbar":
      {
        const newElement = { ...element, isOnTaskbar: !element.isOnTaskbar };
        setFilesState((prevState) => ({ ...prevState, newElement }));
      }
      break;
  }
}
