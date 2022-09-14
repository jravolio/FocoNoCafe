import styled from "styled-components";

export const Container = styled.div`
    color: #f2f2f2;

    ::-webkit-scrollbar {
  width: 0px;
}


.container {
  display: flex;
  overflow-x: scroll;
  width: 100%;
  padding: 20px 0;
}

.card {
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-left: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
`