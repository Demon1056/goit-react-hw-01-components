import styled from 'styled-components';
export const FriendSListStyle = styled.li`
background-color: white;
padding: 10px;
display: flex;
align-items: center;
border-radius: 10px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
font-size: 25px;
font-weight: bold;
:not(:last-child) {
    margin-bottom: 10px;}
    ::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${(p)=>p.children.props.isOnline?'green':'red'
    };
    margin-left: 15px;
    margin-right: 30px;
    border-radius: 50%;
}
`
