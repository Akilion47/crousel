import React from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";

import {
  EditIcon,
  AddIcon,
  ExternalLinkIcon,
  ChatIcon,
  LockIcon,
  StarIcon,
} from "@chakra-ui/icons"; // Use available icons

function Features({ title, text, icon }) {
  return (
    <Stack spacing={5} mb={6}>
      <Box
        p={7}
        borderWidth="1px"
        borderRadius="xl"
        boxShadow="2xl"
        bg="white"
        overflow="hidden"
        textAlign={"center"}
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Flex
          w={12}
          h={12}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bgGradient="linear(to-tr, teal.400, teal.600)"
          boxShadow="2xl"
          mb={4}
          mx="auto"
        >
          {icon}
        </Flex>
        <Text fontWeight="bold" fontSize="lg" color="teal.600" mb={2}  lineHeight="taller">
          {title}
        </Text>
        <Text color={"gray.700"} fontSize="md">{text}</Text>
      </Box>
    </Stack>
  );
}

export default function Home() {
  return (
    <Box p={10} marginTop={8}>
      <Text
        fontWeight="bold"
        fontSize="4xl"
        color="teal.600"
        textAlign="center"
        mb={8}
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)" 
      >
        Features of Our Website - DocInsight
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Features
          icon={<Icon as={EditIcon} w={10} h={10} />}
          title={"User Authentication"}
          text={
           " Our robust user authentication processes are designed to ensure that only authorized individuals have access to the information you entrust to us."
          }
        />
        <Features
          icon={<Icon as={AddIcon} w={10} h={10} />}
          title={"Hassle-Free Document Upload"}
          text={
            "Say goodbye to tedious manual data entry. Upload your documents, such as policy papers, effortlessly. Our system will extract and organize the essential details for you."
          }
        />
        <Features
          icon={<Icon as={ExternalLinkIcon} w={10} h={10} />}
          title={"AI-Powered Understanding"}
          text={
            "Harness the power of AI with our advanced Embedding Model, converting text data into vectors, and ChromaDB for semantic search. This ensures that our responses are not just accurate but also context-aware."
          }
        />
        <Features
          icon={<Icon as={ChatIcon} w={10} h={10} />}
          title={"Conversational AI Assistance"}
          text={
            "Get answers to your queries with the help of our cutting-edge Conversational Model powered by GPT-3.5 Turbo. It understands your context and provides natural, human-like responses for a seamless user experience."
          }
        />
        <Features
          icon={<Icon as={LockIcon} w={10} h={10} />}
          title={"Data Privacy and Security"}
          text={
            "Your data privacy is our top priority. We adhere to the highest standards of security and data protection, ensuring that your sensitive information remains confidential and safe.Rest assured that we employ state-of-the-art encryption technologies."
          }
        />
        <Features
          icon={<Icon as={StarIcon} w={10} h={10} />}
          title={"24/7 support"}
          text={
            "Our commitment to your satisfaction is unwavering.Whether it's troubleshooting, guidance, or simply a friendly conversation, we're here around the clock. Your seamless experience is our top priority"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
