import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Image,
  Flex,
  Tag,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const RecipeList = ({ recipes, userSelect }) => {
  const shortHealthLabelList = ["Vegetarian", "Vegan"];
  return (
    <Flex
      flexDir={"row"}
      flexWrap={"wrap"}
      margin={"15px"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      {recipes.map((item) => (
        <React.Fragment key={item.label}>
          <Card
            width={"20em"}
            height={"500px"}
            margin={"10px"}
            borderRadius={"25px"}
            align={"center"}
            cursor={"pointer"}
            onClick={() => userSelect(item.label)}
            backgroundColor={"white"}
          >
            <CardBody padding={"0"}>
              <Image
                key={item.image}
                src={item.image}
                alt={item.label}
                borderRadius={"25px 25px 0 0"}
                padding={"0"}
                width={"100%"}
                height={"200px"}
                objectFit={"cover"}
              />
              <Stack align={"center"}>
                <Text key={item.mealType} align={"center"}>
                  {item.mealType}
                </Text>
                <CardHeader
                  key={item.label}
                  fontSize={"1.2em"}
                  fontWeight={"bold"}
                  align={"center"}
                >
                  {item.label}
                </CardHeader>
                <Stack
                  key={"health-label"}
                  flexWrap={"wrap"}
                  width={"100%"}
                  alignContent={"center"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={"0"}
                  gap={"5px"}
                >
                  {shortHealthLabelList.map((v) => {
                    if (item.healthLabels.includes(v)) {
                      return (
                        <Tag
                          key={v}
                          margin={"0 !important"}
                          width={"max-content"}
                          height={"max-content"}
                          bg={"purple.100"}
                        >
                          {v}
                        </Tag>
                      );
                    } else {
                      return false;
                    }
                  })}
                </Stack>
                <Stack
                  key={"diet-label"}
                  flexWrap={"wrap"}
                  width={"100%"}
                  alignContent={"center"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"5px"}
                >
                  {item.dietLabels.map((dietLabel) => {
                    return (
                      <Tag
                        margin={"0 !important"}
                        key={dietLabel}
                        bg={"lightgreen"}
                      >
                        {dietLabel}
                      </Tag>
                    );
                  })}
                </Stack>
                <Text key={item.dishType}>Dish type: {item.dishType}</Text>
                <Text>Cautions:</Text>
                <Stack
                  key={"caution-label"}
                  flexWrap={"wrap"}
                  width={"100%"}
                  alignContent={"center"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={"0"}
                  gap={"5px"}
                >
                  {item.cautions.map((caution) => {
                    return (
                      <Tag margin={"0 !important"} key={caution} bg={"red.300"}>
                        {caution}
                      </Tag>
                    );
                  })}
                </Stack>
              </Stack>
            </CardBody>
          </Card>
        </React.Fragment>
      ))}
    </Flex>
  );
};
