import styled from "styled-components";


export const TodoListWrapper = styled.div`

    & ul{
        list-style: none;

        & li {
            display: flex;
            align-content: center;
            grid-gap: 16px;
            & .close{
                width: 20px;
                height: 20px;
                background: red;
                color: #fff;
                border-radius: 50%;
               
                justify-content: center;
                align-items: center;
                cursor: pointer;
                display: none;
            }
            & .checked_item ~ .close{
                display: flex;
            }
        }
    }
`