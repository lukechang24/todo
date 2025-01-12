import { styled } from "styled-components"

interface TodoProps {
    editing: boolean;
}

const S: Record<string, any>= {}

S.List = styled.div`
    display: flex;
    flex-direction: column;
`

S.Todo = styled.div`
`

S.TodoInput = styled.input`
    border-radius: 4px;
    padding: 8px 16px;
`

S.ItemBlock = styled.div<TodoProps>`
    display: ${props => props.editing ? "none" : "flex"};
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

S.Item = styled.li`
    width: 100%;
    padding: 10px 0;
    &:hover {
        color: red;
    }
`

S.Delete = styled.button`
`

S.EditingBlock = styled.div<TodoProps>`
    display: ${props => props.editing ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
`

S.Edit = styled.input`
    width: 100%;
    border-radius: 4px;
    padding: 10px 0px;
`

S.SubmitChange = styled.button`
`

S.AddButton = styled.button`
  background-color: transparent;
  color: #333; /* Dark grey text */
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #ccc; /* Subtle border */
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  /* Minimal hover effect */
  &:hover {
    background-color: #f4f4f4; /* Light gray background */
    border-color: #999; /* Darken the border */
  }

  /* Focus outline */
  &:focus {
    outline: none;
    border-color: #333; /* Dark border on focus */
  }
`

export default S