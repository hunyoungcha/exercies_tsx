'use client'

import Link from "next/link";
import styled from "styled-components";
import Image from "next/image"

const popualPostList =[
  {id:1, date:"25.05.16", title:"오늘 점심 뭐 먹지.."},
  {id:2, date:"25.05.16", title:"오늘 아침 뭐 먹지.."},
  {id:3, date:"25.05.16", title:"오늘 저녁 뭐 먹지.."},
  {id:4, date:"25.05.16", title:"오늘 간식 뭐 먹지.."},
];

export default function Home() {
  return (
    <>
    <TopBar>
      <Logo>
        <h1>Logo</h1>
      </Logo>
      <Signin>
        Sign in
      </Signin>
    </TopBar>
    
    <Main>
      <LeftPanel>
        <SearchBar/>
        <PopualArea>
          <PopualHeading>
            <span><Image src={`/music-note.png`} width={30} height={30}/></span>
            <span>Popular</span>
          </PopualHeading>

          <List>
            {popualPostList.map( ({id,date,title})=>(
              <SLink href={`/post/${id}`} key={id}>
                <ListRow>
                  <span>{title}</span>
                  <span>{date}</span>
                </ListRow>
              </SLink>
            ) )}
          </List>
        </PopualArea>
          
      </LeftPanel>

      <RightPanel>
        <Image
          src={"/ad.PNG"}
          alt=""
          width={300}
          height={300}
        />

      </RightPanel>
    </Main>
    </>
  );
}

const TopBar = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 50px;
  background-color: rgba(233,163,25,1);
  box-sizing: border-box;
  z-index:999;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:2rem;
`;

const Logo = styled.div`
  font-family:'Times New Roman';
  font-weight:800;
  font-size:1rem;
  color:white;
`;

const Signin = styled.button`
  width:80px;
  height:30px;
  font-family:'Times New Roman';
  background-color:rgba(233,163,20,2);
  color:white;
`;

const Main = styled.div`
  display:grid;
  grid-template-columns:7fr 3fr;
  gap: 3rem;
  margin:3rem auto;
  margin-top: 130px;
  padding:0 1rem;
  max-width: 1000;

`;

const LeftPanel = styled.div`
  display:flex;
  flex-direction:column;
`;

const RightPanel = styled.div`
  aspect-ratio: 1/2;
  position: relative;
  cursor:pointer;
`;

const SearchBar = styled.div`
  height: 2rem;

`;

const SLink = styled(Link)`
  color: inherit;

`


const PopualArea = styled.div``;
const PopualHeading = styled.div`
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap:0.5rem;
  padding-bottom:1rem;
  border-bottom: 1px solid gray;
`;
const List = styled.div``;
const ListRow = styled.div`
  display: flex;
`;