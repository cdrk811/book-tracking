import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import BookCard from '../components/BookCard';

import Book1 from "../Images/Book_1.jpg";

const DisplayMain = styled.div`
  display: flex;
  padding: 30px 30px;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll
`;

const Container = styled.div`
  backgroun-color: ${({ theme }) => theme.bg };
  padding: 20px;
  border-radius: 6px;
  min-height: 400px;
`;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary };
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const BookTracker = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 10px;
  padding: 30px 0px;
`;

const DisplayNo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.text_primary };
`;

const DisplayBook = () => {
  return (
    <DisplayMain>
      <Container>
        <Topic>All Book</Topic>
        {/* {Loading ?  */}
          {/* <Loader>
            <CircularProgress />
          </Loader> */}
          {/* : */}
          <BookTracker>
            {/* <DisplayNo>No Podcasts</DisplayNo> */}
            <BookCard 
              title="The Naturals (The Naturals, 1)" 
              picture={Book1} 
              description="The Naturals by Jennifer Lynn Barnes is a young adult 
              psychological thriller novel published in 2013. It follows Cassie 
              Hobbes, a 17-year-old girl with an exceptional ability to read people. 
              Because of her natural talent for profiling, she is recruited by the 
              FBI to join a special program for gifted teenagers who help solve cold 
              cases."
              authorName="Jennifer Lynn Barnes"
              pages="308"
            />
          </BookTracker>
        {/* } */}
        
      </Container>
    </DisplayMain>
  )
}

export default DisplayBook