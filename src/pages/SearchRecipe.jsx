import { Container, Input } from "@chakra-ui/react";

export const SearchRecipe = ({ userSearch }) => {
  return (
    <>
      <Container>
        <Input
          bg={"white"}
          m={"25px auto"}
          type="text"
          placeholder="Search for:"
          onChange={(e) => userSearch(e.target.value.toLowerCase())}
        ></Input>
      </Container>
    </>
  );
};
