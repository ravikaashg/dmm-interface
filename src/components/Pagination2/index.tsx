import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

import { DOTS, usePagination } from 'components/Pagination2/usePagination'
import { ButtonStyle, PaginationContainer, PaginationItem } from 'components/Pagination2/styles'
import useTheme from 'hooks/useTheme'

export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: {
  onPageChange: (newPage: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  const theme = useTheme()

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    if (currentPage < paginationRange[paginationRange.length - 1]) {
      onPageChange(currentPage + 1)
    }
  }

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <PaginationContainer>
      <PaginationItem $disabled={currentPage === 1} onClick={onPrevious}>
        <ButtonStyle>
          <ChevronLeft width={24} color={theme.primary} />
        </ButtonStyle>
      </PaginationItem>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItem key={index.toString()} $selected>
              &#8230;
            </PaginationItem>
          )
        }
        return (
          <PaginationItem
            key={index.toString()}
            $selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber as number)}
          >
            <ButtonStyle active={pageNumber === currentPage}>{pageNumber}</ButtonStyle>
          </PaginationItem>
        )
      })}
      <PaginationItem $disabled={currentPage === lastPage} onClick={onNext}>
        <ButtonStyle>
          <ChevronRight width={24} color={theme.primary} />
        </ButtonStyle>
      </PaginationItem>
    </PaginationContainer>
  )
}