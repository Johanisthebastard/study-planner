// import { useState } from "react";
// import { useStore } from "../../data/store"

// const Item = ({ item }) => {
//   const [isChecked, setIsChecked] = useState(item.done);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedText, setEditedText] = useState(item.text);
//   const toggleTodo = useStore((state) => state.toggleTodo);

//   const handleChange = () => {
//     setIsChecked(!isChecked);
// 	toggleTodo(item.id);
//   };

//   const handleTextChange = (event) => {
//     setEditedText(event.target.value);
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleEditSubmit = () => {
//     setIsEditing(false);
//   };

//   let itemClass = "";
//   if (item.done) itemClass += "done";
//   if (item.late) itemClass += "due";

//   return (
//     <div className="item">
//       <input type="checkbox" checked={isChecked} onChange={handleChange} />
//       {isEditing ? (
//         <>
//           <input type="text" value={editedText} onChange={handleTextChange} />
//           <span title="Spara" onClick={handleEditSubmit}>
//             💾
//           </span>
//         </>
//       ) : (
//         <>
//           <label className={itemClass} onClick={handleChange}>
//             {editedText}
//           </label>
//           <span title="Ändra" onClick={handleEditClick}>
//             ✍️
//           </span>
//           <span title="Ta bort">🗑️</span>
//         </>
//       )}
//       {/* <span title="Snooza">💤</span> */}
//     </div>
//   );
// };

// export default Item;



import { useState } from "react";
import { useStore } from "../../data/store";

const Item = ({ item }) => {
  const [isChecked, setIsChecked] = useState(item.done);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const deleteTodo = useStore((state) => state.deleteTodo); 

  const handleChange = () => {
    setIsChecked(!isChecked);
    toggleTodo(item.id);
  };

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => { 
    deleteTodo(item.id);
  };

  let itemClass = "";
  if (item.done) itemClass += "done";
  if (item.late) itemClass += "due";

  return (
    <div className="item">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleTextChange} />
          <span title="Spara" onClick={handleEditSubmit}>
            💾
          </span>
        </>
      ) : (
        <>
          <label className={itemClass} onClick={handleChange}>
            {editedText}
          </label>
          <span title="Ändra" onClick={handleEditClick}>
            ✍️
          </span>
          <span title="Ta bort" onClick={handleDeleteClick}>🗑️</span> 
        </>
      )}
      {/* <span title="Snooza">💤</span> */}
    </div>
  );
};

export default Item;
