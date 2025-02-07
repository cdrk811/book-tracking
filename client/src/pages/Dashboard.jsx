import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BookCard from '../components/BookCard';

import Book1 from "../Images/Book_1.jpg";
import Book2 from "../Images/Book_2.jpg";
import Book3 from "../Images/Book_3.jpg";
import Book4 from "../Images/Book_4.jpg";

const DashboardMain = styled.div`
    padding: 20px 30px;
    padding-bottom: 200px;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
        padding: 6px 10px;
    }
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bg };
    border-radius: 10px;
    padding: 20px 30px;
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

const Span = styled.div`
    color: ${({ theme }) => theme.primary };
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const BookTracker = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    padding: 18px 6px;

    @media (max-width: 550px) {
        justify-content: center;
    }
`;

const Dashboard = () => {
  return (
    <DashboardMain>
        <FilterContainer>
            <Topic>
                Most Popular Books
                <Link to={`/show_books/most_popular`} style={{ textDecoration: "none" }}>
                    <Span>Show All</Span>
                </Link>
            </Topic>
            <BookTracker>
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
                <BookCard 
                    title="All In (The Naturals, 3)" 
                    picture={Book3} 
                    description="This time, Cassie Hobbes and her team are pulled into a 
                    dangerous case involving a string of murders in Las Vegas. Each victim 
                    is found with a distinctive mark, and the killings seem to follow an 
                    unsettling pattern. As they investigate, they realize the murders are 
                    connected to something even bigger and more sinister than they first 
                    thought."
                    authorName="Jennifer Lynn Barnes"
                    pages="384"
                />
                <BookCard 
                    title="Bad Blood (The Naturals, 4)" 
                    picture={Book4} 
                    description="In this installment, Cassie Hobbes and her team are no 
                    longer just solving cold cases—they're hunting down an active, dangerous 
                    network of serial killers. After uncovering shocking truths about her 
                    past, Cassie is determined to bring down the people responsible. But 
                    these killers aren’t just ordinary criminals; they are highly organized, 
                    manipulative, and always one step ahead."
                    authorName="Jennifer Lynn Barnes"
                    pages="384"
                />
            </BookTracker>
        </FilterContainer>

        <FilterContainer>
            <Topic>
                Completed Books
                <Link to={`/show_books/most_popular`} style={{ textDecoration: "none" }}>
                    <Span>Show All</Span>
                </Link>
            </Topic>

            <BookTracker>
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
            </BookTracker>
        </FilterContainer>

        <FilterContainer>
            <Topic>
                Pending Books
                <Link to={`/show_books/most_popular`} style={{ textDecoration: "none" }}>
                    <Span>Show All</Span>
                </Link>
            </Topic>

            <BookTracker>
                <BookCard 
                    title="All In (The Naturals, 3)" 
                    picture={Book3} 
                    description="This time, Cassie Hobbes and her team are pulled into a 
                    dangerous case involving a string of murders in Las Vegas. Each victim 
                    is found with a distinctive mark, and the killings seem to follow an 
                    unsettling pattern. As they investigate, they realize the murders are 
                    connected to something even bigger and more sinister than they first 
                    thought."
                    authorName="Jennifer Lynn Barnes"
                    pages="384"
                />
                <BookCard 
                    title="Bad Blood (The Naturals, 4)" 
                    picture={Book4} 
                    description="In this installment, Cassie Hobbes and her team are no 
                    longer just solving cold cases—they're hunting down an active, dangerous 
                    network of serial killers. After uncovering shocking truths about her 
                    past, Cassie is determined to bring down the people responsible. But 
                    these killers aren’t just ordinary criminals; they are highly organized, 
                    manipulative, and always one step ahead."
                    authorName="Jennifer Lynn Barnes"
                    pages="384"
                />
            </BookTracker>
        </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard