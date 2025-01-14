import { styled } from "styled-components"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { ChevronUpIcon } from "@heroicons/react/16/solid"

interface TodoProps {
    editing: boolean;
}

const S: Record<string, any>= {}

S.List = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`

S.AddForm = styled.form`
    display: flex;
`

S.Todo = styled.div`
  opacity: 0;
  animation: fadeIn 0.5s both;
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

S.TodoInput = styled.input`
    width: 100%;
    border-radius: 4px;
    padding: 8px 16px;
`

S.ItemBlock = styled.div<TodoProps>`
    display: ${props => props.editing ? "none" : "flex"};
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
`

S.Item = styled.li`
    width: 100%;
    padding: 2px 0;
    transition: all 0.3s ease;
    /* Minimal hover effect */
    &:hover {
        color: red;
    }
`

S.Delete = styled.button`
    background-color: #e74c3c;
    color: white;
    border-radius: 5px;
    border: none;
    &:hover {
        background-color: #c0392b;
    }
`

S.EditingBlock = styled.div<TodoProps>`
    display: ${props => props.editing ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

S.Edit = styled.input`
    width: 100%;
    border-radius: 4px;
    padding: 2px 0px;
`

S.SubmitChange = styled.button`
`

S.AddButton = styled.button`
  background-color: transparent;
  color: #333; /* Dark grey text */
  font-size: 16px;
  font-weight: 600;
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

S.ArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2px;
    color: gray;
`

S.Up = styled(ChevronUpIcon)`
    width: 20px;
    height: 20px;
`

S.Down = styled(ChevronDownIcon)`
    width: 20px;
    height: 20px;
`

export default S