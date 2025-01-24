'use client'
import S from "./style"
import React, { useState, useEffect, useCallback } from "react"


const TodoList = () => {
  const [item, setItem] = useState<string>("")
  const [list, setList] = useState<Array<string>>([])
  const [editItem, setEditItem] = useState<string>("")
  const [editIndex, setEditIndex] = useState<number>(0)
  const [deletingIndex, setDeletingIndex] = useState<number>(0)

  const handleItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value)
  }

  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (item.trim()) {
      setList([...list, item])
      setItem("")
    }
  }

  const removeItem = (index: number) => {
    setDeletingIndex(index+1)
    setTimeout(() => {
      setList(list.filter((el, i) => i !== index))
      setDeletingIndex(0)
    }, 275)
  }

  const beginEdit = (e: React.MouseEvent<HTMLLIElement>, index : number, todo: string) => {
    setEditIndex(index + 1)
    setEditItem(todo)
    focus(index)
  }

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditItem(e.target.value)
  }

  const saveEdit = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault()
    const updatedList = [...list]
    updatedList[index] = editItem
    setList(updatedList)
    setEditIndex(0)
    setEditItem("")
  }

  const submitEdit = (e: React.FormEvent<HTMLFormElement>, index: number) => {
    e.preventDefault()
    const updatedList = [...list]
    updatedList[index] = editItem
    setList(updatedList)
    setEditIndex(0)
    setEditItem("")
  }

  const cancelEdit = useCallback((e: MouseEvent) => {
    const target = e.target
    if (target instanceof HTMLElement) {
      const element = target.tagName;
      if (!['INPUT', 'LI', 'svg', 'path', 'TEXTAREA'].includes(element) && editIndex) {
        setEditIndex(0);
        setEditItem('');
      }
    }
  }, [editIndex])

  const moveItemUp = (index: number) => {
    if (index === 0) return
    const updatedList = [...list]
    const temp = updatedList[index]
    updatedList[index] = updatedList[index - 1]
    updatedList[index - 1] = temp
    setEditIndex(prev => prev - 1)
    setList(updatedList)
  }

  const moveItemDown = (index: number) => {
    if (index === list.length - 1) return
    const updatedList = [...list]
    const temp = updatedList[index]
    updatedList[index] = updatedList[index + 1]
    updatedList[index + 1] = temp
    setEditIndex(prev => prev + 1)
    setList(updatedList)
  }

  const focus = (index: number) => {
    const inputEl = document.getElementById(`edit${index}`)
    if (inputEl) {
      setTimeout(() => {
        inputEl.focus()
      }, 50)
    }
  }

  useEffect(() => { 
    if (editIndex) {
      focus(editIndex)
    }
  }, [editIndex])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => cancelEdit(e)
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("click", handleClick);
    }
  }, [cancelEdit])

  useEffect(() => {
    const storedList = window.localStorage.getItem('list');
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('list', JSON.stringify(list));
  }, [list])

  return (
    <S.List>
      <S.AddForm onSubmit={() => addItem}>
        <S.TodoInput onChange={handleItem} value={item}></S.TodoInput>
        <S.AddButton onClick={addItem}>Add Task</S.AddButton>
      </S.AddForm>
     {list.map((todo, i) => (
        <S.Todo isDeleting={deletingIndex === i + 1} key={i}>
          <S.ItemBlock editing={i === editIndex - 1}>
            <S.Item onClick={(e: React.MouseEvent<HTMLLIElement>) => beginEdit(e, i, todo)}>{todo}</S.Item>
            <S.Delete onClick={() => removeItem(i)}>X</S.Delete>
          </S.ItemBlock>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitEdit(e, i)}>
              <S.EditingBlock editing={i === editIndex - 1}>
                <S.Edit id={`edit${i+1}`} value={editItem} onChange={handleEdit}></S.Edit>
                <S.ArrowContainer>
                  <S.Up onClick={() => moveItemUp(i)}></S.Up>
                  <S.Down onClick={() => moveItemDown(i)}></S.Down>
                </S.ArrowContainer>
                <S.SubmitChange onClick={(e: React.MouseEvent<HTMLButtonElement>) => saveEdit(e, i)}>SAVE</S.SubmitChange>
              </S.EditingBlock>
            </form>
        </S.Todo>
     ))}
     <S.Message isEmpty={list.length === 0}>no todos for now...</S.Message>
    </S.List>
  );
}

export default TodoList
