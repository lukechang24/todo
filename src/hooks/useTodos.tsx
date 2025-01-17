import { useState, useCallback } from 'react';

const useTodos = () => {
  const [list, setList] = useState<Array<string>>([]);
  const [editItem, setEditItem] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number>(0);
  const [deletingIndex, setDeletingIndex] = useState<number>(0);

  const addItem = (item: string) => {
    if (item.trim()) {
      setList([...list, item]);
    }
  };

  const removeItem = (index: number) => {
    setDeletingIndex(index + 1);
    setTimeout(() => {
      setList(list.filter((_, i) => i !== index));
      setDeletingIndex(0);
    }, 275);
  };

  const beginEdit = (index: number, todo: string) => {
    setEditIndex(index + 1);
    setEditItem(todo);
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditItem(e.target.value);
  };

  const submitEdit = (index: number) => {
    const updatedList = [...list];
    updatedList[index] = editItem;
    setList(updatedList);
    setEditIndex(0);
    setEditItem('');
  };

  const cancelEdit = useCallback((e: MouseEvent) => {
    if (!['INPUT', 'LI', 'svg', 'path'].includes((e.target as HTMLElement).tagName) && editIndex) {
      setEditIndex(0);
      setEditItem('');
    }
  }, [editIndex]);

  return {
    list,
    editItem,
    editIndex,
    deletingIndex,
    addItem,
    removeItem,
    beginEdit,
    handleEdit,
    submitEdit,
    cancelEdit,
  };
};

export default useTodos;