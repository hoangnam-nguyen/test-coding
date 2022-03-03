import React from "react";
import {
  Box,
  Image,
  Button,
  Heading,
  Text,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function Card({ date, topic, title, image, description }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box
        w="30vw"
        rounded="20px"
        overflow="hidden"
        bg="gray.200"
        colorscheme="teal"
        _hover={{
          background: "teal.500",
          color: "white",
        }}
        onClick={onOpen}>
        <Image
          src={image}
          alt={title}
          boxSize="30vw"
          h="300px"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Box>
          <Badge variant="solid" variantcolor="teal" rounded="full" px={2} mx={2}>
            {date}
          </Badge>
          <Badge variant="solid" variantcolor="teal" rounded="full" px={2} max={2}>
            {topic}
          </Badge>
        </Box>
        <Box p={5}>
          <Heading as="h3" size="md" textAlign="center" mb={3}>
            {title}
          </Heading>
          <Text isTruncated>{description}</Text>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <Image src={image} alt={title} objectFit="cover" h="500px" fallbackSrc="https://via.placeholder.com/150" />
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>
          <ModalFooter>
            <Button colorscheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
