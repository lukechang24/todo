import S from "./style"
import React, { useState, useEffect, useCallback } from "react"

const TodoList = () => {
  const [item, setItem] = useState<string>("")
  const [list, setList] = useState<Array<string>>([])
  const [editItem, setEditItem] = useState<string>("")
  const [editIndex, setEditIndex] = useState<any>(null)
  const handleItem = (e: any) => {
    setItem(e.target.value)
  }
  const addItem = (e: any) => {
    e.preventDefault()
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
  const beginEdit = (e: any, index : number, todo: string) => {
    setEditIndex(index + 1)
    setEditItem(todo)
    const inputEl = document.getElementById(`edit${index}`)
    setTimeout(() => {
      inputEl.focus()
    }, 50)
  }
  const handleEdit = (e: any) => {
    setEditItem(e.target.value)
  }
  const submitEdit = (e: any, index: number) => {
    e.preventDefault()
    const updatedList = [...list]
    updatedList[index] = editItem
    setList(updatedList)
    setEditIndex(null)
    setEditItem("")
  }
  const cancelEdit = useCallback((e: any) => {
    const element = e.target.tagName
    console.log(element, "outside")
    if (element !== "INPUT" && element !== "LI" && editIndex) {
      console.log(element)
      setEditIndex(null);
      setEditItem("");
    }
  }, [editIndex])
  useEffect(() => {
    const handleClick = (e: any) => cancelEdit(e)
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [cancelEdit])
  return (
    <S.List>
      <form onSubmit={addItem}>
        <S.TodoInput onChange={handleItem} value={item}></S.TodoInput>
        <S.AddButton onClick={addItem}>add</S.AddButton>
      </form>
     {list.map((todo, i) => (
        <S.Todo key={i}>
          <S.ItemBlock editing={i === editIndex - 1}>
            <S.Item onClick={(e: any) => beginEdit(e, i, todo)}>{todo}</S.Item>
            <S.Delete onClick={() => removeItem(i)}>X</S.Delete>
          </S.ItemBlock>
            <form onSubmit={(e: any) => submitEdit(e, i)}>
              <S.EditingBlock editing={i === editIndex - 1}>
                <S.Edit id={`edit${i}`} value={editItem} onChange={handleEdit}></S.Edit>
                <S.SubmitChange onClick={(e: any) => submitEdit(e, i)}>SAVE</S.SubmitChange>
              </S.EditingBlock>
            </form>
        </S.Todo>
     ))}
    </S.List>
  );
}

export default TodoList
