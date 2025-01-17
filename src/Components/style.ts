import { styled, keyframes, css } from "styled-components"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { ChevronUpIcon } from "@heroicons/react/16/solid"

interface TodoProps {
    editing: boolean;
    isDeleting: boolean;
    isEmpty: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const S: Record<string, any>= {}

S.List = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`

S.AddForm = styled.form`
  display: flex;
  margin-bottom: 15px;
`

S.Todo = styled.div<TodoProps>`
  opacity: 0;
  ${(props) =>
    props.isDeleting
      ? css`
          animation: ${fadeOut} 0.25s forwards;
        `
      : css`
          animation: ${fadeIn} 0.5s forwards;
        `}
`;

S.TodoInput = styled.input`
  width: 100%;
  border-radius: 4px;
  padding: 0 16px;
`

S.ItemBlock = styled.div<TodoProps>`
  display: ${props => props.editing ? "none" : "flex"};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 6px 0 6px;
`

S.Item = styled.li`
  font-size: 16px;
  width: 80%;
  word-wrap: break-word;
  transition: all 0.3s ease;
  /* Minimal hover effect */
  padding: 12.25px 0 12.25px 10px;
  border-radius: 8px;
  &:hover {
    background-color: #fff;
  }
`

S.Delete = styled.button`
  background-color: #e74c3c;
  color: white;
  border-radius: 4px;
  border-color: transparent;
  &:hover {
      background-color: #c0392b;
  }
`

S.EditingBlock = styled.div<TodoProps>`
  display: ${props => props.editing ? "flex" : "none"};
  justify-content: space-between;
  align-items: center;
  padding: 6px 0 6px;
`

S.Edit = styled.input`
  width: 70%;
  border-radius: 4px;
  padding: 8px 0px 8px 6px;
  margin: 4px 0 4px;
`

S.SubmitChange = styled.button`
`

S.AddButton = styled.button`
  background-color: transparent;
  color: #333; /* Dark grey text */
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  white-space: nowrap;
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
  margin: 0 14px 0 4px;
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

S.Message = styled.p<TodoProps>`
    display: ${props => props.isEmpty ? "block" : "none"};
    font-style: italic;
    text-align: center;
    margin-top: 25px;
    animation: ${fadeIn} 0.5s forwards;
`


export default S