import React from 'react'
import BookCard from "../components/BookCard";
import styled from 'styled-components';

import Book1 from "../Images/Book_1.jpg";
import Book2 from "../Images/Book_2.jpg";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary };
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
      font-size: 18px;
  }
`;

const FavouriteContainer = styled.div` 
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;

  @media (max-width: 550px) {
      justify-content: center;
  }
`;

const Favourites = () => {
  return (
    <Container>
      <Topic>Favourites</Topic>
      <FavouriteContainer>
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
      <BookCard 
        title="Killer Instinct (The Naturals 2)" 
        picture={Book2}
        description="After the events of the first book, Cassie Hobbes and her 
        fellow Naturals are still recovering from their last case. However, 
        things take a dark turn when a new serial killer emerges, copying the 
        methods of Dean’s father, a notorious murderer. As Dean struggles with 
        his past, Cassie and the team must work to stop the killer before it's 
        too late."
        authorName="Jennifer Lynn Barnes"
        pages="384"
      />
      </FavouriteContainer>
    </Container>
  )
}

export default Favourites