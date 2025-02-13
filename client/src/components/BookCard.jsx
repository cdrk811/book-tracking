import React, { useState } from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { MenuBook } from '@mui/icons-material';

const BookIcon = styled.div`
    padding: 10px;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    background: #9000ff !important;
    color: white !important;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    position: absolute !important;
    top: 62%;
    right: 10%;
    display: none;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

const Card = styled.div`
    position: relative;
    text-decoration: none;
    background-color: ${({ theme }) => theme.card };
    max-width: 250px;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);

    &:hover {
        cursor: pointer;
        transform: translateY(-8px);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
        filter: brightness(1.3);
    }

    &:hover ${BookIcon} {
        display: flex;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    position: relative;
`;

const Favorite = styled(IconButton)`
    color: white !important;
    top: 8px;
    right: 6px;
    padding: 6px !important;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.text_secondary + 95 } !important;
    position: absolute !important;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 16px 6px #222423 !important;
`;

const CardImage = styled.img`
    object-fit: cover;
    width: 250px;
    height: 300px;
    border-radius: 6px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    }
`;

const CardInformation = styled.div`
    display: flex;
    align-items: flex-end;
    font-weight: 450;
    padding: 14px 0px 0px 0px;
    width: 100%;
`;

const MainInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
`;

const Title = styled.div`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text_primary };
`;

const Description = styled.div`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text_secondary };
    font-size: 12px;
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 6px;
`;

const Author = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const AuthorName = styled.div`
    font-size: 12px;
    width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text_secondary };
`;

const Pages = styled.div`
    font-size: 10px;
    color: ${({ theme }) => theme.text_secondary };
    width: max-content;
`;

const BookCard = ({ title, picture, description, pages, authorName }) => {
    const [favourite, setFavourite] = useState(false)

    return (
        <Card>
            <div>
                <Top>
                    <Favorite>
                        {favourite ? 
                            <FavoriteIcon style={{ width: "16px", height: "16px", color: "#E30022" }} />
                            :
                            <FavoriteIcon style={{ width: "16px", height: "16px" }} />
                        }
                    </Favorite>
                    <CardImage src={picture} />
                </Top>
                <CardInformation>
                    <MainInfo>
                        <Title>{title}</Title>
                        <Description>
                            {" "}
                            {description} 
                        </Description>
                        <AuthorInfo>
                            <Author>
                                <Avatar style={{ width: "26px", height: "26px" }}>J</Avatar>
                                <AuthorName>{authorName}</AuthorName>
                            </Author>
                            <Pages>{pages} Pages</Pages>
                        </AuthorInfo>
                    </MainInfo>
                </CardInformation>
            </div>
            
            <BookIcon>
                <MenuBook style={{ width: "28px", height: "28px" }} />
            </BookIcon>
        </Card>
    )
}

export default BookCard