import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

interface FilterState {
  perPage: number;
  page: number;
  search: string;
  searchType:string;
}

export const usePaginate = () => {
  const [filterState, setFilterState] = useState<FilterState>({
    perPage: 12,
    page: 1,
    search: "",
    searchType:"name"
  });
  const { perPage, page, search, searchType } = filterState;
  const dispatch = useDispatch();

  const handlePageSet = (e: any, page: number) => {
    setFilterState({
      ...filterState,
      page,
    });
  };

  const handlePerPageSet = (e: any, perPage: number) => {
    setFilterState({ ...filterState, perPage });
  };

  const handleFilterChange = (search: string, searchType:string) => {
    setFilterState({
      ...filterState,
      search,
      searchType
    });
  };

  const debouncedFilterUpdate = debounce(
    (search: string, searchType:string ) => handleFilterChange(search, searchType),
    500
  );

  const run = useCallback(
    (action: any) => {
      dispatch(action(searchType,search,perPage, perPage * (page - 1)));
    },
    [page, perPage, search, dispatch, searchType]
  );

  return {
    filterState,
    handlePageSet,
    handlePerPageSet,
    handleFilterChange,
    run,
    debouncedFilterUpdate,
    dispatch,
  };
};
