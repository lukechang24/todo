import S from "./style"
import React, { useState, useEffect } from "react"

const TodoList = () => {
  const [item, setItem] = useState<string>("")
  const [list, setList] = useState<Array<string>>([])
  const [editItem, setEditItem] = useState<string>("")
  const [editIndex, setEditIndex] = useState<any>(null)
  const handleItem = (e: any) => {
    setItem(e.target.value)
  }
  const addItem = () => {
    if (item) {
      setList([...list, item])
      setItem("")
    }
  }
  const removeItem = (index: number) => {
    const updatedList = [...list]
    updatedList.splice(index, 1)
    setList(updatedList)
  }
  const handleEditIndex = (e: any, index : number, todo: string) => {
    console.log(index)
    setEditIndex(index)
    setEditItem(todo)
  }
  const handleEdit = (e: any) => {
    setEditItem(e.target.value)
  }
  const handleEditItem = (index: number) => {
    const updatedList = [...list]
    updatedList[index] = editItem
    setList(updatedList)
    setEditIndex(null)
    setEditItem("")
  }
  useEffect(() => {
    console.log(list)
  }, [list])
  return (
    <div>
      <input onChange={handleItem} value={item}></input>
      <button onClick={addItem}>add</button>
     {list.map((todo, i) => (
        <S.Todo key={i}>
          <S.ItemBlock editing={i === editIndex}>
            <S.Item onClick={(e: any) => handleEditIndex(e, i, todo)}>{todo}</S.Item>
            <S.Delete onClick={() => removeItem(i)}>X</S.Delete>
          </S.ItemBlock>
            <S.EditingBlock editing={i === editIndex}>
              <S.Edit value={editItem} onChange={handleEdit}></S.Edit>
              <S.SubmitChange onClick={(e: any) => handleEditItem(i)}>V</S.SubmitChange>
            </S.EditingBlock>
        </S.Todo>
     ))}
    </div>
  );
}

export default TodoList
