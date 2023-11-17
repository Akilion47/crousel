import React, { useState, useContext } from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Input,
  Button,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState({});
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  const sendMessage = async (msg) => {
    try {
      let newChats = [...chats];
      newChats.push({
        customer: msg,
        agent: "AI is thinking ...",
      });
      setChats(newChats);

      const requestBody = new URLSearchParams();
      requestBody.append("message", msg);
      requestBody.append("history", JSON.stringify(history));

      const config = {
        headers: {
          accept: "application/json",
          "email-id": user.email,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      // Make a POST request to your chatbot service
      const response = await axios.post(
        "https://insurerai-backend.azurewebsites.net/chat/chat",
        requestBody,
        config
      );

      newChats[newChats.length - 1].agent = response.data.response;
      setHistory(response.data.history);
      setChats(newChats);
      setMessage("");
    } catch (error) {
      console.error("Error in sending message -->", error);
    }
  };

  return (
    <Box backgroundColor="whitesmoke">
      <Box
        height="75vh"
        maxHeight="75vh"
        scrollBehavior="smooth"
        overflow="scroll"
        padding="20px"
        border="1px solid #ccc"
        boxShadow="md"
      >
        {chats.map((chat, index) => (
          <Box key={index}>
            <Flex marginBottom="20px">
              <Avatar
                size="sm"
                name="User Avatar"
                src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                marginRight="10px"
              />
              <Text as="span" fontSize="md">
                {chat.customer}
              </Text>
            </Flex>
            <Flex marginBottom="20px">
              <Avatar
                size="sm"
                name="A I"
                src="https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-concept-in-flat-style-vector.jpg"
                marginRight="10px"
              />
              <Text as="span"> {chat.agent}</Text>
            </Flex>
          </Box>
        ))}
      </Box>
      <Spacer />
      <Box height="10vh" padding="10px" borderTop="1px solid #ccc">
        <Flex direction="row">
          <Input
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)}
            marginRight="20px"
            borderRadius="md"
            value={message}
          />
          <Button
            colorScheme="teal"
            size="md"
            mr={5}
            onClick={() => sendMessage(message)}
            _hover={{ bg: "teal.800" , boxShadow: "lg"}}
            
             boxShadow="md"
      
          >
            Send
          </Button>
          <Button
            colorScheme="teal"
            size="md"
            mr={5}
            onClick={() => sendMessage("tell me about claims")}
            _hover={{ bg: "teal.800"  , boxShadow: "lg"}}
             boxShadow="md"
          >
            Claims
          </Button>
          <Button
            colorScheme="teal"
            size="md"
            mr={5}
            onClick={() => sendMessage("tell me about my coverage")}
            _hover={{ bg: "teal.800"  , boxShadow: "lg"}}
             boxShadow="md"
          >
            Coverage
          </Button>
          <Button
            colorScheme="teal"
            size="md"
            onClick={() => sendMessage("tell me about my policy")}
            _hover={{ bg: "teal.800" , boxShadow: "lg" }}
             boxShadow="md"
          >
            Policy
          </Button>

          <Spacer />
          <Spacer />
          <Spacer />
        </Flex>
      </Box>
    </Box>
  );
};

export default Chat;
