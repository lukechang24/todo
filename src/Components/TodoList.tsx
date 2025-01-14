import S from "./style"
import React, { useState, useEffect, useCallback } from "react"

const TodoList = () => {
  const [item, setItem] = useState<string>("")
  const [list, setList] = useState<Array<string>>([])
  const [editItem, setEditItem] = useState<string>("")
  const [editIndex, setEditIndex] = useState<number>(0)

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
    setList(list.filter((el, i) => i !== index))
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
    if (element !== "INPUT" && element !== "LI" && element !== "svg" && element !== "path" && editIndex) {
      console.log(element, "THIS")
      setEditIndex(null);
      setEditItem("");
    }
  }, [editIndex])

  const moveItemUp = (index: number) => {
    if (index === 0) return
    const updatedList = [...list]
    const temp = updatedList[index]
    updatedList[index] = updatedList[index - 1]
    updatedList[index - 1] = temp
    setEditIndex(editIndex - 1)
    console.log(editIndex, "this")
    setList(updatedList)
  }

  const moveItemDown = (index: number) => {
    if (index === list.length - 1) return
    const updatedList = [...list]
    const temp = updatedList[index]
    updatedList[index] = updatedList[index + 1]
    updatedList[index + 1] = temp
    setEditIndex(editIndex + 1)
    setList(updatedList)
  }

  useEffect(() => {console.log(editIndex)}, [editIndex])

  useEffect(() => {
    const handleClick = (e: any) => cancelEdit(e)
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [cancelEdit])
  return (
    <S.List>
      <S.AddForm onSubmit={addItem}>
        <S.TodoInput onChange={handleItem} value={item}></S.TodoInput>
        <S.AddButton onClick={addItem}>add</S.AddButton>
      </S.AddForm>
     {list.map((todo, i) => (
        <S.Todo key={i}>
          <S.ItemBlock editing={i === editIndex - 1}>
            <S.Item draggable onClick={(e: any) => beginEdit(e, i, todo)}>{todo}</S.Item>
            <S.Delete onClick={() => removeItem(i)}>X</S.Delete>
          </S.ItemBlock>
            <form onSubmit={(e: any) => submitEdit(e, i)}>
              <S.EditingBlock editing={i === editIndex - 1}>
                <S.Edit id={`edit${i}`} value={editItem} onChange={handleEdit}></S.Edit>
                <S.ArrowContainer>
                  <S.Up onClick={() => moveItemUp(i)}></S.Up>
                  <S.Down onClick={() => moveItemDown(i)}></S.Down>
                </S.ArrowContainer>
                <S.SubmitChange onClick={(e: any) => submitEdit(e, i)}>SAVE</S.SubmitChange>
              </S.EditingBlock>
            </form>
        </S.Todo>
     ))}
    </S.List>
  );
}

export default TodoList
