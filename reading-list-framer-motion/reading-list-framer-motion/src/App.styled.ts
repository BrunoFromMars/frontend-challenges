import styled from "@emotion/styled";
import { motion } from "framer-motion";

const appContainerBGColor = "#040D12";
const readingListTitleColor = "#5C8374";
const hrBorderColor = "#183D3D";

export const AppContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: ${appContainerBGColor};
`;

export const BooksContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 1000px;
  gap: 20px;
  padding: 20px 30px;
  overflow-y: hidden;
`;

export const BooksListContainer = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  background-color: white;
  width: 100%;
  min-width: 1400px;
  height: 1000px;
  padding: 20px;
  border-radius: 20px;
`;

export const BookCoverWrapper = styled(motion.div)`
  box-sizing: border-box;

  width: 210px;
  border-radius: 10px;
`;

export const ReadingListBookWrapper = styled(BookCoverWrapper)`
  width: 100%;
  border-radius: 20px;
`;

export const ReadingListContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  width: 450px;
  padding: 20px;
  height: 100%;
  min-height: 1000px;
`;

export const TitleDiv = styled.div`
  font-size: xx-large;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  font-style: normal;
  color: ${readingListTitleColor};
`;

export const StyledHr = styled.div`
  border: none;
  border-top: 6px dotted ${hrBorderColor};
  width: 100%;
`;

export const ReadingListWrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
  padding: 5px 10px;
`;
