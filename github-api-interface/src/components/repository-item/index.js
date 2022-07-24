import React from "react";
import * as S from "./styled";

const RepositoryItem = ({name, linkToRepo, fullName}) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.wrapperLink href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</S.wrapperLink>
    </S.Wrapper>  
    
  );
}

export default RepositoryItem;