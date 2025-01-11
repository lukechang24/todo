import { styled } from "styled-components"

interface TodoProps {
    editing: boolean;
}

const S: Record<string, any>= {}

S.Todo = styled.div`
    display: flex;
`

S.ItemBlock = styled.div<TodoProps>`
    display: ${props => props.editing ? "none" : "flex"};
`

S.Item = styled.li`
    cursor: pointer;
`

S.Delete = styled.button`
`

S.EditingBlock = styled.div<TodoProps>`
    display: ${props => props.editing ? "block" : "none"};
`

S.Edit = styled.input`
`

S.SubmitChange = styled.button`
`

export default S