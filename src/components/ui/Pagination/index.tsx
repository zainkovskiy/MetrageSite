import React, { useState } from 'react';
import * as S from './style';
import { IPaginationProps } from './type';

const Pagination = ({ count, page, onChange }: IPaginationProps) => {
  const [curPage, setCurPage] = useState(page || 1);
  const changePage: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const nextPage = parseInt(e.currentTarget.id);
    setCurPage(nextPage);
    if (onChange) {
      onChange(nextPage);
    }
  };
  const getPaginationItems = () => {
    let items = [];
    if (count <= 10) {
      for (let i = 1; i <= count; i++) {
        items.push(
          <S.PaginationItem key={i} id={i.toString()} onClick={changePage}>
            {i} {curPage === i && ' страница'}
          </S.PaginationItem>
        );
      }
      return items;
    }
    if (count > 10) {
      if (curPage <= 4 || curPage >= count - 2) {
        for (let i = 1; i <= 5; i++) {
          items.push(
            <S.PaginationItem key={i} id={i.toString()} onClick={changePage}>
              {i} {curPage === i && ' страница'}
            </S.PaginationItem>
          );
        }
        items.push(<span key={'dots'}>...</span>);
        for (let i = count - 2; i <= count; i++) {
          items.push(
            <S.PaginationItem key={i} id={i.toString()} onClick={changePage}>
              {i} {curPage === i && ' страница'}
            </S.PaginationItem>
          );
        }
        return items;
      } else {
        items.push(
          <S.PaginationItem key={1} id={'1'} onClick={changePage}>
            {1} {curPage === 1 && ' страница'}
          </S.PaginationItem>
        );
        items.push(<span key={'dots'}>...</span>);
        for (let i = curPage - 1; i <= curPage + 1; i++) {
          if (i !== count - 2) {
            items.push(
              <S.PaginationItem key={i} id={i.toString()} onClick={changePage}>
                {i} {curPage === i && ' страница'}
              </S.PaginationItem>
            );
          }
        }
        {
          curPage !== count - 3 && items.push(<span key={'dots2'}>...</span>);
        }
        for (let i = count - 2; i <= count; i++) {
          items.push(
            <S.PaginationItem key={i} id={i.toString()} onClick={changePage}>
              {i} {curPage === i && ' страница'}
            </S.PaginationItem>
          );
        }
      }
      return items;
    }
  };
  return <S.Pagination>{getPaginationItems()}</S.Pagination>;
};

export default Pagination;
