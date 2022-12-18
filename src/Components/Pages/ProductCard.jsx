import {
  Stack,
  Image,
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

function ProductCard({ category, description, image,price,rating,title

}) {
  return (
    <>
    
      <Card maxW="sm" >
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{category}  </Text>
            <Text>
             {description}
            </Text>
            <Text color="blue.600" fontSize="2xl">
            $  {price}
            </Text>
            <Text>Rating {rating.rate}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      
    </>
  );
}
export default ProductCard;
